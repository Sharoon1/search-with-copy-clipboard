import { ToastContainer } from 'react-toastify';
import './App.scss';
import Routes from './pages/Routes';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
  <>
  <Routes/>
  <ToastContainer/>
  </>
  );
}

export default App;
