import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllQuestions } from './actions/question'
import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import AllRoutes from './AllRoutes';
function App() {

  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(fetchAllQuestions())
  },[dispatch])
  return (
    <div className="App">
      <Router>
        <NavBar />
        <AllRoutes/>
      </Router>

    </div>
  );
}

export default App
