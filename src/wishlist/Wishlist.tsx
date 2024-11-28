import { Typography } from "@mui/material";
import { WishlistContainer } from "../styles/WishlistStyle";
import CardProduct from "../shop/CardProduct";
function Wishlist() {
  return (
    <WishlistContainer>
      <Typography variant="h3" fontWeight="bold">
        My Wishlist
      </Typography>
      <CardProduct showActions={true}/>
    </WishlistContainer>
  );
}

export default Wishlist;
