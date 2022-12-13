import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Documents from "./pages/Documents/documents";
import Assignments from "./pages/Assignments/assignments";
import SignIn from "./pages/SignIn/signIn";
import SignUp from "./pages/SignUp/signUp";
import Home from "./pages/Home/home";
import ClassList from "./pages/ClassList/classList";
import AdminReports from "./pages/Admin/adminReports";
import AdminClasses from "./pages/Admin/adminClasses";
import Posts from "./pages/Posts/posts";

function App() {
  return (
      <Routes>
          <Route path="/" element={<SignIn />}/>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/class">
              <Route path=":id">
                  <Route path="documents" element={<Documents />} />
                  <Route path="assignments" element={<Assignments />} />
                  <Route path="other" element={<ClassList />} />
                  <Route path="posts" element={<Posts />} />
              </Route>
          </Route>
          <Route path="/admin">
              <Route path="reports" element={<AdminReports />} />
              <Route path="class" element={<AdminClasses />} />
          </Route>
      </Routes>
  );
}

export default App;
