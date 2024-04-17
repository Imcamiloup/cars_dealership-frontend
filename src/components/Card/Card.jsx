import icon_edit_off from '../../assets/Icon_editar.svg';
import icon_edit_on from '../../assets/Icon_editar1.svg';
import icon_delete_off from '../../assets/Icon_eliminar.svg';
import icon_delete_on from '../../assets/Icon_eliminar1.svg';

import './Card.css';

const Card = ({backOrder, editOnOff, setEditOnOff, deleteOnOff, setDeleteOnOff}) => {

    const {brand, site, aspirant} = backOrder;

    const handleEditChange = () => {
        if (editOnOff === true) {
            setEditOnOff(false)
        }
        else {
            setEditOnOff(true)
        }
    }

    const handleDeleteChange = () => {
        if (deleteOnOff === true) {
            setDeleteOnOff(false)
        }
        else {
            setDeleteOnOff(true)
        }
    }



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
                        src={editOnOff? icon_edit_on : icon_edit_off} 
                        alt="edit"
                        onClick={handleEditChange} 
                        style={{ cursor: 'pointer' }}
                        /> 
                    <img 
                        src={deleteOnOff? icon_delete_on : icon_delete_off} 
                        alt="delete" 
                        onClick={handleDeleteChange}
                        style={{ cursor: 'pointer' }}
                        />
                </div>
                
            </td>
            
        
        </tr>
    )
}

export default Card;