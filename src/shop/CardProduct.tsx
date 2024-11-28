import { useState } from "react";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { products, Product } from "./Data";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useFilter } from "./FilterContext";
import ProductControlPanel from "./ProductControlPanel";
import { Item, ItemDetails, MainContent } from "../styles/ShopStyles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface CardProps {
  limit?: number;
  showActions?: boolean;
  
}

function CardProduct({ limit, showActions }: CardProps) {
  const {
    selectedCategories,
    selectedPrices,
    selectedOccasions,
    parsePriceRange,
  } = useFilter();

  const [sortOption, setSortOption] = useState("");

  const filteredProducts = products.filter(
    (product: Product) =>
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)) &&
      (selectedOccasions.length === 0 ||
        selectedOccasions.includes(product.occasion)) &&
      (selectedPrices.length === 0 ||
        selectedPrices.some((price) => {
          const [min, max] = parsePriceRange(price);
          return product.price >= min && product.price <= max;
        }))
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortOption) {
      case "priceAsc":
        return a.price - b.price;
      case "priceDesc":
        return b.price - a.price;
      case "nameAsc":
        return a.name.localeCompare(b.name);
      case "nameDesc":
        return b.name.localeCompare(a.name);
      default:
        return 0; 
    }
  });

  const displayProducts = limit
    ? sortedProducts.slice(0, limit)
    : sortedProducts;

  return (
    <>
      <MainContent>
        {showActions && (
          <ProductControlPanel
            numOfProducts={displayProducts.length}
            setSortOption={setSortOption}
          />
        )}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {displayProducts.map((product: Product, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>
                <img height={150} src={product.imgSrc} alt={product.name} />
                <ItemDetails>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="h5">{product.name}</Typography>
                    <IconButton sx={{ top: "-1rem" }}>
                      <FavoriteBorderIcon />
                    </IconButton>
                  </Box>
                  <Typography variant="h6" color="error">
                    ₹ {product.price}
                  </Typography>
                  {showActions && (
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <IconButton
                        sx={{
                          backgroundColor: "#154c79",
                          color: "white",
                          borderRadius: "3px",
                        }}
                      >
                        <ShoppingCartCheckoutIcon />
                      </IconButton>
                      <Button
                        variant="outlined"
                        sx={{ borderColor: "#154c79", color: "#154c79" }}
                      >
                        Buy Now
                      </Button>
                    </Box>
                  )}
                </ItemDetails>
              </Item>
            </Grid>
          ))}
        </Grid>
      </MainContent>
    </>
  );
}

export default CardProduct;
