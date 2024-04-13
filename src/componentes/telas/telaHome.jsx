import Pagina from "../templates/pagina";
import { Button } from "react-bootstrap";

export default function TelaHome(props) {
  return (
    <Pagina>
      <h5 className="mt-5">
        Bem-vindo à nossa plataforma de oportunidades profissionais!
      </h5>
      <p className="mt-5">
        Na busca incessante pela excelência, estamos sempre em busca de talentos
        comprometidos e apaixonados pelo que fazem. Se você é movido pela
        inovação, determinação e deseja fazer parte de uma equipe dinâmica e
        inspiradora, está no lugar certo!
      </p>
      <p>
        Nossa empresa é mais do que um local de trabalho, é um ambiente que
        promove o crescimento pessoal e profissional de cada colaborador. Aqui,
        valorizamos a diversidade de pensamento, a colaboração e a busca
        contínua pela melhoria.
      </p>
      <p>
        Explore nossas vagas disponíveis e junte-se a nós nesta jornada rumo ao
        sucesso! Estamos ansiosos para conhecer você e seu potencial. Venha
        fazer parte da nossa equipe e fazer a diferença conosco.
      </p>
      <p>
        Prepare-se para uma carreira empolgante e cheia de oportunidades. O
        futuro começa agora!
      </p>
      <Button
      className="mt-3"
      href="/inscricao"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-ui-checks-grid"
          viewBox="0 0 16 16"
        >
          <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1m9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0z" />
        </svg>{" "}
        Cadastre-se
      </Button>
    </Pagina>
  );
}
