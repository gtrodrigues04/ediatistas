import { Typography, Box } from "@mui/material";
import React from "react";
import { FooterStyled, FooterContainer, FooterTitle, AppList} from "./Footer-style";

export const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: '400px'}}>
          <FooterTitle>Quem Somos</FooterTitle>
          <Typography variant={'body2'} sx={{ mt: 2}}>
                O e-diaristas te ajuda a encontrar um profissional perfeito
              para realizar a limpeza da sua casa. Garantimos os melhores profissionais 
              com total segurança e praticidade! São milhares de clientes
              satisfeitos por todo o país.
          </Typography>
        </Box>
      </FooterContainer>
      <Box>
      <FooterTitle>Baixe nossos aplicativos</FooterTitle>
      <AppList>
          <li>
              <a
                href={'/'}
                target={'_blank'}
                rel={"noopener noferrer noreferrer"}
              >
                  {/*eslint-disable-next-line @next/next/no-img-element */}
                  <img src={'/img/logos/app-store.png'} alt={'App Store'}/>
              </a>
          </li>
          <li>
              <a
                href={'/'}
                target={'_blank'}
                rel={"noopener noferrer noreferrer"}
              >
                  {/*eslint-disable-next-line @next/next/no-img-element */}
                  <img src={'/img/logos/google-play.png'} alt={'App Store'}/>
              </a>
          </li>
      </AppList>
      </Box>
    </FooterStyled>
  );
};
