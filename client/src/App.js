import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';

function App() {


  return (
    <Routes>
      <Route path='/' element={ <SignIn />} />

    </Routes>
  );
}

export default App;
