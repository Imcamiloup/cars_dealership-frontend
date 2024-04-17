import icon_crear from '../../assets/Icon_crear.svg';
import icon_vehiculo_off from '../../assets/Icon_vehiculo.svg';
import icon_vehiculo_on from '../../assets/Icon_vehiculo1.svg';
import icon_puntoubicacion_off from '../../assets/Icon_puntoubicacion.svg';
import icon_puntoubicacion_on from '../../assets/Icon_puntoubicacion1.svg';
import icon_persona_off from '../../assets/Icon_persona.svg';
import icon_persona_on from '../../assets/Icon_persona1.svg';
import check from '../../assets/Icon_confirmar.svg'
import cancel from '../../assets/Icon_cancelar.svg'


import './Create.css';


const Create = ({
        editOnOff,
        setEditOnOff,
        setDeleteOnOff,
        actualBackOrder,
        selectSubmit,
        setSelectSubmit,
        createOnOff,
        setCreateOnOff
    }) => {

    
       

    const handleCreateChange = () => {
        if (createOnOff === false) {
            setCreateOnOff(true)
            setSelectSubmit('post')
        }
    }

    const handleCancelChange = () => {
        if (createOnOff === true) {
            setCreateOnOff(false)
        }
    }

    const handleSubmit = async (e) => {
        try{
           
            if (selectSubmit=="post"){
                const response  = await fetch('http://127.0.0.1:8000/api/backorders/',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        brand: e.target.brand.value,
                        site: e.target.site.value,
                        aspirant: e.target.aspirant.value
                    })
                })
                console.log(response)
                const data = await response.json()
                console.log(data)
                if(createOnOff===true){
                    setCreateOnOff(false)
                }
            }
            if (selectSubmit=="put"){
                console.log('llegúe al put')
                const response = await fetch(`http://127.0.0.1:8000/api/backorders/${id}/`,{
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        brand: e.target.brand.value,
                        site: e.target.site.value,
                        aspirant: e.target.aspirant.value
                    })
                })
                console.log(response)
                const data = await response.json()
                console.log(data)
                if (editOnOff === true){
                    setEditOnOff(true)
                    setDeleteOnOff(true)
                }
                
            }
        } catch (error){
            console.log(error)
        }
    }

    const handleCancelChange2 = () => {
        if (editOnOff==true){
            setEditOnOff(false)
            setDeleteOnOff(false)
        }
        else{
            setEditOnOff(true)
            setDeleteOnOff(true)
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
            
            <form className='form' onSubmit={handleSubmit} id='myForm'>
                <div className='fields-container'>
                    <div className='field'>
                        <label htmlFor="brand">
                            <img src={
                                createOnOff? icon_vehiculo_on : icon_vehiculo_off} 
                                alt="brand" 
                            />
                        </label>
                        <input 
                            type="text" 
                            id="brand" 
                            name="brand" 
                            className='input' 
                            
                        />
                    </div>
                    <div className='field'>
                        <label htmlFor="site">
                            <img src={createOnOff? icon_puntoubicacion_on : icon_puntoubicacion_off} alt="site" />
                        </label>
                        <input  
                            type="text" 
                            id="site" 
                            name="site" 
                            className='input' 
                            
                        />
                    </div>
                    <div className='field'>
                        <label htmlFor="aspirant">
                            <img src={createOnOff? icon_persona_on : icon_persona_off} alt="aspirant" />
                        </label>
                        <input 
                            type="text" 
                            id="aspirant" 
                            name="aspirant" 
                            className='input' 
                            
                        />
                    </div>
                    
                </div>

                {createOnOff && editOnOff ?  <div className='buttons-container'>
                    <button type= "button" 
                        onClick={handleCancelChange}
                        className='button-cancel' > 
                            Cancelar    
                    </button>
                    <button 
                        type="submit" 
                        className='button-submit'
                        onClick={handleSubmit}
                         >Crear </button>
                </div> : !editOnOff ?  <div className='buttons-container'>
                    <button className='button-image' type='submit'>
                        <img 
                            src={check} 
                            alt="check" 
                            style={{ cursor: 'pointer' }} 
                        />
                    </button>
                    
                        
                    <img 
                        src={cancel} 
                        alt="cancel" 
                        id="cancel" 
                        style={{ cursor: 'pointer' }}
                        onClick={handleCancelChange2} 
                    />                    
                </div> :  null}
                
            </form>
        </div>
    )
}

export default Create;