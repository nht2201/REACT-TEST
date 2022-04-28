import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent.js';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sharingan from './pngwing5.com.png'
/**
 * 2 components: class component / function component ( function, arrow)
 * JSX
 */
function App() {
  // const  App = () =>  {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sharingan} className="App-logo" alt="logo" />
        <p>
          WELCOME TO VNPT TECHNOLOGY
        </p>

        <MyComponent />
        {/* <MyComponent /> */}
        <ListTodo />

      </header>


      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        
      />
    </div>
  );
}
export default App;