import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import urlBaseInscricao from "../../utilitarios/configuracoes";

export default function FormExclusaoInscricoes(props) {
  const [cpf, setCpf] = useState("");
  const [vaga, setVaga] = useState("");
  const [mensagem, setMensagem] = useState("");

  function excluirInscricao(cpf, vaga) {
    fetch(urlBaseInscricao, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cpf: cpf, vaga: vaga })
    })
      .then(resposta => resposta.json())
      .then((dados) => {
        if (dados.status) {
          setMensagem("Inscrição excluída com sucesso!");
        } else {
          alert(dados.mensagem);
        }
      })
      .catch((erro) => {
        alert("Não foi possível conectar ao backend. erro: " + erro.message);
      });
  }

  function manipularMudancaCPF(evento) {
    setCpf(evento.target.value);
  }

  function manipulaMudancaVaga(evento) {
    setVaga(evento.target.value);
  }

  function manipularSubmissao(evento) {
    evento.preventDefault();
  }

  return (
    <div>
      <h5 className="mt-5">Excluir Inscrição</h5>
      <p className="mt-3">Deseja excluir sua inscrição em alguma vaga? Informe o CPF e a vaga em que deseja excluir a inscrição:</p>
      <Form onSubmit={manipularSubmissao}>
        <Form.Group controlId="formCpf">
          <Form.Label className="mt-3">CPF</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o CPF"
            value={cpf}
            onChange={manipularMudancaCPF}
            required
          />
        </Form.Group>
        <Form.Group controlId="formVaga">
          <Form.Label className="mt-3">Vaga</Form.Label>
          <Form.Control
            as="select"
            value={vaga}
            onChange={manipulaMudancaVaga}
            required
          >
            <option value="">Selecione a vaga</option>
            <option value="Desenvolvedor Web Remoto">Desenvolvedor Web Remoto</option>
            <option value="Assistente Virtual Remoto">Assistente Virtual Remoto</option>
            <option value="Redator de Conteúdo Remoto">Redator de Conteúdo Remoto</option>
            <option value="Designer Gráfico Remoto">Designer Gráfico Remoto</option>
            <option value="Especialista em Marketing Digital Remoto">Especialista em Marketing Digital Remoto</option>
          </Form.Control>
        </Form.Group>
        <Button
                    variant="danger"
                    className="mt-3"
                    onClick={() => {
                      if(window.confirm("Deseja excluir a inscrição?")){
                        excluirInscricao(cpf, vaga);
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>{" "}
                    excluir
                  </Button>{" "}
      </Form>
      <div className="mt-3">
        {mensagem && <h6>{mensagem}</h6>} 
      </div>
           
    </div>
  );
}
