import Card from '../Card/Card';
import useBackOrders from '../../hooks/useBackOrders';
import { useState } from 'react';
import './Cards.css';

const Cards = () => {

    const {backOrders} = useBackOrders();
    const [editOnOff, setEditOnOff] = useState(true);
    const [deleteOnOff, setDeleteOnOff] = useState(true);

    

    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr className='card-label'>
                        <th className='first-th'>Marca</th>
                        <th className='second-th'>Sucursal</th>
                        <th className='third-th'>Aspirante</th>
                    </tr>
                </thead>
                {backOrders.map((backOrder) => {
                    return ( 
                        <Card  
                            key={backOrder.id} 
                            backOrder={backOrder} 
                            editOnOff={editOnOff} 
                            setEditOnOff={setEditOnOff}
                            deleteOnOff={deleteOnOff}
                            setDeleteOnOff={setDeleteOnOff}
                            />
                    )
                })}
                   
                      
            
            </table>
            
        </div>
    )
}

export default Cards;