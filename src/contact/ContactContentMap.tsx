import { ContactContentMapContainer } from "../styles/ContactStyle";

function ContactContentMap() {
  return (
    <ContactContentMapContainer>
      <iframe
        src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=place_id:ChIJN1t_tSIqK4kR-J6s-L79Zf0"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </ContactContentMapContainer>
  );
}

export default ContactContentMap;
