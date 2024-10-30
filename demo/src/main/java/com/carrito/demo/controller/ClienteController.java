package com.carrito.demo.controller;

import com.carrito.demo.model.Cliente;
import com.carrito.demo.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cliente")
@CrossOrigin(origins = "*")// http://localhost:5173
public class ClienteController {
    @Autowired
    private ClienteService clienteService;

    @GetMapping("/historial")
    public ResponseEntity<List<Cliente>> listarClientes(){
        List<Cliente> clientes =  clienteService.listarClientes();
        return ResponseEntity.ok(clientes);
    }

    @GetMapping("/{id}/compras")
    public ResponseEntity<Cliente> obtenerClienteConCompras(@PathVariable Long id) {
        return clienteService.obtenerClienteConCompras(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

}
