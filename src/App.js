import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import StudentLogin from './pages/StudentLogin';
import FacultyLogin from './pages/FacultyLogin';
import About from './pages/About';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard'; 
import StudentDashboard from './pages/student/StudentDashboard';
import FacultyDashboard from './pages/faculty/FacultyDashboard';
import AdminStudent from './pages/admin/AdminStudent';
import AddStudent from './pages/admin/AddStudent';
import AdminCourse from './pages/admin/AdminCourse';
import AddCourse from './pages/admin/AddCourse';
import AdminFaculty from './pages/admin/AdminFaculty';
import AddFaculty from './pages/admin/AddFaculty';
import ViewFaculty from './pages/admin/ViewFaculty';
import ViewStudent from './pages/admin/ViewStudent';
import ViewCourse from './pages/admin/ViewCourse';
import DeleteStudent from './pages/admin/DeleteStudent';
import DeleteFaculty from './pages/admin/DeleteFaculty';
import DeleteCourse from './pages/admin/DeleteCourse';
import UpdateFaculty from './pages/admin/UpdateFaculty'
import UpdateStudent from './pages/admin/UpdateStudent';
import StudentCourses from './pages/student/StudentCourses';
import DisplayCourses from './pages/student/DisplayCourses';
import FacultyCourseMapping from './pages/admin/FacultyCourseMapping';
import DisplayMapping from './pages/admin/DisplayMapping';
import StudentChangePassword from './pages/student/StudentChangePassword';
import AddCourseContent from './pages/faculty/AddCourseContent';
import MyCourses from './pages/faculty/MyCourses';
import ViewCourseContent from './pages/student/ViewCourseContent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/facultylogin" element={<FacultyLogin />} />
        <Route path="/about" element={<About />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/student/dashboard" element ={<StudentDashboard/>}/>
        <Route path="/faculty/dashboard" element ={<FacultyDashboard/>}/>
        <Route path="/admin/adminstudent" element ={<AdminStudent/>}/>
        <Route path="/admin/addstudent" element ={<AddStudent/>}/>
        <Route path="/admin/admincourse" element ={<AdminCourse/>}/>
        <Route path="/admin/addcourse" element ={<AddCourse/>}/>
        <Route path="/admin/adminfaculty" element={<AdminFaculty/>}/>
        <Route path="/admin/addfaculty" element={<AddFaculty/>}/>
        <Route path="/admin/viewfaculty" element={<ViewFaculty/>}/>
        <Route path="/admin/viewstudent" element={<ViewStudent/>}/>
        <Route path="/admin/viewcourse" element={<ViewCourse/>}/>
        <Route path="/admin/deletestudent" element={<DeleteStudent/>}/>
        <Route path="/admin/deletefaculty" element={<DeleteFaculty/>}/>
        <Route path="/admin/deletecourse" element={<DeleteCourse/>}/>
        <Route path="/admin/updatefaculty" element={<UpdateFaculty/>}/>
        <Route path="/admin/updatestudent" element={<UpdateStudent/>}/>
        <Route path="/student/studentcourses" element={<StudentCourses/>}/>
        <Route path="/student/displaycourses" element={<DisplayCourses/>}/>
        <Route path="/admin/facultycoursemapping" element={<FacultyCourseMapping/>}/>
        <Route path="/admin/displaymapping" element={<DisplayMapping/>}/>
        <Route path="/student/changepassword" element={<StudentChangePassword/>}/>
        <Route path="/faculty/addcoursecontent" element={<AddCourseContent/>}/>
        <Route path="/faculty/mycourses" element={<MyCourses/>}/>
        <Route path="/student/viewcoursecontent" element={<ViewCourseContent/>}/>




      </Routes>
    </Router>
  );
}

export default App;
