import React from "react";
import { FooterIcon } from "./FooterIcon";

export const Footer = () => {
  return (
    <div className="h-100">
      <footer className="bg-success h-auto contacto-inferior d-flex justify-content-center">
        <FooterIcon
          icon="fa-brands fa-telegram"
          linkSocialMedia="https://t.me/rmwifi"
        />
        <FooterIcon
          icon="fa-brands fa-whatsapp"
          linkSocialMedia="https://walink.co/03da0e"
        />
        <FooterIcon
          icon="fa-solid fa-envelope"
          linkSocialMedia="https://mail.google.com/"
        />
      </footer>
    </div>
  );
};
