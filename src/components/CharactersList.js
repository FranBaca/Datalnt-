import React, { useState } from 'react'
import { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container"
import "./CharacterList.css"
export default function CharactersList() {
  const [characters,setCharacters] = useState([])

  async function fetchCharacters(){
    let res = await fetch("https://swapi.dev/api/people/?format=json")
    let data = await res.json()
   setCharacters(data.results);
  }
  
  useEffect(() => {
    fetchCharacters()
  }, [])
  console.log(characters)
  return (
    <div className='charactersContainer'>
   { characters?.map( c =>{
      return(
      <Card style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title>{c.name}</Card.Title>
        <Card.Text>Birth: {c.birth_year} </Card.Text>
        <Card.Text>Gender: {c.gender} </Card.Text>
        <Card.Text>Height: {c.height} </Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
      )
    })}
   </div>
  )
}
