import { Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ShopContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "black",
  margin: "2rem 0 0 0",
  paddingTop: "3rem",
  boxSizing: "border-box",
  overflow: "hidden",
}));

export const Warpper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-start",
  width: "100%",
}))
export const MainContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: "2rem"
}));

export const Item = styled(Paper)(() => ({
  backgroundColor: "#f4f4f4",
  padding: "1rem",
  display: "flex"
}));

export const ItemDetails = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%"
}))


export const SideBarContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  marginRight: "2rem",
  padding: "2rem",
  width: "17%",
  backgroundColor: "#f4f4f4",
}));

export const FilterMenuContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}))

export const ProductControlPanelContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem",
  backgroundColor: "whitesmoke",
  marginBottom: "1rem"
}))