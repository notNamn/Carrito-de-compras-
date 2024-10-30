import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CircularProgress, Typography, Button } from '@mui/material';
import { FileText } from 'lucide-react';

import { ImprimirPDF } from './ImprimirPdf';
import { usePurchaseHistory } from '../hooks/usePurchaseHistory ';

export const HistorialClientes  = () => {
  const { purchaseHistory, loading, error } = usePurchaseHistory();
  const [clienteId, setClienteId] = useState(null); // Estado para manejar el ID del cliente a imprimir

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  const handlePrint = (id) => {
    setClienteId(id); // Asigna el ID del cliente seleccionado para imprimir
  }; 

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre del Cliente</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>DNI</TableCell>
            <TableCell>Teléfono</TableCell>
            <TableCell>Monto</TableCell>
            <TableCell>Veer Detalles</TableCell> {/* Nueva columna para las acciones */}
          </TableRow>
        </TableHead>
        <TableBody>
          {purchaseHistory.map((cliente, index) => (
            <TableRow key={index}>
              <TableCell>{cliente.nombreCliente}</TableCell>
              <TableCell>{new Date(cliente.fechaCompra).toLocaleDateString()}</TableCell>
              <TableCell>{cliente.dni}</TableCell>
              <TableCell>{cliente.telefono}</TableCell>
              <TableCell>{cliente.montoTotal}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => handlePrint(cliente.id)}>
                 <FileText/>  Imprimir Detalle
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Componente que se activa para generar el PDF */}
      {clienteId && <ImprimirPDF clienteId={clienteId} />}
    </TableContainer>
  );
};
