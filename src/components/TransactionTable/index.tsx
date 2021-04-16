import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionTable() {

    useEffect(() => {
        api.get('transactions')
            .then(data => console.log(data));
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de websites</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>16/04/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$1.100</td>
                        <td>casa</td>
                        <td>17/04/2021</td>
                    </tr>
                   
                </tbody>
            </table>
        </Container>
    );
}