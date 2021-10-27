import './App.css';
import HomePage from './pages/Home';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Rouute exact path='/' component={HomePage} />
      <Route path='*' component={() => <h1>Not Found </h1>} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
