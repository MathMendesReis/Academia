
import './App.css';
import { GlobalState } from './globalStates/GlobalState';
import { GlobalStyled } from './globalStyled/globalStyled';
import Header from './components/header/Header';
import SectionOne from './components/sectionFeitoParaVoce/SectionOne';
import SectionComoFuncionaOMetodo from './components/sectionComoFuncionaOMetodo';
import { CardTreinador } from './components/SectionTreinador';
import { SectionFaq } from './components/sectionFaq';
import { Body } from './globalStyled/styled';

function App() {
  return (
    <GlobalState >
      <GlobalStyled />
      {/* <Body > */}
      <Header />
      <SectionOne />
      <SectionComoFuncionaOMetodo />
      <CardTreinador />
      <SectionFaq />
      {/* </Body> */}
    </GlobalState>
  );
}

export default App;
