import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import MovieDetail from './pages/MovieDetail/MovieDetail.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <MovieDetail /> */}
		<App />
	</React.StrictMode>,
);
