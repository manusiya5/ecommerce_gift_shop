import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "auto",
  color: "white",
  border: "1px solid black",
  backgroundColor: "#303030",
  paddingTop: "1.5rem",
  paddingBottom: "1rem",
  marginTop: "1rem",
  boxSizing: "border-box",
  overflow: "hidden",
}));


export const FooterIconsContainer = styled(Box)(() => ({
  display: "flex",
  width: "auto",
  gap: "1rem",
  justifyContent: "center",
  fontSize: "5rem",
}));

export const FooterContentContainer = styled(Box)(() => ({
    display: "flex",
    padding: "3rem"
}))

export const InfoContainer = styled(Box)(() => ({
    width: "30%",
    margin: "1rem",    
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
}))

export const IconText = styled(Box)(() => ({
    display: "flex",
    justifyContent: "flex-start",
    gap: "0.5rem"
}))