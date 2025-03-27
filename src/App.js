import './App.css';
import StudentRegistrationForm from './components/StudentRegistrationForm';
import EmployeeFeedbackForm from './components/EmployeeFeedbackForm';
// import {Route,Routes,Link} from 'Route';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
// {Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
     <Router>
      <div className='App'>
     <Link to="/student">Student Registration</Link>
     <Link to="/employee">Employee Feedback</Link>
     </div>
    <Routes>
      <Route path="/" element={<Navigate to="/student"/>}/>
      <Route path="/student" element={<StudentRegistrationForm/>}/>
      <Route path="/employee" element={<EmployeeFeedbackForm/>}/>
    </Routes>
  </Router>
    
  );
}

export default App;
