
import './App.css';
import { GlobalState } from './globalStates/GlobalState';
import { GlobalStyled } from './globalStyled/globalStyled';
import Header from './components/header/Header';
import SectionOne from './components/sectionFeitoParaVoce/SectionOne';
import SectionComoFuncionaOMetodo from './components/sectionComoFuncionaOMetodo';
import { CardTreinador } from './components/SectionTreinador';

function App() {
  return (
    <GlobalState >
      <GlobalStyled />
      <div>
        <Header />
        <SectionOne />
        <SectionComoFuncionaOMetodo />
        {/* <CardTreinador /> */}
      </div>
    </GlobalState>
  );
}

export default App;
