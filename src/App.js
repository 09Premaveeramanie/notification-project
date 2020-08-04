import React from 'react';
import logo from './logo.svg';
import './App.css';
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
import Notification from './components/Notification/Notification';
class App extends React.Component {
  constructor(props) {
		super(props);

		this.state = {
      notificationData:4,
    	popoverOpen: false,
      infoMessage:'This info  contains 4 Notification',
      errorMessage:'This Error contains 5 Notification',
      warningMessage:'This Warning contains 9 Notification',
      infoNumber:4,
      errorNumber:5,
      warningNumber:9
    }
  }
  popoverToggle = () => {

    this.setState({
      popoverOpen: !this.state.popoverOpen
    });

}
  render(){

    return(
       <div id="container">
       <div className="centercontent" >
      <h4 style={{textAlign:'center'}}>
          Notification Project
          </h4>

          <div className="row"  >
          <div className="col-md-3 col-lg-3"> <h5>Info Notification</h5> </div>
          <div  className="col-md-3 col-lg-3" style={{marginLeft:'-58px'}}>
           <Notification   type="info" message={this.state.infoMessage} number={this.state.infoNumber} id="info"/>
           </div>
           <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
           </p>
          </div>
          <div className="row" >
          <div className="col-md-4 col-lg-4"><div> <h5>Warning Notification</h5> </div></div>
          <div className="col-md-4 col-lg-4"  style={{marginLeft:'-90px'}}>

           <Notification type="warning" message={this.state.warningMessage} number={this.state.warningNumber} id='warning'/>

           </div>
           <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
           </p>
          </div>

          <div className="row" >
          <div className="col-md-4 col-lg-4"> <h5>Error Notification</h5> </div>
          <div className="col-md-4 col-lg-4"  style={{marginLeft:'-118px'}}>
           <Notification type="error"   message={this.state.errorMessage} number={this.state.errorNumber} id='err'/>
           </div>
           <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
           </p>
          </div>
</div>
      </div>
    )
  }
}

export default App;
