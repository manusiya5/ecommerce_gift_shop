import { Box, styled } from "@mui/material";

export const ContactContainer = styled(Box)(() => ({
  padding: "0px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "auto",
  margin: "2rem 0 0 0",
  paddingTop: "3rem",
  boxSizing: "border-box",
  overflow: "hidden",
}));


export const ContactContentContainer = styled(Box)(() => ({
  display: "flex",
  boxSizing: "border-box",
  justifyContent: "space-evenly",
  width: "90%",
  margin: "1rem",
  boxShadow: "0px -4px 8px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.2)",
}));

export const ContactContentMapContainer = styled(Box)(() => ({
  width: "60%",
}));

export const ContactContentFormContainer = styled(Box)(() => ({
  padding: "2rem",
  width: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
}));