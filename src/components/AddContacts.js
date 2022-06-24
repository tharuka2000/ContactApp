import React from "react";
import {Link, useNavigate} from "react-router-dom";
class AddContact extends React.Component{
        constructor(props){
            super(props)
            this.state = {
               
                name : "",
                email : ""
             }
             this.clickHandler = this.clickHandler.bind(this);
        }
     

     clickHandler(event) {
            event.preventDefault();
            console.log(this.props)
            this.props.addContact(this.state);
            
            // this.setState= ({ name : "", email : ""})
         
            // const location = useLocation;
            // const pName = './'
            // location.
    }


    render(){
        return(
            <div className="ui center aligned container">
               
                <h2 className="ui header">Add contacts</h2>
                <br></br>
                <form className="ui fluid form" onSubmit={this.clickHandler}>
                    <div className="fluid">
                        <input name ="name" placeholder="Enter Name" type ="text" value={this.state.name} onChange={(e)=>{
                                this.setState({name :e.target.value})
                        }}>
                            
                        </input>
                    </div>
                    <br />
                    <div className="fluid">
                        <input name ="email" placeholder="Enter Email" type ="email"  value={this.state.email} onChange={(e)=>{
                                this.setState({email :e.target.value})
                        }}>
                            
                        </input>
                    </div>
                    {/* <div className="fluid">
                        <input name ="id" placeholder="Enter ID" type ="text"  value={this.state.id} onChange={(e)=>{
                                this.setState({id :e.target.value})
                        }}>
                            
                        </input>
                    </div> */}
                    <br></br>
                    <div className="ui equal width grid">
                     <div className="column">   
                    <div className="ui  buttons">
                        <button className="ui button" onClick={this.clearFormHandler}>Cancel</button>
                        <div className="or"></div>
                        <button className="ui positive button" type="submit">Save</button>


                    </div>
                    </div>
                    <div className="column "><Link to ='/'><button className="ui primary button" ><i className="address book icon"></i></button></Link></div>
                  
                    </div>
                    
                   
                </form>
            </div>
        )
    }
}

export default AddContact;