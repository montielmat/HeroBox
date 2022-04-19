import axios from "axios";

export const getHeros = async(name)=>{
    try {
        
const {data} = await axios.get(`${process.env.REACT_APP_API}search/${name}`)

return data;

    } catch (error) {
        console.log(error)
    }
}