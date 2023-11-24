// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import styles from "./FixedNavbar.module.css";
import logo from "../../assets/images/icon.webp";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";
import Overlay from "../../utils/index";
// import { Link } from "react-router-dom";
// import PitsaPage from "../../Pages/PitsaPage";

// import { useHistory } from "react-router-dom";

// import { useNavigate } from "react-router";

const Catalog = () => {
  // const navigate = useNavigate();
  const selector = useSelector((state) => state);
  const logoVisible = useRef();
  const fixedCatalog = useRef();
  // const history = useHistory();
  const [cartActive, setCartActive] = useState(false);
  window.addEventListener("scroll", function () {
    fixedCatalog?.current?.classList.toggle(
      `${styles.sticky}`,
      this.window.scrollY > 230
    );
  });

  if (cartActive) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  // const handleNavbarFixed = () => {
  //   navigate("../../Pages/KomboPage.jsx");
  // };

  return (
    <>
      <div className={styles.catalog} ref={fixedCatalog}>
        <div className="container">
          <div className={styles.catalog_wrapper}>
            <div className={styles.catalog_logo} ref={logoVisible}>
              {/* <Link to="../../Pages/HomaPage.jsx"> */}
              <img src={logo} alt="loading..." />
              {/* </Link> */}
              {/* <img src={logo} alt="loading..." /> */}
            </div>
            <div className={styles.navbarProduct}>
              <div className={styles.navlinks}>
                <span>
                  {/* <Link to="../../Pages/KomboPage.jsx"> */}
                  <button className={styles.btnKombo}>Kombo</button>
                  {/* </Link> */}
                </span>
                <span>
                  {/* <Link to="../../Pages/PitsaPage.jsx"> */}
                  <button className={styles.btnPizza}>Pitsa</button>
                  {/* </Link> */}
                </span>
                <span>
                  <a href="#">Gazaklar</a>
                </span>
                <span>
                  <a href="#">Ichimliklar</a>
                </span>
                <span>
                  <a href="#">Salatlar</a>
                </span>
                <span>
                  <a href="#">Desertlar</a>
                </span>
                <span>
                  <a href="#">Souslar</a>
                </span>
              </div>
            </div>
            <div className={styles.fixed_cart}>
              <div
                className={styles.cart_box}
                onClick={() => setCartActive(true)}
              >
                Savatchada
                <span> | {selector?.cart?.cart?.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {cartActive && <Cart callback={setCartActive} />}
      {cartActive && <Overlay callback={setCartActive} />}
    </>
  );
};

export default Catalog;
