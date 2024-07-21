import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import CreateAccount from './components/CreateAccount';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
      {/* <Route path='/' element={<Login />} /> */}
      {/* <Route path='/' element={<ForgotPassword/>} /> */}
      <Route path='/' element={<CreateAccount/>} />
      </Routes>
    </Router>
  );
}

export default App;
