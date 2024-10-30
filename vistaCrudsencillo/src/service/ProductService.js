import axios from "axios";
import { useState } from "react";

export const ProductService = () => {

    const urBase= "http://localhost:8080/";

    const [product, setProduct] = useState([])

    const obtenerTodo = async () => {
        try {
            const response = await axios.get(urBase + "historial");
            
            console.log(response);
            return response;
        } catch (error) {
            console.error(error);
        }
        return null;
    };

    return{
        obtenerTodo
    }
}
