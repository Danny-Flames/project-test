import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IAuth, ILoginPayload } from "../../constants/interfaces";
import { getDecryptedAuthToken, getDecryptedUsers, saveEncryptedAuthToken, saveEncryptedUsers } from "../../helpers/localStorage";

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
    try {
      // Get and decrypt existing users
      const users = getDecryptedUsers();

      // Check if user exists
      const userExists = users.some(
        (user) => user?.email === userData?.email
      );

      if (userExists) {
        return rejectWithValue("User with this email already exists");
      }

      // Add new user and encrypt before saving
      const updatedUsers = [...users, userData];
      saveEncryptedUsers(updatedUsers);

      return userData;
    } catch (error) {
      console.error("Registration error:", error);
      return rejectWithValue(
        "An error occurred during registration. Please try again."
      );
    }
  }
);

// Login user thunk
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const users = getDecryptedUsers();
      
      const user = users.find(
        (u) => u?.email === credentials.email && u?.password === credentials.password
      );

      if (!user) {
        return rejectWithValue("Invalid email or password");
      }

      // Save encrypted auth token
      saveEncryptedAuthToken(user);

      return user;
    } catch (error) {
      console.error("Login error:", error);
      return rejectWithValue(
        "An error occurred during login. Please try again."
      );
    }
  }
);

// Check auth status thunk
export const checkAuthStatus = createAsyncThunk(
  "auth/checkStatus",
  async (_, { rejectWithValue }) => {
    try {
      const user = getDecryptedAuthToken();
      if (!user) {
        return rejectWithValue("No authenticated user");
      }
      return user;
    } catch (error) {
      console.error("Auth check error:", error);
      return rejectWithValue("Failed to verify authentication");
    }
  }
);

// Logout user action
export const logoutUser = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("authToken");
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
