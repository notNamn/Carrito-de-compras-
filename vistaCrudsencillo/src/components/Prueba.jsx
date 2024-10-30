import { TextField, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const urlBase = "http://localhost:8080";

const fetchProducts = async (query = '') => {
    try {
        const response = await axios.get(`${urlBase}/productos/buscar`, { params: { nombre: query } });
        console.log(response.data); // Muestra los resultados en la consola
        return response.data; // Retorna los datos obtenidos para actualizarlos en el componente
    } catch (error) {
        console.error("Error al obtener productos:", error);
        return [];
    }
}

export const Prueba = () => {
    const [producto, setProducto] = useState([]);
    const [search, setSearch] = useState('');

    const handleSearch = async (e) => {
        const query = e.target.value;
        setSearch(query);
        
        // Llama a la función `fetchProducts` con el valor de búsqueda actual
        const resultados = await fetchProducts(query);
        setProducto(resultados); // Actualiza el estado con los productos encontrados
    }

    return (
        <>
            <TextField
                label="Buscar producto"
                variant="outlined"
                fullWidth
                value={search}
                onChange={handleSearch}
                placeholder="Ingrese nombre de producto"
                margin="dense"
            />

            {/* Muestra la lista de productos */}
            <List>
                {producto.map((prod) => (
                    <ListItem key={prod.id}>
                        <ListItemText 
                            primary={prod.nombre} 
                            secondary={`Precio: $${prod.precio} - Stock: ${prod.stock}`} 
                        />
                    </ListItem>
                ))}
            </List>
        </>
    )
}
