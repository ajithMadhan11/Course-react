import logo from './logo.svg';
import './App.css';
import Course from './Course'

function App() {
  var Courses=[
    {name:'Complete dev course', price:199 },
    {name:'Complete front dev course', price:159 },
    {name:'Complete backend dev course', price:299 },
    {name:'Complete bug bounty course', price:119 }
  ]
  return (
    <div className="App">

            <Course items={Courses}/>
    
    </div>
  );
}

export default App;
