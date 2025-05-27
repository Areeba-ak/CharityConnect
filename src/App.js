import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home"; 
import Header from "./pages/Home/Header";  
import TopBar from "./pages/Home/TopBar";  
import RoleSelectionPage from "./pages/Login/RoleSelectionPage";
import DonorLogin from "./pages/Login/DonorLogin";
import NeedyLogin from "./pages/Login/NeedyLogin";
import AdminLogin from "./pages/Login/AdminLogin";
import DonorSignup from "./pages/Login/DonorSignup";
import NeedySignup from "./pages/Login/NeedySignup";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Footer from "./pages/Home/Footer";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6a1b9a',
    },
    secondary: {
      main: '#ff4d6d',
    },
  },
  typography: {
    fontFamily: 'Segoe UI, sans-serif',
  },
});

function Layout() {
  const location = useLocation();
  const hideFooter = location.pathname === "/adminDashboard";

  return (
    <>
      <TopBar />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select-role" element={<RoleSelectionPage />} />
        <Route path="/login/donor" element={<DonorLogin />} />
        <Route path="/login/needy" element={<NeedyLogin />} />
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/donor/signup" element={<DonorSignup />} />
        <Route path="/needy/signup" element={<NeedySignup />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        {/* More routes here */}
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  );
}

export default App;
