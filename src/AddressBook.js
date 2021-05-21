import React from "react";
import ContactCards from "./ContactCards";

const AddressBook = ({ contacts }) => {
  return (
    <div className="Address">
      <div className="cards">
        <div>{`the length of the list is ${contacts.length}`}</div>
        {contacts.map((contact, index) => (
          <ContactCards key={index} contact={contact} />
        ))}
        ;
      </div>
    </div>
  );
};
export default AddressBook;
