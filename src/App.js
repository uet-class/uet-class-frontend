import React from 'react';
import './App.css';
import { Route, Routes} from "react-router-dom";
import Documents from "./pages/Documents/documents";
import Assignments from "./pages/Assignments/assignments";
import Posts from "./pages/Posts/posts";
import SignIn from "./pages/SignIn/signIn";
import SignUp from "./pages/SignUp/signUp";
import Home from "./pages/Home/home";

function App() {
  return (
      <Routes>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/assignments" element={<Assignments />} />
      </Routes>
  );
}

export default App;
