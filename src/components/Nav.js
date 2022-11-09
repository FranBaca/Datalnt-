import React,{useState} from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { fetchCharacters } from '../actions';
import { Link } from 'react-router-dom';

export default function NavbarComponent() {
  const [name, setName]=useState("")
  const dispatch = useDispatch()


  function handleChange (event){
      setName(event.target.value)
  }

  function handleSubmit(event){
      console.log(name)
      event.preventDefault()
      dispatch(fetchCharacters(name))
  }
 
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/">
        <Navbar.Brand href="#home"><img src="/logo.png" alt="" style={{width:"100px"}}/></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <form className="d-flex"  onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={name}
              onChange={handleChange}
            />
            <Button variant="secondary" type="submit">Search</Button>
            </form>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
