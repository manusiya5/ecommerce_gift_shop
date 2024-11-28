import { Typography } from "@mui/material";
import {
  ContactContainer,
  ContactContentContainer,
} from "../styles/ContactStyle";
import ContactContentMap from "./ContactContentMap.tsx";
import ContactForm from "./ContactForm.tsx";
function Contact() {
  return (
    <ContactContainer>
      <Typography variant="h3" fontWeight="bold">
        Contact us
      </Typography>
      <ContactContentContainer>
        <ContactContentMap />
        <ContactForm />
      </ContactContentContainer>
    </ContactContainer>
  );
}

export default Contact;
