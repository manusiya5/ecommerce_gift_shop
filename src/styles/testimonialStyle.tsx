import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TestimonialContainer = styled(Box)(() => ({
  padding: "0px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "auto",
  color: "black",
  margin: "2rem 0 0 0",
  paddingTop: "3rem",
  boxSizing: "border-box",
  overflow: "hidden",
}));

export const TestimonialContentContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    padding: "1rem"
  }))
  
export const TestimonialContent = styled(Box)(() => ({
  height: "auto",
  padding: "2rem",
  boxSizing: "border-box",
  boxShadow: "0px -4px 8px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.2)",
  gap: "0.5rem"
}));

export const TestimonialTitleContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}))



export const TestimonialIcon = styled(Box)(() => ({
  width: "auto",
  height: "100%",
  padding:"1rem 0.5rem 1rem 0.5rem",
  backgroundColor: "#f16179",
}));