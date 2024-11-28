import { Button, TextField, Typography } from "@mui/material";
import {
  FooterContentContainer,
  IconText,
  InfoContainer,
} from "../styles/footerStyle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
function FooterContent() {
  return (
    <FooterContentContainer>
      <InfoContainer>
        <Typography variant="h5" fontWeight="bold">
          ABOUT US
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          recusandae reprehenderit minus ipsa tempora obcaecati eos id aliquam
          vel reiciendis veritatis. Nulla in omnis fuga, aperiam molestiae
          expedita ab labore.
        </Typography>
      </InfoContainer>
      <InfoContainer>
        <Typography variant="h5" fontWeight="bold">
          NEWS LETTER
        </Typography>
        <TextField
          label="Enter your email"
          type="email"
          InputProps={{ style: { color: "black", } }}
          sx={{ backgroundColor: "white", borderRadius: "0.2rem" }}
        ></TextField>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#f16179", width: "50%" }}
        >
          <Typography>Subscribe</Typography>
        </Button>
      </InfoContainer>
      <InfoContainer>
        <Typography variant="h5" fontWeight="bold">
          NEED HELP
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          recusandae reprehenderit minus ipsa tempora obcaecati eos id aliquam
          vel reiciendis veritatis. Nulla in omnis fuga, aperiam molestiae
          expedita ab labore.
        </Typography>
      </InfoContainer>
      <InfoContainer>
        <Typography variant="h5" fontWeight="bold">
          CONTACT US
        </Typography>
        <IconText>
          <LocationOnIcon />
          <Typography> Gb road123 London, UK </Typography>
        </IconText>
        <IconText>
          <CallIcon />
          <Typography>+0 123-456-7890</Typography>
        </IconText>
        <IconText>
          <EmailIcon />
          <Typography>ail@domain.com</Typography>
        </IconText>
      </InfoContainer>
    </FooterContentContainer>
  );
}

export default FooterContent;
