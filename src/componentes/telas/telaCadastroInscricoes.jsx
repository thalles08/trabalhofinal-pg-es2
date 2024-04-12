import FormCadInscricoes from "../formularios/formCadInscricoes";
import TabelaCadInscricoes from "../tabelas/tabelaCadInscricoes";
import Pagina from "../templates/pagina";
import { useState, useEffect } from "react";
import urlBaseInscricao from "../../utilitarios/configuracoes";

export default function TelaCadastroInscricoes(props) {
  const [exibirTabela, setExibirTabela] = useState(true);
  const [listaInscricoes, setListaInscricoes] = useState([]);
  const [inscricaoSelecionada, setInscricaoSelecionada] = useState({});
  const [modoEdicao, setModoEdicao] = useState(false);

  useEffect(() => {
    fetch(urlBaseInscricao,{method: "GET"})
    .then(resposta => resposta.json())
    .then(inscricoes => setListaInscricoes(inscricoes));
  }, []);

  if (exibirTabela) {
    return (
      <div>
        <Pagina>
          <h5 className="mt-5">Cadastro de Inscrições</h5>
          <h6 className="mt-5">Lista de Inscrições</h6>
          <div className="mt-3">
            <TabelaCadInscricoes
              listaInscricoes={listaInscricoes}
              setListaInscricoes={setListaInscricoes}
              setExibirTabela={setExibirTabela}
              setInscricaoSelecionada={setInscricaoSelecionada}
              setModoEdicao={setModoEdicao}
            />
          </div>
        </Pagina>
      </div>
    );
  } else {
    return (
      <div>
        <Pagina>
          <h5 className="mt-5">Cadastro de Inscrições</h5>
          <h6 className="mt-5">Formulário de cadastro de Inscrições</h6>
          <div className="mt-3">
            <FormCadInscricoes
              setExibirTabela={setExibirTabela}
              listaInscricoes={listaInscricoes}
              setListaInscricoes={setListaInscricoes}
              inscricaoSelecionada={inscricaoSelecionada}
              setModoEdicao={setModoEdicao}
              modoEdicao={modoEdicao}
            />
          </div>
        </Pagina>
      </div>
    );
  }
}
