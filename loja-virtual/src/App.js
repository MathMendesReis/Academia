import logo from './logo.svg';
import './App.css';
import { GlobalState } from './globalStates/GlobalState';
import { GlobalStyled } from './globalStyled/globalStyled';
import Header from './components/header/Header';

function App() {
  return (
    <GlobalState >
      <GlobalStyled />
      <div>
        <Header />
      </div>
    </GlobalState>
  );
}

export default App;
