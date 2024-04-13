import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import urlBaseInscricao from "../../utilitarios/configuracoes";

export default function FormCadInscricoes(props) {
  const [validado, setValidado] = useState(false);
  const [inscricao, setInscricao] = useState(
    props.modoEdicao
      ? props.inscricaoSelecionada
      : {
          nome: "",
          dataNascimento: "",
          cpf: "",
          endereco: "",
          telefone: "",
          email: "",
          vaga: "",
        }
  );

  async function enviarInscricaoBackend() {
    const resposta = await fetch(urlBaseInscricao, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inscricao)
    })
    const dados = await resposta.json();
    return dados;
  }

  async function alterarInscricaoBackend() {
    const resposta = await fetch(urlBaseInscricao, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inscricao)
    })
    const dados = await resposta.json();
    return dados;
  }

  function manipularMudanca(evento) {
    const componente = evento.currentTarget;
    setInscricao({ ...inscricao, [componente.name]: componente.value });
  }

  function manipularSubmissao(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    const form = evento.currentTarget;
    if (form.checkValidity() === false) {
      setValidado(true);
    } else {
      setValidado(false);
      if (!props.modoEdicao) {
        enviarInscricaoBackend().then((dados) => {
          if (dados.status) {
              props.setListaInscricoes([...props.listaInscricoes, inscricao]);
              props.setExibirTabela(true);
          }
          alert(dados.mensagem);
        })
        .catch((erro) => {
          alert('Não foi possível conectar ao backend. Erro: ' + erro.message);
        });
      } 
      else {
        alterarInscricaoBackend().then((dados) => {
          alert(dados.mensagem);
          if (dados.status) {
            const posicao = props.listaInscricoes
            .map(inscricao => inscricao.id)
            .indexOf(props.inscricaoSelecionada.id);
            let novaLista = [...props.listaInscricoes];
            novaLista[posicao] = inscricao;
            props.setListaInscricoes(novaLista);
            props.setExibirTabela(true);
          }
        })
        .catch((erro) => {
          alert('Não foi possível conectar ao backend. Erro: ' + erro.message);
        });        
      }
    }
  }

  return (
    <Form noValidate validated={validado} onSubmit={manipularSubmissao}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Insira o nome"
            value={inscricao.nome}
            name="nome"
            id="nome"
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Informe o nome.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Data de nascimento</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="00/00/0000"
            value={inscricao.dataNascimento}
            name="dataNascimento"
            id="dataNascimento"
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Informe a data de nascimento.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>CPF</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="000.000.000-00"
            value={inscricao.cpf}
            name="cpf"
            id="cpf"
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Informe o CPF.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Endereço completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe endereço, CEP, cidade e estado"
            value={inscricao.endereco}
            name="endereco"
            id="endereco"
            onChange={manipularMudanca}
            required
          />
          <Form.Control.Feedback type="invalid">
            Informe o endereço completo.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe o telefone"
            value={inscricao.telefone}
            name="telefone"
            id="telefone"
            onChange={manipularMudanca}
            required
          />
          <Form.Control.Feedback type="invalid">
            Informe o telefone.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="text"
            placeholder="Informe o e-mail"
            value={inscricao.email}
            name="email"
            id="email"
            onChange={manipularMudanca}
            required
          />
          <Form.Control.Feedback type="invalid">
            Informe o e-mail.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="formGridState">
            <Form.Label>Vaga</Form.Label>
            <Form.Select 
            defaultValue="Escolha a vaga para se candidatar"
            type="text"
            placeholder="Informe o e-mail"
            value={inscricao.vaga}
            name="vaga"
            id="vaga"
            onChange={manipularMudanca}
            required>
              <option>Escolha uma vaga</option>
              <option>Desenvolvedor Web Remoto</option>
              <option>Assistente Virtual Remoto</option>
              <option>Redator de Conteúdo Remoto</option>
              <option>Designer Gráfico Remoto</option>
              <option>Especialista em Marketing Digital Remoto</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
            Selecione uma vaga.
          </Form.Control.Feedback>
          </Form.Group>
      </Row>
      <Button type="submit">
        {props.modoEdicao ? "Alterar" : "Cadastrar"}
      </Button>
      <Button
        onClick={() => {
          props.setModoEdicao(false);
          props.setExibirTabela(true);
        }}
      >
        Voltar
      </Button>
    </Form>
  );
}
