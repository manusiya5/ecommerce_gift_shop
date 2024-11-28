import { Box, styled } from "@mui/material";

export const LoginPageContainer = styled(Box)(() => ({
  marginTop: "2rem",
  padding: "3rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
}));

export const LoginContentContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  padding: "2rem",
  gap: "1rem",
  width: "50%",
  boxSizing: "border-box",
  boxShadow: "0px -4px 8px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.2)",
  backgroundImage: "url(/image/LoginBg.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "#ba4257",
}));

export const FormContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  paddingTop: "1rem",
}));
