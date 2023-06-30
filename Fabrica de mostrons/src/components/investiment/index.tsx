/* eslint-disable react/react-in-jsx-scope */
import { Container } from './styles';
import Img from '../../assets/img.png';

function Invenstemnt() {
	return (
		<Container>
			<div>
				<div>
					<h1>
                investimento
					</h1>
					<p>Lorem ipsum dolor sit amet consectetur.
                    Lacus consequat auctor lacus amet volutpat sed.

                    Ipsum nibh aliquam integer faucibus purus. Orci eu malesuada morbi et interdum nunc lorem a adipiscing.</p>
					<h3>Por apenas R$1.940,00</h3>
					<h2>Ou 12x de R$175,80  </h2>
					<button>quero começar agora</button>
				</div>
			</div>
			<div>
				<img src={Img} alt="" />
				<p>Se em 7 dias você perceber que esse método não é para você, é só solicitar seu dinheiro de volta que a devolução será realizada de maneira simples e rápida, não precisa de justificativa.</p>
			</div>
		</Container>
	);
}

export default Invenstemnt;