package com.carrito.demo.controller;

import com.carrito.demo.model.Compra;
import com.carrito.demo.service.CompraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


//borrar no guara registro en la base de datos
@RestController
@RequestMapping("/compra")
@CrossOrigin(origins = "*")
public class CompraController {

    @Autowired
    private CompraService compraService;

    @GetMapping("/historial")
    public ResponseEntity<List<Compra>> obtenerRegistroCompras(){
        List<Compra> compras = compraService.obtenerRegistroCompras();
        return ResponseEntity.ok(compras);
    }
}
