import SearchBox from "./components/SearchBox/SearchBox"
import ContactForm from "./components/ContactForm/ContactForm"
import ContactList from "./components/ContactList/ContactList"

// import {useState, useEffect} from 'react'
// import contactsJson from './components/contacts.json';
import "./App.css"


export default function App(){   
//   const [search, setSearch] = useState('');
//   const [contacts, setContacts] = useState(() => {
//     const localData = localStorage.getItem("contacts");
//     return localData ? JSON.parse(localData) : contactsJson;
//   }); 

//     useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);



//     const addUser = (newContact) => {
//         setContacts ((prevContacts) =>{
//             // return [...prevContacts, newContact];
//             return [newContact, ...prevContacts];
//         });
//         };


//     const deleteContact = (id) =>{
//       setContacts ((prevContacts =>{
//         return prevContacts.filter((contact) => contact.id !== id)
//       }));
//     }

//  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()));


    return(<div>
        <h1>Phonebook</h1>

        <ContactForm/>
        <SearchBox/>
        <ContactList />
        {/* <ContactForm onSubmit={addUser}/>
        <SearchBox value ={search} onSearch={setSearch}/>
        <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} /> */}
      </div>)
}