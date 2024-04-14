import { Button, Table } from "react-bootstrap";

export default function TabelaCadInscricoes(props) {

  return (
    <div>
      <Button
        variant="secondary"
        onClick={() => {
          props.setExibirTabela(false);
        }}
      >
        Cadastrar nova Inscrição
      </Button>
      <Table className="mt-3" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Data de Nascimento</th>
            <th>CPF</th>
            <th>Endereço completo</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th>Vaga</th>
          </tr>
        </thead>
        <tbody>
          {props.listaInscricoes?.map((inscricao, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{inscricao.nome}</td>
                <td>{inscricao.dataNascimento}</td>
                <td>{inscricao.cpf}</td>
                <td>{inscricao.endereco}</td>
                <td>{inscricao.telefone}</td>              
                <td>{inscricao.email}</td>
                <td>{inscricao.vaga}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );

}