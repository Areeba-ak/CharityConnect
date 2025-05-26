import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home"; // for home page
import Header from "./pages/Home/Header";  // for header page 
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
      main: '#6a1b9a', // Light purple
    },
    secondary: {
      main: '#ff4d6d',
    },
  },
  typography: {
    fontFamily: 'Segoe UI, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
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
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
