import React from "react";

const ContactCards = ({ contact }) => {
  const {
    email,
    location: { street, country, city, postcode, state },
    phone,
    name: { title, first, last },
  } = contact;
  return (
    <div className="ContactCard">
      <h2>
        {title}&nbsp;
        {first}&nbsp;
        {last}
      </h2>
      <img src={contact.picture.medium} alt="" />
      <p> Email:{email}</p>
      <span>{phone}</span>
      <span>
        {" "}
        Address: {"\n"}
        {street.name},{street.number},{country}, {city} {postcode},{state}
      </span>
    </div>
  );
};
export default ContactCards;
