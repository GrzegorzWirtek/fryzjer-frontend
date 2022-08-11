import './App.css';
import { HashRouter } from 'react-router-dom';
import Router from './components/Routes/Router';
import Nav from './components/Nav/Nav';

function App() {
	return (
		<div className='App'>
			<HashRouter>
				<Nav />
				<Router />
			</HashRouter>
		</div>
	);
}

export default App;
