import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import Home from './Component/Home/Home'
import Header from './Component/Header/Header'
import Services from './Component/Home/Services/Services'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/home">
<Home></Home>
        </Route>

        <Route path="/">
        <Home></Home>

        </Route>
<Route path="/services">
<Services></Services>
</Route>
      </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
