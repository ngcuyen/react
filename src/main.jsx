import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { store } from './Redux/config.jsx';
import MovieDetail from './pages/MovieDetail/MovieDetail.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/moviedetail/:movieId" element={<MovieDetail />} />
			</Routes>
		</BrowserRouter>
	</Provider>
);
