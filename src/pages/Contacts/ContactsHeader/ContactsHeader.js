import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Contacts from "../Contacts/Contacts";

const ContactsHeader = () => {
  return (
    <div>
      <Navigation />
      <Contacts />
      <Footer />
    </div>
  );
};

export default ContactsHeader;
