import Footer from "../components/footer/Footer";
import Kombo from "../components/kombo/Kombo";
import Pizza from "../components/pizza/Pizza";
import FixedNavbar from "../components/navbar-fixed/FixedNavbar";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";

function HomaPage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <FixedNavbar />
      <Kombo />
      <Pizza />
      <Footer />
    </div>
  );
}

export default HomaPage;
