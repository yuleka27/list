import './App.css';
import { Todolist } from './Todolist';
import image from './cover.jpg'


function App() {
  return (
    <div className="App">
      <div className='container'>
    <img src = {image} width="500px" alt="list"/>
    </div>
    <div className='container'>
<h1>TO DO LIST</h1>
</div>
<Todolist/>
    </div>
  );
}

export default App;

