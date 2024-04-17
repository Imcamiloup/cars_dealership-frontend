import icon_crear from '../../assets/Icon_crear.svg';
import icon_vehiculo_off from '../../assets/Icon_vehiculo.svg';
import icon_vehiculo_on from '../../assets/Icon_vehiculo1.svg';
import icon_puntoubicacion_off from '../../assets/Icon_puntoubicacion.svg';
import icon_puntoubicacion_on from '../../assets/Icon_puntoubicacion1.svg';
import icon_persona_off from '../../assets/Icon_persona.svg';
import icon_persona_on from '../../assets/Icon_persona1.svg';
import { useState } from 'react';

import './Create.css';


const Create = () => {

    const [createOnOff, setCreateOnOff] = useState(false)

    const handleCreateChange = () => {
        if (createOnOff === false) {
            setCreateOnOff(true)
        }
    }

    const handleCancelChange = () => {
        if (createOnOff === true) {
            setCreateOnOff(false)
        }
    }



    return (
        <div className="container-create">
            <div className='icon-create-container'>
                <img src={icon_crear} alt="crear" 
                    onClick={handleCreateChange} 
                    className='icon-create'
                    style={{ cursor: 'pointer' }} />
            </div>
            
            <form className='form'>
                <div className='fields-container'>
                    <div className='field'>
                        <label htmlFor="brand">
                            <img src={createOnOff? icon_vehiculo_on : icon_vehiculo_off} alt="brand" />
                        </label>
                        <input type="text" id="brand" name="brand" className='input' />
                    </div>
                    <div className='field'>
                        <label htmlFor="site">
                            <img src={createOnOff? icon_puntoubicacion_on : icon_puntoubicacion_off} alt="site" />
                        </label>
                        <input  type="text" id="site" name="site" className='input' />
                    </div>
                    <div className='field'>
                        <label htmlFor="aspirant">
                            <img src={createOnOff? icon_persona_on : icon_persona_off} alt="aspirant" />
                        </label>
                        <input type="text" id="aspirant" name="aspirant" className='input' />
                    </div>
                    
                </div>
                <div className='buttons-container'>
                    <button type= "button" 
                        onClick={handleCancelChange}
                        className='button-cancel' > 
                            Cancelar    
                    </button>
                    <button type="button" className='button-submit' >Crear</button>
                </div>
                
            </form>
        </div>
    )
}

export default Create;