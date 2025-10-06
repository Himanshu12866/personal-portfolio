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
    <>
      <title>Contact Himanshu | Web Development Projects & Hiring</title>

      <meta
        name="description"
        content="Get in touch with Himanshu for web development projects, collaborations, or inquiries. Reach out via email, social media, or contact form for fast and professional responses."
      />
      <meta
        name="keywords"
        content="Himanshu, Contact, Web Developer, Portfolio, Email, Social Media, Collaboration, Frontend Developer, React JS, Tailwind CSS, JavaScript, Node.js"
      />
      {/* Open Graph */}
      <meta
        property="og:title"
        content="Contact Himanshu | Web Development Portfolio"
      />
      <meta
        property="og:description"
        content="Reach out to Himanshu for collaborations, inquiries, or web development projects. Fast and professional communication for all inquiries."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourportfolio.com/contact" />
      <meta
        property="og:image"
        content="https://yourportfolio.com/contact-preview.png"
      />
      <ContactBanner />
      <ContactSocial />
      <HomeContact />
    </>
  );
};

export default ContactPage;
