
import './App.css';
import { GlobalState } from './globalStates/GlobalState';
import { GlobalStyled } from './globalStyled/globalStyled';
import Header from './components/header/Header';
import SectionOne from './components/sectionFeitoParaVoce/SectionOne';
import SectionComoFuncionaOMetodo from './components/sectionComoFuncionaOMetodo';

function App() {
  return (
    <GlobalState >
      <GlobalStyled />
      <div>
        <Header />
        <SectionOne />
        <SectionComoFuncionaOMetodo />

      </div>
    </GlobalState>
  );
}

export default App;
