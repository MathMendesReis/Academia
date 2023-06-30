/* eslint-disable react/react-in-jsx-scope */
import { Container } from './styles';
import Img from '../../assets/hardy-man-doing-exercise-with-heavy-bar 1 (1).png';
function Coach() {
	return(
		<Container>
			<div>
				<h1>quem é seu treinador</h1>
				<p>Lorem ipsum dolor sit amet consectetur. In augue egestas ullamcorper nec viverra orci risus egestas. Lacus consequat auctor lacus amet volutpat sed. Pharetra suscipit in vitae ante etiam in. Convallis blandit dolor in nisl malesuada venenatis dignissim mauris.

                    Nisl mi vehicula cursus nisi sit nulla donec adipiscing. Ipsum nibh aliquam integer faucibus purus. Orci eu malesuada morbi et interdum nunc lorem a adipiscing. Nisl suscipit maecenas risus amet at convallis massa.Lorem ipsum dolor sit amet consectetur. In augue egestas ullamcorper nec viverra orci risus egestas. Lacus consequat auctor lacus amet volutpat sed.

                    Pharetra suscipit in vitae ante etiam in. Convallis blandit dolor in nisl malesuada venenatis dignissim mauris.</p>
				<div>
					<div>
						<h1>
                        +200
						</h1>
						<h2>Vidas <br/> transformadas</h2>
					</div>
					<div>
						<h1>
                        +200
						</h1>
						<h2>Vidas <br/> transformadas</h2>
					</div>
					<div>
						<h1>
                        +200
						</h1>
						<h2>Vidas <br/> transformadas</h2>
					</div>
				</div>
			</div>
			<div>
				<img src={Img} alt="" />
			</div>
		</Container>
	);
}

export default Coach;
