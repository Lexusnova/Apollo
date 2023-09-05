import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
  
import { Navbar, Nav } from "react-bootstrap";


function App() {
  return (
    <div className="App">
      <header>
        <div className="Navbar">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand> Apollo</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Preise</Nav.Link>
              </Nav>
          </Navbar>
        </div> 
      </header>
      <div className="Content" >
        <section className="test">
          <h1>Apollo</h1>
          <article>
            <p>Smart Content that connects with everyone</p>
          </article>
        </section>
      </div>
      <div className="footer"> 
        <footer>
          <p>Test</p>
        </footer>
      </div>
    </div>

  );
}

export default App;
