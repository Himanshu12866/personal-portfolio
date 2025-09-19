import React, { useEffect } from "react";
import ContactBanner from "../../components/contact/ContactBanner";
import HomeContact from "../../components/home/HomeContact";
import { useLenis } from "../../components/SmoothScroll";
import ContactSocial from "../../components/contact/ContactSocial";

const ContactPage = () => {
  const lenisRef = useLenis();
  useEffect(() => {
    lenisRef?.current?.scrollTo(0); // top of the page
  }, []);
  return (
    <div>
      <ContactBanner />
      <ContactSocial />
      <HomeContact />
    </div>
  );
};

export default ContactPage;
