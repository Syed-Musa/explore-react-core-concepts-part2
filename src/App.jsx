import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './user';
import Friends from './Friend';

function App() {

  function handleClick(){
    alert('button clicked now')
  }

  function anohandle(){
    alert('another button clicked')
  }

  const addToRun = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      
      <h3>React core concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={anohandle}>Click another</button>
      <button onClick={() => {alert('Read the show button')}}>Read</button>
      <button onClick={() => addToRun(15)}>Show</button>
    </>
  )
}

export default App
