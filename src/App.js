import './estilos.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaHome from "./componentes/telas/telaHome";
import TelaCadastroInscricoes from './componentes/telas/telaCadastroInscricoes';
import TelaExclusaoInscricoes from './componentes/telas/telaExclusao';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaHome />} />
          <Route path="/inscricao" element={<TelaCadastroInscricoes />} />
          <Route path="/excluir" element={<TelaExclusaoInscricoes />} />
        </Routes>
      </BrowserRouter>           
    </div>
  );
}

export default App;
