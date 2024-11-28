import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./header.module.scss";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
function WishlistHandler() {
    const navigate = useNavigate();

    const handleWishlistClick = () => {
        navigate("/wishlist");
    };
    
  return (
    <IconButton className={`${styles.iconButton} ${styles.favIcon}`} onClick={handleWishlistClick}>
      <FavoriteIcon />
    </IconButton>
  );
}

export default WishlistHandler;
