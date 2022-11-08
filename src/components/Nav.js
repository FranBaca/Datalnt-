import React,{useState} from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { fetchCharacters } from '../actions';

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
        <Navbar.Brand href="#home"><img src="/logo.png" alt="" style={{width:"100px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"  bg="light">Characters</Nav.Link>
            <Nav.Link href="#link">Planets</Nav.Link>
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
