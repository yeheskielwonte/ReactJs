import './App.css';
import Card from './Components/Card';
import {person} from './Components/person'

function App() {
  return (
    <>
    {person.map((item)=>{
      return (
        <Card name={item.name} fam={item.fam}/>
      );
    })
    }
    </>
  );
}

export default App;
