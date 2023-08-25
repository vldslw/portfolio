import './Stack.css';
import javaScript from './images/js.svg';
import react from './images/react.svg';
import node from './images/node.svg';
import html from './images/html.svg';
import css from './images/css.svg';
import mongo from './images/mongo.svg';

export const Stack = () => {
	return (
		<section id="stack" className="stack">
			<img src={javaScript} className="stack__icon" alt="JavaScript" />
			<img src={react} className="stack__icon" alt="React" />
			<img src={node} className="stack__icon" alt="Node.js" />
			<img src={html} className="stack__icon" alt="HTML" />
			<img src={css} className="stack__icon" alt="CSS" />
			<img src={mongo} className="stack__icon" alt="MongoDB" />
		</section>
	);
};
