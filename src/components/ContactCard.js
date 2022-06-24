import React from 'react';

const ContactCard = (props)=>{
    const {id , name , email}= props.contact;


    return(
        <div className="item">
            <div className="content">
                <div className="header">
                    {name}
                </div>

                <div>{email}</div>
                <button className="negative ui right floated  button" onClick={()=>props.handleDelete(id)}>
                    <i className="trash icon"  ></i>
                </button>
                {/* negative ui right floated  button */}
            </div>
            
       
    
        </div>
    );
}

export default ContactCard;