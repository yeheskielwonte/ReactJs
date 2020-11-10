import './App.css';
import Card from './Components/Card';

const person=[
  {name:"Owen",fam:"Geraldy"},
  {name:"Dan",fam:"me"},
]

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
