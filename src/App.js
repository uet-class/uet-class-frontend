import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Documents from "./pages/Documents/documents";
import Assignments from "./pages/Assignments/assignments";
import Posts from "./pages/Posts/posts";
import SignIn from "./pages/SignIn/signIn";
import SignUp from "./pages/SignUp/signUp";
import Home from "./pages/Home/home";
import News from "./pages/News/news";
import Other from "./pages/Other/other";
import AdminDashboard from "./pages/Admin/adminDashboard";

function App() {
  return (
      <Routes>
          <Route path="/" element={<SignIn />}/>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/news" element={<News />} />
          <Route path="/other" element={<Other />} />
          <Route path="/news" element={<News />} />
          <Route path="/other" element={<Other />} />
          <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
  );
}

export default App;
