import React from 'react';
import './App.css';
import { Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Documents from "./pages/Documents/Documents";
import Assignments from "./pages/Assignments/Assignments";
import Posts from "./pages/Posts/Posts";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import News from './pages/News/News';
import Other from './pages/Other/Other';

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
