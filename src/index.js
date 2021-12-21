import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
}
  from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to="/learn" />} />
      <Route path="/learn" element={<Learn />}>
        <Route path="courses" element={<Courses />}>
          <Route path=":courseId" element={<CourseId />} />
        </Route>
        <Route path="bundles" element={<Bundles />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);


function Home() {
  return (
    <>
      <div>
        <h1>Home Route</h1>
      </div>
    </>
  );
}

function Learn() {
  return (
    <>
      <div className='container'>
        <h1>Learn</h1>
        <h4>Here are the all course list</h4>
       
        <Link to="/learn/courses" className='btn btn-success me-2'>Courses</Link>
        <Link to="/learn/bundles" className='btn btn-danger'>bundle</Link>
        <Outlet />
      </div>
    </>
  );
}

function Courses() {
  const courseList = ['react', 'angular', 'vue', 'tailwind'];
  const randomCourseName = courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <>
      <div>
        <h1>Courses lists</h1>
        <h4>Courses CarDs</h4>

        <p>More test</p>
        <NavLink
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? 'pink' : 'green'
            }
          }}
          to={`/learn/courses/${randomCourseName}`}>{randomCourseName}</NavLink>
        <NavLink to={`/learn/courses/tests`}>Tests</NavLink>
      </div>
      <Outlet />
    </>
  );
}

function Bundles() {
  return (
    <>
      <div>
        <h1>Bundles lists</h1>
        <h4>Bundles Cards</h4>
      </div>
    </>
  );
}

function CourseId() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h4>Params will be : {courseId}</h4>
        <button
        onClick={() => {
          navigate('/dashboard', {state: '299'})
        }}
        className='btn btn-warning'>Price</button>
      </div>
    </>
  );
}

function Dashboard() {
  const location = useLocation()
  return (
    <>
      <div>
        <h4>Info that I got {location.state}</h4>
      </div>
    </>
  );
}

reportWebVitals();
