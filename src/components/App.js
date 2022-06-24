import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import api from '../api/contacts';

//import { BrowserRouter as Router , Switch  , Route ,Routes} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  useNavigate
 
} from "react-router-dom";
import AddContact from './AddContacts';
import './App.css';
import ContactList from './ContactList';
import Header from    './Header';





function App() {

  const LOCAL_STORAGE_KEY = "contacts"


  const contactss = [
    {
      id: "1",
      name: "tharuka",
      email: "tharuk@outlook.com"
    }
    ,
    {
      id: "2",
      name: "Hirushan",
      email: "Email h"
    }
  ];

  const [contacts, setContacts] = useState([]);

  const [contact, setContact] = useState(null);


  const deleteContact = async(deleteId) => {
    await api.delete(`/contacts/${deleteId}`)
    const newContactList = contacts.filter(contact => {
      return contact.id !== deleteId
    } )

    setContacts(newContactList);




  }

  // const CreateNewContact = (event)=>{
  //     event.preventDefault();


  //       const demo =  {
  //         id :event.target.id.value ,
  //         names : event.target.name.value ,
  //         email :event.target.email.value 

  //       };

  //       setContact({ id :event.target.id.value ,
  //         names : event.target.name.value ,
  //         email :event.target.email.value  });
  //       console.log(demo)


  //       console.log(contact)


  // }

  const CreateNewContact = async (contact) => {
    //setContact(contact);
    //setContacts((prev) => { return [{ id: uuidv4(), ...contact }, ...prev] })
    const request ={
      id: uuidv4(),
      ...contact
    }
    const response = await api.post('/contacts',request);
    setContacts((prev)=>{return[...prev,response.data]})
  }
  // {id :uuidv4(), contact}

  const retriveContacts = async()=>{
    const response = await api.get('/contacts');
    return response.data;
}
  // const AddContactsResponse = async(contact)=>{
  //     const request ={
  //       id: uuidv4(),
  //       ...contact
  //     }
  //     const response = await api.post('/contacts',request);
  //     setContacts([...contacts,response.data])
  // }

  //Retriving data from the DataBase 
  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // console.log(retriveContacts);
    // if (retriveContacts) setContacts(retriveContacts);
      const getAllContacts = async ()=>{
          const allContacts = await retriveContacts();
          console.log(allContacts)
          if(allContacts) setContacts(allContacts);
      }
      getAllContacts();
  }, [])


  // Creating a AddContact
  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    
  }, [contacts])
  // useEffect(()=>{

  //   if(contact !== null){
  //   //setContacts((prev)=>{return[{id :uuidv4, ...contact}, ...prev]})
  //   console.log(contact)
  //   console.log(contacts)}
  // },[contact])

 
  return (

    <div className="ui raised very padded text container segment">
      {/* <ContactList contact={contacts} 
            deleteContact={deleteContact}/>
      <AddContact addContact={CreateNewContact} /> */}
      <Router>
        <Header></Header>

        <Routes>
          <Route path='/' element={<ContactList contact={contacts}
            deleteContact={deleteContact} />} />


          <Route path='/add' element={<AddContact addContact={CreateNewContact}  />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
