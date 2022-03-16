import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {
  return (
    <>
      <Navbar title="TextOps" />
      <Form heading="Enter text to be operated - " />
    </>
  );
}

export default App;
