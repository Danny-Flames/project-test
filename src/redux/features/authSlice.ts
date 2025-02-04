import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IAuth, ILoginPayload } from "../../constants/interfaces";

// Initial state for auth
const initialState: IAuth = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: '',
};

// Register user thunk
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData: IAuth["user"], { rejectWithValue }) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.some(
      (user: IAuth["user"]) => user?.email === userData?.email
    );

    if (userExists) {
      return rejectWithValue("User with this email already exists");
    }

    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    return userData;
  }
);

// Login user thunk
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials: ILoginPayload, { rejectWithValue }) => {
    try {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(
        (user: IAuth["user"]) =>
          user?.email === credentials.email &&
          user?.password === credentials.password
      );

      if (!user) {
        return rejectWithValue("Invalid email or password");
      }

      localStorage.setItem("user", JSON.stringify(user));
      return user;
    } catch (error) {
      return rejectWithValue("An error occurred while logging in");
    }
  }
);

// Logout user action
export const logoutUser = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("user");
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = action.payload;
          state.isAuthenticated = true;
          state.error = null;
        }
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.error = null;
      });
  },
});

export default authSlice.reducer;
