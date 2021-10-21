import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SafeEnvironment from "../ui/components/feedback/SafeEnvironment";
import { PageTitle } from "../ui/components/data-display/PageTitle";
import { UserInformation } from "ui/components/data-display/UserInformation";
import { TextFieldMask } from "ui/components/inputs/TextFieldMask";
import { Button, Typography, Container, CircularProgress } from "@mui/material";
import useIndex from "../data/hooks/pages/useIndex";
import {
  FormElementContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "@styles/pages/index-style";

const Home: NextPage = () => {
  const {
    cep,
    setCep,
    cepValido,
    diaristasRestantes,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
  } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os Profissionais"}
        subtitle={
          "Preencha o seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <Container>
        <FormElementContainer>
          <TextFieldMask
            mask={"99.999-999"}
            label="Digite seu CEP"
            fullWidth
            variant={"outlined"}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
          {erro && <Typography color={"error"}>{erro}</Typography>}
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementContainer>

        {true && true ? (
          <ProfissionaisPaper>
            <ProfissionaisContainer>
                {diaristas.map((item, index) => { return (
                <UserInformation
                  key={index}
                  name = {item.nome_completo}
                  picture= {item.foto_usuario}
                  rating ={item.reputacao}
                  description={item.cidade} 
                 />
                );})}
            </ProfissionaisContainer>
            <Container>
              {diaristasRestantes > 0 ? (
                <Typography sx={{ mt: 5 }}>
                  ...e mais{" "}
                  {diaristasRestantes > 1
                    ? "profissionais atendem"
                    : "profissinal atende"}{" "}
                  ao seu endereço.
                </Typography>
              ) : (
                ""
              )}

              <Button variant={"contained"} color={"secondary"} sx={{ mt: 5 }}>
                Contratar um profissional
              </Button>
            </Container>
          </ProfissionaisPaper>
        ) : (
          <Typography align={"center"} color={"text-primary"}>
            {" "}
            Ainda não temos nenhuma diarista disponível na sua região{" "}
          </Typography>
        )}
      </Container>
    </div>
  );
};

export default Home;
