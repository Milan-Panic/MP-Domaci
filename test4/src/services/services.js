import axios from 'axios'

const proba = async () => {
    let response = await axios('https://coetus.herokuapp.com/api/message');
    console.log(response.data.data[0]);    
}
proba()
export { proba }