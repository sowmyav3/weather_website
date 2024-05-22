import axios from 'axios';

const API_KEY = '38a4a4aafa05523d8065c744d8403b97';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city, country) => {
    try {
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        // console.log('Error while calling the api ', error.message);
        alert("please enter city name correctly");
        // return error.response;
    }
}