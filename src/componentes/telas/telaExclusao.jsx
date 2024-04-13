import Pagina from "../templates/pagina";
import FormExclusaoInscricoes from "../formularios/formExclusao";

export default function TelaExclusaoInscricoes(props) {
    return (
      <div>
        <Pagina>
            <FormExclusaoInscricoes />
        </Pagina>
      </div>
    );
}