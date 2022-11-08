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
  let [page,setPage]  =useState(1)
  async function fetchCharacters(){
    let res = await fetch(`https://swapi.dev/api/people/?page=${page}`)
    let data = await res.json()
   setCharacters(data.results);
  }
  
  const handleClickNext=()=>{
        
    if(page+1 < 36){
        setPage(page+=1)
        fetchCharacters(page+=1)
    }
}

const handleClickBack=()=>{
    if(page-1 >= 0){
        setPage(page-1)
       fetchCharacters(page-1)
    }
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
        <Card.Text>Height: {c.species} </Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
      )
    })}

<div style={{marginTop:"35px" }}>
                <button style={{backgroundColor:"#ADCBB6", borderRadius:"25px",cursor:"pointer"}} onClick={handleClickBack}> go</button>
                <button style={{backgroundColor:"#8AAABC", borderRadius:"25px",cursor:"pointer"}} onClick={handleClickNext} >next </button>
            </div>
   </div>
  )
}
