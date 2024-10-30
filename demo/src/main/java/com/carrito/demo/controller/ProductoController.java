package com.carrito.demo.controller;

import com.carrito.demo.model.Producto;
import com.carrito.demo.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productos")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductoController {
    @Autowired
    private ProductoService productoService;

    @GetMapping("/listar")
    public ResponseEntity<List<Producto>> obtenerTodosProductos(){
        List<Producto> listaProductos = productoService.obtenerTodosProductos();
        return ResponseEntity.ok(listaProductos);
    }

    @GetMapping("/buscar")
    public ResponseEntity<List<Producto>> buscarProductos(@RequestParam String nombre){
        List<Producto> productos = productoService.buscarProductoPorNombre(nombre);
        return  ResponseEntity.ok(productos);
    }

}
