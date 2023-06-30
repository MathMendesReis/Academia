/* eslint-disable react/react-in-jsx-scope */
import { Container } from './styles';
import img1 from '../../assets/strong-bodybuilder-posing-and-showing-muscles (1) 1.png';
import icon from '../../assets/Vector 1.svg';
function MethodeWork() {
	return(
		<Container>
			<h1>Como funciona o <span>método 5x</span></h1>
			<div>
				<div>
					<img src={img1} alt="" />
					<h2>transformando a <br/> alimentação</h2>
					<h2>módulo 1</h2>
					<button>saiba mais</button>
				</div>
				<div>
					<img src={img1} alt="" />
					<h2>transformando a <br/> alimentação</h2>
					<h2>módulo 1</h2>
					<button>saiba mais</button>
				</div>
				<div>
					<img src={img1} alt="" />
					<h2>transformando a <br/> alimentação</h2>
					<h2>módulo 1</h2>
					<button>saiba mais</button>
				</div>
				<div>
					<img src={img1} alt="" />
					<h2>transformando a <br/> alimentação</h2>
					<h2>módulo 1</h2>
					<button> <img src={icon} alt="" />saiba mais</button>
				</div>
			</div>
			<button className='button-footer'>quero começar agora</button>
		</Container>
	);
}

export default MethodeWork;