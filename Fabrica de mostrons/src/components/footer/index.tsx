import { Container } from './styles';
/* eslint-disable react/react-in-jsx-scope */

function Footer() {
	return(
		<Container>
			<div>
				<h1>faq</h1>
				{/* <h1 >Perguntas frequentes</h1> */}
			</div>
			<div>
				<div className='grouped'>
					
					<span className='question' >Qual tempo de participação do método?</span>
				</div>
				<div className='grouped'>
					
					<span className='question' >Quais formas de pagamento?</span>
				</div>
				<div className='grouped'>
					
					<span className='question' >Nunca pratiquei exercícios físicos, posso participar?</span>
				</div>
				<div className='grouped'>
					
					<span className='question' >Estou acima do peso, consigo acompanhar os módulos?</span>
				</div>
			</div>
		</Container>
	);
}

export default Footer;