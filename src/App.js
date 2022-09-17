import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import Student from './pages/Student';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SignIn />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/student" element={<Student />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
