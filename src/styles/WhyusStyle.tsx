import { Box, styled } from "@mui/material";

export const WhyusContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "auto",
  color: "black",
  marginTop: "2rem ",
  paddingTop: "3rem",
  boxSizing: "border-box",
}));

export const WhyusContentContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    gap: "1rem",
    marginTop: "2rem",
    marginBottom: "4rem",
}))

export const WhyusContent = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    backgroundColor: "whitesmoke",
    padding: "3rem",
    textAlign: "center",
    gap: "0.5rem",
}))

export const iconStyle = {fontSize: "5rem", color: "darkblue"}