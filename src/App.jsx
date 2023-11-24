/* eslint-disable react/jsx-no-undef */
// import FixedNavbar from "./components/navbar-fixed/FixedNavbar";
// import Header from "./components/header/Header";
// import Sidebar from "./components/sidebar/Sidebar";
// import Kombo from "./components/kombo/Kombo";
// import Pizza from "./components/pizza/Pizza";
// import Footer from "./components/footer/Footer";
// import { Route, Router, Routes } from "react-router-dom";
import HomaPage from "./Pages/HomaPage";
// import KomboPage from "./Pages/KomboPage";
// import PitsaPage from "./Pages/PitsaPage";
// import RegistrationForm from "./Pages/RegisterPage";

// import RegistrationForm from "./components/register/Register";
// import SignInForm from "./components/register/SignIn";

const App = () => {
  return (
    <>
      <HomaPage />
      {/* <Router>
        <Routes>
          <Route path="/" element={<HomaPage />} />
          <Route path="./Pages/KomboPage.jsx" element={<KomboPage />} />
          <Route path="./Pages/PitsaPage.jsx" element={<PitsaPage />} />
          <Route
            path="./Pages/RegisterPage.jsx"
            element={<RegistrationForm />}
          />
          <Route path="./Pages/HomaPage.jsx" element={<HomaPage />} />
        </Routes>
      </Router> */}
    </>
  );
};

export default App;
