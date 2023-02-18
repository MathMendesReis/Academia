import logo from './logo.svg';
import './App.css';
import { GlobalState } from './globalStates/GlobalState';
import { GlobalStyled } from './globalStyled/globalStyled';

function App() {
  return (
    <GlobalState >
      <GlobalStyled />

    </GlobalState>
  );
}

export default App;
