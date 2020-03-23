import axios from 'axios'
const baseUrl = 'http://dummy.restapiexample.com/api/v1';
const getEmployee = async () => {
    let response = await axios(`${baseUrl}/employees`);
    //console.log(response.data.data);
    return response.data.data; 
}

const postEmployee = async (name, salary) => {
    await axios.post(`${baseUrl}/create`, {name, salary})
    .then(res => res.data.data)
}

export { getEmployee, postEmployee }