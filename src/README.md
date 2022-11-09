# App component
Declaration of two routes and displaying of Navbar

# Main component CharacterList.js

UseEffect to call action that brings the data of the characters, then displays the characters using a map function and Bootstrap's cards. 

Using react-redux the state declared in the reducer updates when the action gets called in the characterlist component, depending on the condtion set, the state will update with the corresponding information


# Character Card
Once the cards with all the characters are set, i wrapped the Card into a Link Router to the specific character card, setting a index because the endpoint does not give you an id. Then in the component itself using the useParams hook, get the id and then call the same action previously described sending the id to the endpoint and updating the state with the specific character information.

# Nav
The nav component has a form wich we will write the name of the character we are looking for, save the name on a state an then pass it to our action who fetches the data, the endpoint will receive the name and update the state with the specific character to be displayed in a bootstrap card. 





