import "./App.scss";
import { useState } from "react";
import Users from "./Users";
import SearchInput from "./SearchInput";
import ContactInfo from "./ContactInfo";

function App() {
  const [contacts, setContacts] = useState(Users);
  return (
    <div className="App">
      <SearchInput
        atInputChange={(input) => {
          setContacts(
            Users.filter(
              (contact) =>
                contact.first_name
                  .toLowerCase()
                  .includes(input.toLowerCase()) ||
                contact.last_name.toLowerCase().includes(input.toLowerCase())
            )
          );
        }}
      />
      <h1>hello world</h1>

      {contacts.map((contact, i) => (
        <ContactInfo contact={contact} key={i} />
      ))}
    </div>
  );
}

export default App;
