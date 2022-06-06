import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login'
import './App.css';
import ListaTema from './components/temas/listatema/listatema';
import ListaPostagem from './components/postagens/listapostagem/listapostagem';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';


function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
        </Routes>
        <Routes> // Antigo Switch
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes> // Antigo Switch
          <Route path="/home" element={<Home />} />
        </Routes>
        <Routes> // Antigo Switch
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
        </Routes>
        <Routes> // Antigo Switch
          <Route path="/temas" element={<ListaTema />} />
        </Routes>
        <Routes> // Antigo Switch
          <Route path="/posts" element={<ListaPostagem />} />
        </Routes>
        <Route path="/formularioPostagem" element={<CadastroPostagem />} />

        <Route path="/formularioPostagem/:id" element={<CadastroPostagem />} />

        <Route path="/formularioTema" element={<CadastroTema />} />

        <Route path="/formularioTema/:id" element={<CadastroTema />} />

        <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

        <Route path="/deletarTema/:id" element={<DeletarTema />} />
      </div>
      <Footer />
    </Router>

  );
}

export default App;
