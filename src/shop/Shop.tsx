import { Button, Typography } from "@mui/material";
import {
  ShopContainer,
  Warpper,
} from "../styles/ShopStyles";
import CardProduct from "./CardProduct";
import Sidebar from "./Sidebar";
import { FilterProvider } from "./FilterContext";

interface Props{
  limit?: number;
  showActions?: boolean; 
}
function Shop({ limit, showActions }: Props) {
  showActions = showActions === false ? false : true;
  return (
    <ShopContainer>
      <FilterProvider>
        <Warpper>
          {showActions && <Sidebar />}
          <CardProduct limit={limit} showActions={showActions} />
        </Warpper>
      </FilterProvider>
      {!showActions && (
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: "#f16179" }}
        >
          <Typography variant="h6">View all products</Typography>
        </Button>
      )}
    </ShopContainer>
  );
}

export default Shop;