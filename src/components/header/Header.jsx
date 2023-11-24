/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Header.module.css";
import { CgMenu } from "react-icons/cg";
import { FiShoppingCart, FiPhoneCall } from "react-icons/fi";
import logo from "../../assets/images/logo.webp";
import halal from "../../assets/images/halal.webp";

import Cart from "../cart/Cart";
import NavbarMobile from "../navbar-mobile/NavbarMobile";
import Overlay from "../../utils";
import locationSvg from "../../assets/images/location.svg";
// import RegistrationForm from "../register/Register";
import { NavLink } from "react-router-dom";

// import { useHistory } from "react-router-dom"; // Import useHistory

const Header = () => {
  // const history = useHistory(); // Initialize history
  const [navbarActive, setNavbarActive] = useState(false);
  const selector = useSelector((state) => state);
  const [delivery, setDelivery] = useState(true);
  const [cartActive, setCartActive] = useState(false);
  const [cityName, setCityName] = useState("" || "Toshkent");
  const btnEnter = {
    marginTop: "8px",
    padding: "11px 24px",
    width: "86px",
    height: "41px",
    background: "#047857",
    color: "#fff",
    marginLeft: "30px",
    fontSize: "16px",
    border: "none",
    borderRadius: "30px",
    textAlign: "center",
    fontWeight: "700",
  };

  if (cartActive) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.header_wrapper}>
            <div
              className={styles.header_hamburger}
              onClick={() => setNavbarActive(true)}
            >
              <CgMenu />
            </div>
            <div className={styles.header_order}>
              <div
                className={styles.deliver_order}
                onClick={() => setDelivery(true)}
                style={
                  delivery
                    ? {
                        backgroundColor: "#fff",
                        boxShadow: "0px 3px 6px 1px #bcc5c2",
                      }
                    : { backgroundColor: "transparent", color: "#828282" }
                }
              >
                Yetkazib berish
              </div>
              <div
                className={styles.deliver_order}
                onClick={() => setDelivery(false)}
                style={
                  !delivery
                    ? {
                        backgroundColor: "#fff",
                        boxShadow: "0px 3px 6px 1px #bcc5c2",
                      }
                    : { backgroundColor: "transparent", color: "#828282" }
                }
              >
                Olib ketish
              </div>
            </div>
            <div
              className={styles.header_cart}
              onClick={() => setCartActive(true)}
            >
              <FiShoppingCart />
              <span>{selector?.cart?.cart?.length}</span>
            </div>
          </div>
          <div className={styles.header_desktop}>
            <div className={styles.header_logo}>
              <a href="/">
                <img src={logo} alt="loading..." />
              </a>
            </div>
            <div className={styles.header_location}>
              <img src={locationSvg} alt="" />
              <h3 className={styles.header_city}>
                Shahar:
                <span>{cityName}</span>
              </h3>
            </div>
            <div className={styles.header_call}>
              <div className={styles.header_number}>
                <FiPhoneCall className={styles.header_callIcon} />
                <span>1174</span>
              </div>
              <div className={styles.header_guaranteeText}>
                45 daqiqada tekin yetkazib beramiz yoki pitsa bepul
              </div>
            </div>
            <div className={styles.header_halal}>
              <img src={halal} alt="loading..." />
            </div>

            <button style={btnEnter}>Kirish</button>
          </div>
        </div>
      </header>
      {cartActive && <Cart callback={setCartActive} />}
      {navbarActive && (
        <NavbarMobile callback={setNavbarActive} headerCity={setCityName} />
      )}
      {navbarActive && <Overlay callback={setNavbarActive} />}
    </>
  );
};

export default Header;

// /* eslint-disable no-unused-vars */
// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import styles from "./Header.module.css";
// import { CgMenu } from "react-icons/cg";
// import { FiShoppingCart, FiPhoneCall } from "react-icons/fi";
// import logo from "../../assets/images/logo.webp";
// import halal from "../../assets/images/halal.webp";
// // eslint-disable-next-line no-unused-vars
// import { FaStar } from "react-icons/fa";
// import Cart from "../cart/Cart";
// import NavbarMobile from "../navbar-mobile/NavbarMobile";
// import Overlay from "../../utils";
// import locationSvg from "../../assets/images/location.svg";

// const Header = () => {
//   const [navbarActive, setNavbarActive] = useState(false);
//   const selector = useSelector((state) => state);
//   const [delivery, setDelivery] = useState(true);
//   const [cartActive, setCartActive] = useState(false);
//   const [cityName, setCityName] = useState("" || "Toshkent");
//   const btnEnter = {
//     marginTop: "8px",
//     padding: "11px 24px",
//     width: "86px",
//     height: "41px",
//     background: "#047857",
//     color: "#fff",
//     marginLeft: "30px",
//     fontSize: "16px",
//     border: "none",
//     borderRadius: "30px",
//     textAlign: "center",
//     fontWeight: "700",
//   };

//   if (cartActive) {
//     document.body.style.overflow = "hidden";
//   } else {
//     document.body.style.overflow = "auto";
//   }

//   return (
//     <>
//       <header className={styles.header}>
//         <div className="container">
//           <div className={styles.header_wrapper}>
//             <div
//               className={styles.header_hamburger}
//               onClick={() => setNavbarActive(true)}
//             >
//               <CgMenu />
//             </div>
//             <div className={styles.header_order}>
//               <div
//                 className={styles.deliver_order}
//                 onClick={() => setDelivery(true)}
//                 style={
//                   delivery
//                     ? {
//                         backgroundColor: "#fff",
//                         boxShadow: "0px 3px 6px 1px #bcc5c2",
//                       }
//                     : { backgroundColor: "transparent", color: "#828282" }
//                 }
//               >
//                 Yetkazib berish
//               </div>
//               <div
//                 className={styles.deliver_order}
//                 onClick={() => setDelivery(false)}
//                 style={
//                   !delivery
//                     ? {
//                         backgroundColor: "#fff",
//                         boxShadow: "0px 3px 6px 1px #bcc5c2",
//                       }
//                     : { backgroundColor: "transparent", color: "#828282" }
//                 }
//               >
//                 Olib ketish
//               </div>
//             </div>
//             <div
//               className={styles.header_cart}
//               onClick={() => setCartActive(true)}
//             >
//               <FiShoppingCart />
//               <span>{selector?.cart?.cart?.length}</span>
//             </div>
//           </div>
//           <div className={styles.header_desktop}>
//             <div className={styles.header_logo}>
//               <a href="/">
//                 <img src={logo} alt="loading..." />
//               </a>
//             </div>
//             <div className={styles.header_location}>
//               <img src={locationSvg} alt="" />
//               <h3 className={styles.header_city}>
//                 Shahar:
//                 <span>{cityName}</span>
//               </h3>
//             </div>
//             <div className={styles.header_call}>
//               <div className={styles.header_number}>
//                 <FiPhoneCall className={styles.header_callIcon} />
//                 <span>1174</span>
//               </div>
//               <div className={styles.header_guaranteeText}>
//                 45 daqiqada tekin yetkazib beramiz yoki pitsa bepul
//               </div>
//             </div>
//             <div className={styles.header_halal}>
//               <img src={halal} alt="loading..." />
//             </div>
//             <button style={btnEnter}>Kirish</button>
//           </div>
//         </div>
//       </header>
//       {cartActive && <Cart callback={setCartActive} />}
//       {navbarActive && (
//         <NavbarMobile callback={setNavbarActive} headerCity={setCityName} />
//       )}
//       {navbarActive && <Overlay callback={setNavbarActive} />}
//     </>
//   );
// };

// export default Header;
