//import { Button } from 'antd';
import './stylesheets/text-elements.css';
import './stylesheets/form-elements.css';
import './stylesheets/custom-components.css';
import './stylesheets/alignments.css';
import './stylesheets/theme.css';
import './stylesheets/layout.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/login";
import Register from "./pages/Register";
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import Transactions from './pages/Transactions';
import Requests from './pages/Requests';
import Users from './pages/Users'



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<PublicRoute><Login/></PublicRoute>}/>
        <Route path='/register' element={<PublicRoute><Register/></PublicRoute>}/>
        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/transactions" element={<ProtectedRoute><Transactions/></ProtectedRoute>}/>
        <Route path="/requests" element={<ProtectedRoute><Requests/></ProtectedRoute>}/>
        <Route path='/Users' element={<ProtectedRoute><Users/></ProtectedRoute>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
