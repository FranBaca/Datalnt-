import React, { useState } from 'react'
import { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {fetchCharacters} from "../actions/index"
import { useDispatch, useSelector } from 'react-redux';
import "./CharacterList.css"
import { Link } from 'react-router-dom';



export default function CharactersList() {
  const chars = useSelector(state => state.characters)
  let [page, setPage] = useState(0)
 const dispatch = useDispatch()

 useEffect(()=>{
     dispatch(fetchCharacters())
 },[dispatch])
  
 const handleClickNext=()=>{   
  if(page+1 < 9){
      setPage(page+=1)
      dispatch(fetchCharacters(null,page+=1))
  }
}

const handleClickBack=()=>{
  if(page-1 >= 0){
      setPage(page-1)
      dispatch(fetchCharacters(null,page-1))
  }
}

  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <div className='charListContainer'>
    <div className='charContainer'>
   { chars?.results?.map( (c,index) =>{
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
  )
}
