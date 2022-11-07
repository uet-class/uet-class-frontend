import React from 'react';
import './App.css';
import { Route, Routes} from "react-router-dom";
import Home from './pages/Home/home';
import Documents from "./pages/Documents/documents";
import Assignments from "./pages/Assignments/assignments";
import Posts from "./pages/Posts/posts";
import SignIn from "./pages/SignIn/signIn";
import SignUp from "./pages/SignUp/signUp";
import News from './pages/News/news';
import Other from './pages/Other/other';

function App() {
  return (
      <Routes>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/news" element={<News />} />
          <Route path="/other" element={<Other />} />
      </Routes>
  );
}

export default App;
