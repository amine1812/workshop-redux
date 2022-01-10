import {useDispatch,useSelector} from 'react-redux';
import './App.css';
import {incrementHandler} from './redux/Action';


function App() {
// create a const for the hook "useDispatch"
const Dispatch = useDispatch()
// Dispatch the action 
const plus =() => { Dispatch (incrementHandler())

}
// extract global state from the store 
const count = useSelector((state)=>state.counter)


  return (
    <div className="App">
     <h1>Work shop react-redux</h1>
   
   
   
   
     <div className="Buttons">
            <button onClick={plus} >+</button>

              <h3> {count}  </h3>

              <button>-</button>




     </div>

    </div>
  );
}

export default App;
