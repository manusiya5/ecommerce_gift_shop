import { IconButton, Menu } from "@mui/material";
import Face4Icon from "@mui/icons-material/Face4";
import styles from "./header.module.scss";
import { useState } from "react";
import PersonMenu from "../person/personMenu";


function PersonMenuHandler() {
    const [anchorEl , setAnchorEl] = useState<null | HTMLElement>(null)

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
    };
    const isMenuOpen = Boolean(anchorEl);
  return (
    <>
      <IconButton className={styles.iconButton} onClick={handleMenuOpen}>
        <Face4Icon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <PersonMenu />
      </Menu>
    </>
  );
}

export default PersonMenuHandler