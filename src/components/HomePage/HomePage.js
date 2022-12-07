import React, { useState } from 'react'
import { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./HomePage.css"
import { Link } from 'react-router-dom';
import { allCharactersFetch, paginationFetch } from '../../actions';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { fetchCharacter } from '../../actions';


export default function CharactersList() {
  const [chars,setChars] = useState([])
  let [page, setPage] = useState(0)
  const [name, setName]=useState("")

  function handleChange (event){
      setName(event.target.value)
  }

  async function handleSubmit(event){
      event.preventDefault()
      const fetchedChar = await fetchCharacter(name)
      setChars(fetchedChar)
  }
 useEffect(()=>{
  const getCharacters = async () =>{
    const data = await allCharactersFetch()
    setChars(data)
  }
  getCharacters()
},[])

 const handleClickNext= async ()=>{   
  if(page+1 < 9){
      setPage(page+=1)
      const nextPage = await paginationFetch(page+=1)
      setChars(nextPage)
  }
}

const handleClickBack= async ()=>{
  if(page-1 >= 0){
      setPage(page-1)
      const previousPage= await paginationFetch(page-1);
      setChars(previousPage)
  }
}

  return (
    <>
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
    <div className='charListContainer'>
    <div className='charContainer'>
   { chars?.map( (c,index) =>{
      return( <Link to={`/charDetail/${index+1}`}>
        <Card bg="dark" className="Card" key={c.name} id={c.name} style={{ width: '15rem', marginBottom:"20px" }}>
      <Card.Body>
        <Card.Title>{c.name}</Card.Title>
        <Card.Text>Birth: {c.birth_year} </Card.Text>
        <Card.Text>Gender: {c.gender} </Card.Text>
        <Card.Text>Height: {c.height} </Card.Text>
        <Button variant="secondary">See more</Button>               
      </Card.Body>
    </Card>
    </Link>
    
      )
    })}
   </div>

  <div style={{margin:"10px"}}>
                <Button variant="secondary" onClick={handleClickBack}> Back</Button>
                <Button variant="secondary" onClick={handleClickNext} >Next </Button>
            </div>
      </div>
      </>
  )
}
