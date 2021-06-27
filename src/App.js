import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';

// https://www.robinwieruch.de/react-hooks-fetch-data

function App() {
const [data, setData] = useState([])
const [error, setError] = useState(null)
const [loading, setLoading] = useState(true)  

  // useEffect(() => {
  //   const fetchData = async () => {
      // const options = {
      //   url: 'https://icanhazdadjoke.com/',
      //   method: 'GET',
      //   headers: {
      //     'Accept': 'application/json'
      //   }
  //     }
  //     const result = await axios(options)   
  //       setData(result.data) 
  //   }
  //   fetchData()
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://icanhazdadjoke.com/', 
      { headers: { Accept: 'application/json'}}
      );
 
      setData(result.data);
    };
    console.log(data)
    fetchData();
  }, []);
 
  return (
    <div className="App">
      <h1>Dad Jokes</h1>
      {/* {data ? data.map(i => <p>{i.joke}</p>) : 'something went wrong'} */}
    </div>
  );
}

export default App;
