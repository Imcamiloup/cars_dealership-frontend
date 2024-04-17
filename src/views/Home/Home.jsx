import Cards from '../../components/Cards/Cards';
import Create from '../../components/Create/Create';
import eye from '../../assets/Imagologotipo_motion.svg'
import heaven from '../../assets/Imagologo_motion.svg'
import { useState } from 'react';
import './Home.css';

const Home = () => {
     
  const [editOnOff, setEditOnOff] = useState(true);
  const [deleteOnOff, setDeleteOnOff] = useState(true);
  const [actualBackOrder, setActualBackOrder] = useState('')
  const [selectSubmit, setSelectSubmit] = useState('')
  const [createOnOff, setCreateOnOff] = useState(false) 
      return (
        
          <div className="container-home">
            <div className='home-fields'>
              <Create 
                setDeleteOnOff = {setDeleteOnOff}
                editOnOff= {editOnOff}
                setEditOnOff = {setEditOnOff}
                actualBackOrder = {actualBackOrder}
                selectSubmit = {selectSubmit}
                setSelectSubmit = {setSelectSubmit}
                createOnOff = {createOnOff}
                setCreateOnOff = {setCreateOnOff}
  
              /> 
              <Cards
                editOnOff= {editOnOff}
                setEditOnOff = {setEditOnOff}
                deleteOnOff = {deleteOnOff}
                setDeleteOnOff = {setDeleteOnOff}
                actualBackOrder = {actualBackOrder}
                setActualBackOrder = {setActualBackOrder}   
                setSelectSubmit = {setSelectSubmit}     
                createOnOff = {createOnOff}
                setCreateOnOff = {setCreateOnOff}         
               /> 
            </div>
            <div className='container-logos' >
              <img src={eye} alt="imagologotipo" className='eye' />
              <img src={heaven} alt="imagologo" className='heaven'/>
            </div>   
              
          </div>    
         
      )
    };

export default Home;