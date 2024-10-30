package com.carrito.demo.service;

import com.carrito.demo.model.Compra;
import com.carrito.demo.repository.CompraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompraService {
    @Autowired
    private CompraRepository compraRepository;

    public List<Compra> obtenerRegistroCompras(){
        return compraRepository.findAll();
    }
}
