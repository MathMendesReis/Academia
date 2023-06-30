/* eslint-disable react/react-in-jsx-scope */
import Header from '../../components/sectionHeader';
import DoneForyou from '../../components/doneForYou';
import { Container } from './styles';
import MethodeWork from '../../components/methodWorks';
import Coach from '../../components/whoIsYourCoach';
import Invenstemnt from '../../components/investiment';
import Footer from '../../components/footer';
function Main() {
	return (
		<Container>
			<Header/>
			<DoneForyou/>
			<MethodeWork/>
			<Coach/>
			<Invenstemnt/>
			<Footer/> 
		</Container>
	);
}

export default Main;
