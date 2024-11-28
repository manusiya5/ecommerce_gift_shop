import { styled } from "@mui/material/styles"
import { Box, Container } from "@mui/material"
 
export const CarouselContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "auto",
  backgroundColor: "#fa9bab",
  borderBottomLeftRadius: "1rem",
  borderBottomRightRadius: "1rem",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem",
  boxSizing: "border-box",
  overflow: "hidden",
  color: "white",
}));


export const CarouselContent = styled(Container)(() =>({
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    width: "50%",
    marginLeft: "2rem",
    marginTop: "2rem",
    padding: "2rem"
}))