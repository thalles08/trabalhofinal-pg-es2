import './estilos.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaHome from "./componentes/telas/telaHome";
import TelaCadastroFuncionarios from "./componentes/telas/telaCadastroFuncionarios";
import TelaCadastroInscricoes from './componentes/telas/telaCadastroInscricoes';
import TelaExclusaoInscricoes from './componentes/telas/telaExclusao';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaHome />} />
          <Route path="/funcionario" element={<TelaCadastroFuncionarios />} />
          <Route path="/inscricao" element={<TelaCadastroInscricoes />} />
          <Route path="/excluir" element={<TelaExclusaoInscricoes />} />
        </Routes>
      </BrowserRouter>           
    </div>
  );
}

export default App;
