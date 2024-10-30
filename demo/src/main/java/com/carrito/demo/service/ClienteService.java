package com.carrito.demo.service;

import com.carrito.demo.model.Cliente;
import com.carrito.demo.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {
    @Autowired
    private ClienteRepository clienteRepository;

    public List<Cliente> listarClientes(){
        return clienteRepository.findAll();
    }

    // Nuevo método para obtener cliente por ID junto con sus compras
    public Optional<Cliente> obtenerClienteConCompras(Long id) {
        return clienteRepository.findById(id);
    }
}
