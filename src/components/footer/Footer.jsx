/* eslint-disable react/no-unescaped-entities */
// import React, { useState } from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/footer-logo.svg";
import payme from "../../assets/images/payme-footer.svg";
import uzcard from "../../assets/images/uzcard-footer.svg";
import instagram from "../../assets/images/instagram.svg";
import telegram from "../../assets/images/telegram-icon.svg";
import facebook from "../../assets/images/footer-facebook.svg";
import click from "../../assets/images/click-footer.svg";
import humo from "../../assets/images/humo-footer.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerNav}>
          <div className={styles.row1}>
            <img src={logo} alt="" />
            <p>RAQAMGA QO'NG'IROQ QILING - 1174</p>
          </div>
          <div className={styles.row2}>
            <a href="#">Biz haqimizda</a>
            <a href="#">Ommaviy oferta</a>
            <a href="#">Maxfiylik siyosati</a>
            <a href="#">Halol Sertifikati</a>
            <a href="#">Restoranlar</a>
          </div>
          <div className={styles.row3}>
            <a href="#">Franchayzi</a>
            <a href="#">Bizning ish o'rinlarimiz</a>
          </div>
          <div className={styles.row4}>
            <img src={payme} alt="" />
            <img src={click} alt="" />
          </div>
          <div className={styles.row5}>
            <img src={uzcard} alt="" />
            <img src={humo} alt="" />
          </div>
          <div className={styles.row6}>
            <p>Bizni Kuzatip boring</p>
            <div className={styles.icons}>
              <a href="#">
                <img src={facebook} alt="" />
              </a>
              <a href="#">
                <img src={instagram} alt="" />
              </a>
              <a href="#">
                <img src={telegram} alt="" />
              </a>
            </div>
          </div>
        </div>
        <p className={styles.licence}>© 2016-2023 Bellissimo Pizza.</p>
      </div>
    </div>
  );
};

export default Footer;
