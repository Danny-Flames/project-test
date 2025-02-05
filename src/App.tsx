import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import ComingSoon from "./pages/ComingSoon";
import LoginForm from "./pages/LoginForm";
import Dashboard from "./components/dashboard/Dashboard";
import Orders from "./components/pages/Orders";
import Products from "./components/pages/Products";
import Categories from "./components/pages/Categories";
import Brands from "./components/pages/Brands";
import Refunds from "./components/pages/Refunds";
import Support from "./components/pages/Support";
import Configuration from "./components/pages/Configuration";
import ProtectedRoute from "./guard/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import PublicRoute from "./guard/PublicRoute";
import DashboardReport from "./components/dashboard/DashboardReport";
import SignUpForm from "./pages/SignUpForm";

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicRoute />}>
          <Route path="/" element={<SignUpForm />} />
          <Route path="/auth/register" element={<SignUpForm />} />
          <Route path="/auth/login" element={<LoginForm />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/report" element={<DashboardReport />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/refunds" element={<Refunds />} />
          <Route path="/support" element={<Support />} />
          <Route path="/configuration" element={<Configuration />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </Provider>
);

export default App;
