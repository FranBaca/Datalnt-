import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../actions';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import './CharacterList.css';
export default function CharacterCard() {
	const chars = useSelector((state) => state.characters);
	// const homeworld = useSelector((state)=>state.homeworld)
	const dispatch = useDispatch();
	const { id } = useParams();
	console.log(chars)
	useEffect(
		() => {
			dispatch(fetchCharacters(null, null, id));
			//  dispatch(fetchHomeworld(chars))
		},
		[ dispatch, id ]
	);
	
	return (
		<div className="characterCard">
			<Card bg="dark" className="Card" style={{ width: '40rem', marginBottom: '20px' }}>
				<Card.Body>
					<Card.Title>{chars.name}</Card.Title>
					<Card.Text>Birth: {chars.birth_year} </Card.Text>
					<Card.Text>Gender: {chars.gender} </Card.Text>
					<Card.Text>Height: {chars.height} </Card.Text>
					{/* <Card.Text>Homeworld: {homeworld?.data?.name}</Card.Text> */}
					<Card.Text>Mass: {chars.mass} </Card.Text>
					<Card.Text>Hair Color: {chars.hair_color} </Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}
