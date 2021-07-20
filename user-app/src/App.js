import './App.css';
import Form from "./Components/Form";
import { UserList } from './Components/UserList';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Form/>
      <UserList/>
    </div>
  );
}

export default App;
