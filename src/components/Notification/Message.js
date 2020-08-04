import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
import {
	Collapse,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Nav,
	NavItem,
	Button, UncontrolledPopover, PopoverHeader, Popover, PopoverBody
} from "reactstrap";

class Message extends React.Component {
  constructor(props) {
		super(props);
console.log("props",this.props.message)
		this.state = {

      message:this.props.message,


      type:this.props.type
    }
  }

  render(){
    let msg=this.state.message
    var style={
      backgroundColor:this.state.color,

    }
    return(
      <div >

         <p className={this.props.type} style={{color:"#FFFFFF"}}>{this.props.message}</p>

      </div>
    )
  }
}
export default Message;
