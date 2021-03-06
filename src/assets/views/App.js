import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent.js';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pngwing5 from './pngwing5.com.png';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import a1 from './a1.png';
import duck from './duck.png';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


/**
 * 2 components: class component / function component ( function, arrow)
 * JSX
 */
function App() {
  // const  App = () =>  {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={a1} className="App-logo" alt="logo" />
       
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/todo">
              <ListTodo />
            </Route>

            <Route path="/about">
              <MyComponent />
            </Route>

            <Route path="/user" exact>
              <ListUser />
            </Route>

            <Route path="/user/:id">
              <DetailUser />
            </Route>

          </Switch>

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
    </BrowserRouter>
  );
}

export default App;