import React, { useEffect, useState } from 'react';
import { fetchCharacterByID } from '../../actions/index';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

export default function CharacterCard() {
	const [chars,setChars] = useState([])
	const { id } = useParams();

	useEffect(()=>{
		const getCharacters = async () =>{
		  const data = await fetchCharacterByID(id)
		  setChars(data)
		}
		getCharacters()
	  },[id])
	  
	return (
		<div className="characterCard">
			<Card bg="dark" className="Card" style={{ width: '40rem', marginBottom: '20px' }}>
				<Card.Body>
					<Card.Title>{chars?.name}</Card.Title>
					<Card.Text>Birth: {chars?.birth_year} </Card.Text>
					<Card.Text>Gender: {chars?.gender} </Card.Text>
					<Card.Text>Height: {chars?.height} </Card.Text>
					<Card.Text>Mass: {chars?.mass} </Card.Text>
					<Card.Text>Hair Color: {chars?.hair_color} </Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}
