import React, { useEffect } from "react";
import ContactBanner from "../../components/contact/ContactBanner";
// import ContactForm from "../../components/contact/ContactForm";
import HomeContact from "../../components/home/HomeContact";
import { useLenis } from "../../components/SmoothScroll";

const ContactPage = () => {
    const lenisRef = useLenis();
    useEffect(() => {
      lenisRef?.current?.scrollTo(0); // top of the page
    }, []);
  return (
    <div>
      <ContactBanner />
      <HomeContact />
    </div>
  );
};

export default ContactPage;
