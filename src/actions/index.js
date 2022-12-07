import axios from "axios"
const url = process.env.REACT_APP_API_URL

export async function fetchCharacter (name) {
  console.log(name)
    try {
        let res = await axios.get(`${url}/?search=${name}`)
        let data = res.data.results;
        return data
      } catch (error) {
        console.log(error.response); //
        return error.response;
      }
    
}

export async function allCharactersFetch () {
    try {
        let res = await axios.get(`${url}/?format=json`)
        let data = res.data.results;
        return data
      } catch (error) {
        console.log(error.response); //
        return error.response;
      }

    
}

export async function  paginationFetch (page) {
    try {
        let res = await axios.get(`${url}/?page=${page}`)
        let data = res.data.results;
        return data
      } catch (error) {
        console.log(error.response); //
        return error.response;
      }
    
}

export async function  fetchCharacterByID (id) {
  console.log(id)
    try {
        let res = await axios.get(`${url}/${id}`)
        let data = res.data;
        return data
      } catch (error) {
        console.log(error.response); 
        return error.response;
      }
    
}
