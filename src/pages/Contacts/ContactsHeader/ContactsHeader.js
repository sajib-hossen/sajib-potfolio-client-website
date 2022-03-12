import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Contacts from "../Contacts/Contacts";

const ContactsHeader = () => {
  return (
    <div className="h-100">
      <Navigation />
      <Contacts />
      <Footer />
    </div>
  );
};

export default ContactsHeader;
