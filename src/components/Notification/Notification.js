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
import Message from './Message'
class Notification extends React.Component {
  constructor(props) {
		super(props);
console.log("props",this.props.message)
		this.state = {
      notificationData:4,
    	popoverOpen: false,
      className:this.props.className,
      message:this.props.message,
      number:this.props.number,
      id:this.props.id,
      color:this.props.color,
      type:this.props.type
    }
  }
  popoverToggle = () => {

    this.setState({
      popoverOpen: !this.state.popoverOpen
    });

}
  render(){
    let msg=this.state.message
    var style={
      backgroundColor:this.state.color,

    }
    return(
      <div >
          <FontAwesomeIcon icon={faBell} />
          <div className= {`notificationNumber ${ this.props.type }`} id={this.state.id} >
                    {this.state.number}
                  </div>

                  					<Popover className="NotificationPopover" placement="bottom" isOpen={this.state.popoverOpen} target={this.state.id} toggle={this.popoverToggle} size="xl" >
                  						<PopoverHeader>
                  							Notifications

                  						</PopoverHeader>
                  						<PopoverBody className={this.props.type} >


                                 <Message className={this.state.type}  message={this.state.message}/>

                  						</PopoverBody>
                  					</Popover>
      </div>
    )
  }
}
export default Notification;
