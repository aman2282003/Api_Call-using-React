import { useState } from 'react'
import DataDisplay from './components/datadisplay'
import './App.css'

function App() {
  const [data, setdata] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [error, seterror] = useState(null)



  async function fetchData(){
    try {
        setisLoading(true);
        let res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        let response = await res.json()
        setdata(response)
    } catch (error) {
      seterror(error)
    }
     finally {
      setisLoading(false);
    }

  }
  return (
    <div style ={{textAlign : "center"}}>
      <button onClick={fetchData} style ={{height: "30px", width : "200px"}}>{isLoading ? 'Loading...' : 'Get Data'}</button>
      {error ? (
      <Error />
    ) : (
      <div className="main" style={{ display: "flex", flexWrap: "wrap" }}>
        <DataDisplay data={data} />
      </div>
    )}
    </div>
  )
}
function Error(){
  return(
    <h1>No data found! Try Again</h1>
  )
}
export default App
