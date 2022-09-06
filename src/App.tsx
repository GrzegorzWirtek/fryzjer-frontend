import './App.css';
import { HashRouter } from 'react-router-dom';
import Router from './components/Routes/Router';
import Nav from './components/Nav/Nav';
import AppState from './state/AppState';

function App() {
	return (
		<div className='App'>
			<AppState>
				<HashRouter>
					<Nav />
					<Router />
				</HashRouter>
			</AppState>
		</div>
	);
}

export default App;
