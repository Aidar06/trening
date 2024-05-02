import './App.scss';
import {useEffect, useState} from "react";
import axios from 'axios';


function App() {

  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('https://x8ki-letl-twmt.n7.xano.io/api:cGSFOZ6m/form_plase_base');

      setData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data)
  return (
    <div className="App">
      <h1>Участники тренинга</h1>
      <div className='group'>
        {
          data.map((el,ind) => (
              <div className='group--block'>
                <div className='group--block__ind'>
                  {ind+1}
                </div>
                <div className='group--block__info'>
                  <h3>Имя:</h3>g
                  <p>{el.name}</p>
                </div>
                <div style={{marginTop: '6px'}} className='group--block__info'>
                  <h3>Номер телефона:</h3>
                  <p>{el.phone}</p>
                </div>
              </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
