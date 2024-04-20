import './App.css';
import TaskList from './Components/TaskList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import TaskForm from './Components/TaskForm';


const store = createStore(reducer);

function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
        <h1>TO-DO-LIST</h1>
        <TaskForm />
        <TaskList />
      </Provider>
    </div>
  );
}

export default App;
