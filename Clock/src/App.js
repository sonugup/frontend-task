import logo from './logo.svg';
import './App.css';
import {useState , useEffect} from "react"
function App() {

  


  const [curTime, setCurTime] = useState(new Date)

  const updatedDate = ()  => {
   let time= new Date();
    setCurTime(time)
  }
     useEffect(() => {
      const timdata=setInterval(updatedDate, 1000)
      return function cleanup() {
        clearInterval(timdata);
      };
     }, [])
  setInterval(updatedDate, 1000)
  return (
    <div className="App">
      <div className="App-header">
        <div className="box">
        <h2>{curTime.toLocaleTimeString()}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
