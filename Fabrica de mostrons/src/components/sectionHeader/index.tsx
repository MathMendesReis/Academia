/* eslint-disable react/react-in-jsx-scope */
import Group from '../../assets/Group.svg';
import bodybuilderBacgroud from '../../assets/muscular-and-fit-young-bodybuilder-fitness-male-model-posing-over-black-background-copy-space 1.png';
import backviwe from  '../../assets/back-view-of-a-muscular-man-with-tattoo-on-back-against-of-black-background-isolated 1.png';
import { Container } from './styles';
function Header() {
	return (
		<Container bg={ backviwe }>
			<div>
				<div>
					<img src={Group} alt="logo" />
					<div>
						<h1>FÁBRICA</h1>
						<h3>DE MONSTROS</h3>
					</div>
				</div>
				<h1>Transforme o seu corpo <span>5x</span> mais <span>rápido</span></h1>
				<h3>Faça parte do método mais utilizado por atletas de alto nível. Venha transformar seu corpo e reconquistar a sua autoestima</h3>
				<button>COMEÇAR AGORA</button>
			</div>
			<div>
				<img src={bodybuilderBacgroud} alt="" />
			</div>
		</Container>
	);
}

export default Header;
