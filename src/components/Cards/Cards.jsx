import Card from '../Card/Card';
import useBackOrders from '../../hooks/useBackOrders';
import { useSelector } from 'react-redux';
import './Cards.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Cards = (
    {editOnOff ,
    setEditOnOff,
    deleteOnOff,
    setDeleteOnOff,   
    actualBackOrder, 
    setActualBackOrder,
    setSelectSubmit,
    createOnOff,
    setCreateOnOff
    }) => {

    const { backOrders } = useBackOrders();
    const dispatch = useDispatch();


    const getBackOrders = async () => {
        const response = await fetch(`${API_URL}/backorders/`)
        const data = await response.json()
        dispatch(getAllBackOrders(data))
    }

    useEffect(() => {
        getBackOrders()
    }
    ,[backOrders])

    
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
                            actualBackOrder={actualBackOrder}
                            backOrder={backOrder} 
                            editOnOff={editOnOff} 
                            setEditOnOff={setEditOnOff}
                            deleteOnOff={deleteOnOff}
                            setDeleteOnOff={setDeleteOnOff}                            
                            setActualBackOrder={setActualBackOrder}
                            setSelectSubmit={setSelectSubmit}
                            createOnOff = {createOnOff}
                            setCreateOnOff = {setCreateOnOff}
                            />
                    )
                })}
                   
                      
            
            </table>
            
        </div>
    )
}

export default Cards;