import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import { ProductControlPanelContainer } from "../styles/ShopStyles";

interface Props {
  numOfProducts: number;
  setSortOption: (option: string) => void;
}

function ProductControlPanel({ numOfProducts, setSortOption }: Props) {
  const handleSortChange = (event: SelectChangeEvent) => {
    setSortOption(event.target.value as string);
  };

  return (
    <ProductControlPanelContainer>
      <Typography variant="h6">Showing {numOfProducts} products.</Typography>
      <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
        <InputLabel id="sort-by-label">Sort by</InputLabel>
        <Select
          labelId="sort-by-label"
          label="Sort by"
          onChange={handleSortChange}
        >
          <MenuItem value="">
            <em>Relevance</em>
          </MenuItem>
          <MenuItem value="priceAsc">Price: Low to High</MenuItem>
          <MenuItem value="priceDesc">Price: High to Low</MenuItem>
          <MenuItem value="nameAsc">Name: A to Z</MenuItem>
          <MenuItem value="nameDesc">Name: Z to A</MenuItem>
        </Select>
      </FormControl>
    </ProductControlPanelContainer>
  );
}

export default ProductControlPanel;
