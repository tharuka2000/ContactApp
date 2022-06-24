import React from "react";
import ContactCard from "./ContactCard";
import {Link} from "react-router-dom";


let i = 0

const ContactList = (props) =>{
    
    const handleDeletes=(id) =>{
      
        props.deleteContact(id);
    }
  
    const renderContacts = props.contact.map((contact) =>{
        
        i+=1
        return(
          
             <ContactCard  contact={contact} handleDelete ={handleDeletes} key={i}  />
            //<button className="ui green button" onClick={handleDeletes}>SSS</button>
           
        );
    

   
})
   
    return(
       
        <div>
          
            <h4 className="ui horizontal  divider">
                Contact List
            </h4>
            <div className="ui middle aligned divided list">
                {renderContacts} 
            </div>
            <Link to ='/add'>
                <button className="ui circular  icon button" >
                    <i className="plus icon"></i>
                </button>
            </Link>
        </div>
    )
}

export default ContactList;