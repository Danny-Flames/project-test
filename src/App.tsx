import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";
import SignInForm from "./pages/SignInForm";
import LoginForm from "./pages/LoginForm";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Dashboard from "./components/dashboard/Dashboard";

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/auth/register" element={<SignInForm />} />
        <Route path="/auth/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
