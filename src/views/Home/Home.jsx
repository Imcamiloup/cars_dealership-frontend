import Cards from '../../components/Cards/Cards';
import Create from '../../components/Create/Create';
import './Home.css';

const Home = () => {
     
      return (
        
          <div className="container-home">
            <div className='home-fields'>
              <Create /> 
              <Cards  /> 
            </div>
            <div className='logo'>
              <h1>Logo</h1>
            </div>  
              
          </div>    
         
      )
    };

export default Home;