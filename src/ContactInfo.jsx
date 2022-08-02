import React from "react";

const ContactInfo = ({ contact }) => {
  return (
    <div>
      <ul>
        <li>
          {contact.first_name} {contact.last_name}
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
