
import './App.css';

function App() {
	


	
	const mobileoper = ['android', 'blackberry', 'iphone', `window's iphone`];


	const maufacturer =['samsung','HTC','Micromax','Apple']
	return (
		<div className="App">
			<div>
				<h1>Mobile Operating System</h1>
				{mobileoper.map((e) => {
					return (
						<ul>
							<Mobileoper os={e}></Mobileoper>
						</ul>
					);
				})}
			</div>
			<div>
				<h1>Mobile Manufacturer</h1>
				{maufacturer.map((e) => {
					return (
						<ul>
							<Mobilecom os={e}></Mobilecom>
						</ul>
					);
				})}
			</div>
		</div>
	);
}

function Mobileoper(props) {
	return <li>{props.os}</li>;
}

function Mobilecom(props) {
	return <li>{props.os}</li>;
}

export default App;
