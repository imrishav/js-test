import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand
   } from 'reactstrap';

   import img1 from "../images/a.jpg";
   import img2 from "../images/b.jpg";
   import img3 from "../images/c.jpg";
   import img4 from "../images/d.jpg";
   import img5 from "../images/e.jpg";
   import img6 from "../images/f.jpg";
   import img7 from "../images/g.jpg";
   import img8 from "../images/h.jpg";
   
   
  


    console.log(img1);
    export default class Example extends React.Component {
        constructor(props) {
          super(props);
      
          this.toggle = this.toggle.bind(this);
          this.state = {
            isOpen: false
          };
        }
        toggle() {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
        render() {
          return (
            <div>
              <Navbar color="light navbar-fixed-top" light expand="md">
                <NavbarBrand href="/">Image Gallery</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                
              </Navbar>
              <div className="container">
                <div className="jumbotron fluid">
                    <h1><span className="
                    glyphicon glyphicon-camera" aria-hidden="true"></span> A Simple Image Gallery</h1>
                    <p>A Simple Image Gallery</p>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div>
                            <img src = {img1} className="img-thumbnail" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div>
                            <img src = {img2} className="img-thumbnail" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div>
                            <img src = {img3} className="img-thumbnail" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div>
                            <img src = {img4} className="img-thumbnail" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div>
                            <img src = {img5} className="img-thumbnail" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div>
                            <img src = {img6} className="img-thumbnail" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div>
                            <img src = {img7} className="img-thumbnail" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div>
                            <img src = {img8} className="img-thumbnail" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div>
                            <img src = {img1} className="img-thumbnail" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div>
                            <img src = {img2} className="img-thumbnail" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div>
                        <img src = {img1} className="img-thumbnail" alt=""/>
                    </div>
                    </div>
                    <div className="col-lg-4">
                        <div>
                            <img src = {img2} className="img-thumbnail" alt=""/>
                        </div>
                    </div>
                    
                    
                </div>              
              </div>
            </div>
            
          );
        }
      }
