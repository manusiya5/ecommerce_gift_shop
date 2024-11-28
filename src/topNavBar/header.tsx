import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { Button , Typography , IconButton, Hidden} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom"
import styles from "./header.module.scss"
import PersonMenuHandler from "./PersonMenuHandler";
import WishlistHandler from "./WishlistHandler";
const pages = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Why Us", path: "/why-us" },
  { name: "Testimonial", path: "/testimonial" },
  { name: "Contact Us", path: "/contact-us" },
];
function Header() {
  return (
    <AppBar elevation={0}>
      <Toolbar className={styles.toolbar}>
        <Box className={styles.box}>
          <Hidden>
            {pages.map((page, index) => (
              <Button
                key={index}
                className={styles.button}
                component={Link}
                to={page.path}
              >
                <Typography variant="h6" color={"black"}>
                  {page.name}
                </Typography>
              </Button>
            ))}
          </Hidden>
          <PersonMenuHandler />
          <Button className={styles.button} component={Link} to="/login">
            <Typography variant="subtitle1" color="black">
              login
            </Typography>
          </Button>
          <WishlistHandler />
          <IconButton className={styles.iconButton}>
            <ShoppingCartIcon />
          </IconButton>
          <IconButton className={styles.iconButton}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header; 
