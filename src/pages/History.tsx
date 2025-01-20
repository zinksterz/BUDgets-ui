import React, {useEffect, useState} from 'react';
import axios from '../services/api';

const History: React.FC = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try{
                const response = await axios.get('/api/transactions');
                setTransactions(response.data);
            }catch(error){
                console.error("Error fetching transactions: ", error);
            }
        };

        fetchTransactions();
    }, []);

    return(
        <div>
            <h1>Transaction History</h1>
            <ul>
                {transactions.map((transaction:any) => (
                    <li key={transaction.id}>
                        {transaction.product}: ${transaction.price} ({transaction.status})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default History;