/* eslint-disable react/react-in-jsx-scope */
import { Container } from './styles';
import fit from '../../assets/fit.svg';
import grafico from '../../assets/grafico.svg';
import corredor from '../../assets/corredor.svg';

function DoneForyou() {
	return(
		<Container>
			<h1>feito para você</h1>
			<div>
				<div>
					<img src={fit} alt="" />
					<p>Iniciante na busca do corpo perfeito</p>
				</div>
				<div>
					<img src={grafico} alt="" />
					<p>Praticante que não conseguem mais evoluir</p>
					
				</div>
				<div>
					<img src={corredor} alt="" />
					<p>Atleta em evolução e em competições fisiculturistas</p>
				</div>
			</div>
		</Container>
	);
}

export default DoneForyou;