import { useState, useEffect } from 'react';
import axios from 'axios';

export const usePurchaseHistory = () => {
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPurchaseHistory = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/cliente/historial');
      setPurchaseHistory(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPurchaseHistory();
  }, []);

  return { purchaseHistory, loading, error };
};
