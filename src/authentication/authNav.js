import React,{Component} from 'react';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import logo1 from '../images/logo1.png';
class authNav extends Component {
    render(){
        return (
            <div>
                <div className="col-md-12 nav-bg" style={{zIndex:"9999",position:"fixed",background:"#1C1C1C",height:"68px"}} >
           <Navbar  expand="lg">
  <Navbar.Brand href="#home" className=""><img style={{height:"46px",width:"155px",marginTop:"-3px"}} src={logo1}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background:"white"}}/>
  <Navbar.Collapse id="basic-navbar-nav"  style={{marginTop:"px"}}>
    <Nav className="ml-auto">
    <Nav.Link href="#home" className="nav-hov" style={{color:"white",fontSize:"18px",fontWeight:"500",lineHeight:"28.13px",marginLeft:"30px",fontFamily:"Roboto"}}>About</Nav.Link>
    <Nav.Link href="#home"className="nav-hov"  style={{color:"white",fontSize:"18px",fontWeight:"500",lineHeight:"28.13px" ,marginLeft:"30px",fontFamily:"Roboto"}}>Resources</Nav.Link>
    <Nav.Link href="#home" className="nav-hov"  style={{color:"white",fontSize:"18px",fontWeight:"500",lineHeight:"28.13px" ,marginLeft:"30px",fontFamily:"Roboto"}}>Blogs</Nav.Link>
    <Nav.Link href="#home" style={{height:"43px",width:"154px",textAlign:"center",color:"white",fontSize:"18px",fontWeight:"700",lineHeight:"16.41px",marginLeft:"30px ",fontFamily:"Roboto"}} className=" nav-btn">Login</Nav.Link>
    <Nav.Link href="#home" style={{height:"43px",width:"154px",textAlign:"center",color:"white",fontSize:"18px",fontWeight:"700",lineHeight:"16.41px",marginLeft:"15px ",fontFamily:"Roboto"}} className=" nav-btn">Register</Nav.Link>
    <Nav.Link href="#home"  className="m-auto">
    <div  class="toggleBox ">
    <Switch className="sw" checkedChildren="BN" unCheckedChildren="EN"  defaultChecked />
    </div>
    </Nav.Link>
    </Nav>

  </Navbar.Collapse>
</Navbar>
        </div>
            </div>
        )
    }
}

export default authNav
