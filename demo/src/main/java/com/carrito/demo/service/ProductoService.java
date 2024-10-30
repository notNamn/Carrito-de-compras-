package com.carrito.demo.service;

import com.carrito.demo.model.Producto;
import com.carrito.demo.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoService {
    @Autowired
    private ProductoRepository productoRepository;

    public List<Producto> obtenerTodosProductos(){
        return productoRepository.findAll();
    }

    // buscador
    public List<Producto> buscarProductoPorNombre(String nombre){
        return productoRepository.findByNombreContainingIgnoreCase(nombre);
    }
}
