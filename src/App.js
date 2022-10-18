import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
// import Logo from './components/Home/Logo';
import { BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';



function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes> 
            <Route  path="/" element={<Home />} />
            <Route  path="about" element={<About />} />
            <Route  path="contact" element={<Contact />} />
        </Routes>
      </Layout>
    
    </BrowserRouter>
  );
}

export default App;
