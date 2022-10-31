// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/header/Header.jsx"

function App() {
  return (
    <BrowserRouter>
    <Header>
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/test" element={<div>test</div>} />
      </Routes>
    </Header>
    </BrowserRouter>
  );
}

export default App;
