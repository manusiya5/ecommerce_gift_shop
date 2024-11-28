import { Divider, Typography } from "@mui/material"
import { FooterContainer } from "../styles/footerStyle"
import FooterContent from "./FooterContent"
import FooterIcons from "./FooterIcons"

function Footer() {
  return (
    <FooterContainer>
      <FooterIcons />
      <FooterContent />
      <Divider sx={{ backgroundColor: "white", width: "80%" }} />
      <Typography sx={{marginTop: "1rem"}}>© 2024 All Rights Reserverd </Typography>
    </FooterContainer>
  );
}

export default Footer