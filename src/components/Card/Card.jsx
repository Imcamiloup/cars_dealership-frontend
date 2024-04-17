import icon_edit_off from '../../assets/Icon_editar.svg';
import icon_edit_on from '../../assets/Icon_editar1.svg';
import icon_delete_off from '../../assets/Icon_eliminar.svg';
import icon_delete_on from '../../assets/Icon_eliminar1.svg';
import { useEffect, useState } from 'react';
import './Card.css';

const  API_URL = import.meta.env.VITE_API_URL;

const Card = ({
        backOrder, 
        editOnOff, 
        setEditOnOff, 
        deleteOnOff, 
        setDeleteOnOff,
        setActualBackOrder,
        setSelectSubmit,
        createOnOff,
        setCreateOnOff
    }) => {

    const { id, brand, site, aspirant} = backOrder;
    const [ localEditOnOff, setLocalEditOnOff] =useState(true)
    
   
    useEffect(() => {
        if (editOnOff && deleteOnOff) {
            setLocalEditOnOff(true)
        }
    }
    ,[editOnOff, deleteOnOff])


    

    const handleIconsChange = () => {
        if (editOnOff ) {
            setEditOnOff(false)
            setDeleteOnOff(false)
            setLocalEditOnOff(false)
            setActualBackOrder(id)
            setSelectSubmit('put')
        }
        else {
            setEditOnOff(true)
            setDeleteOnOff(true)
            
        }
        if (!createOnOff){
            setCreateOnOff(true)
        }

        
        
    }

    const handleDeleteChange = async () => {
        try {
            const response = await fetch(`${API_URL}/backorders/${id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).catch((error) => {
                console.log('Error:', error);
            });
            console.log(response)

            
        } catch (error) {
            console.log('Error:', error);
        }
    };

    

    return (
        <tr className='card'>
            <td className='td'> {brand}</td>
            <td className='second-td'> {site}</td>
            <td className='last-td'>
                <div className='td-aspirant'>
                    {aspirant}
                </div>
                <div className='icons-container'>
                    <img 
                        src={!editOnOff && localEditOnOff ? icon_edit_off : icon_edit_on } 
                        alt="edit"
                        onClick={handleIconsChange} 
                        style={{ cursor: 'pointer' }}
                        /> 
                    <img 
                        src={!deleteOnOff && localEditOnOff? icon_delete_off : icon_delete_on} 
                        alt="delete" 
                        style={{ cursor: 'pointer' }}
                        onClick={handleDeleteChange}
                        />
                </div>
                
            </td>
            
        
        </tr>
    )
}

export default Card;