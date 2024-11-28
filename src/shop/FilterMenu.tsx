import {
  FormControlLabel,
  FormGroup,
  Checkbox,
  Typography,
} from "@mui/material";
import { FilterMenuContainer } from "../styles/ShopStyles";
import { filters } from "./Data";
import { useFilter } from "./FilterContext";

function FilterMenu() {
  const {
    selectedCategories,
    selectedPrices,
    selectedOccasions,
    toggleCategory,
    togglePrice,
    toggleOccasion,
  } = useFilter();

  return (
    <FilterMenuContainer>
      {filters.map((filter) => (
        <FormGroup key={filter.title}>
          <Typography variant="h6">{filter.title}</Typography>
          {filter.items.map((item) => {
            const isChecked =
              (filter.title === "Category" &&
                selectedCategories.includes(item)) ||
              (filter.title === "Price Range" &&
                selectedPrices.includes(item)) ||
              (filter.title === "Occasions" &&
                selectedOccasions.includes(item));

            const toggleFunction =
              filter.title === "Category"
                ? () => toggleCategory(item)
                : filter.title === "Price Range"
                ? () => togglePrice(item)
                : filter.title === "Occasions"
                ? () => toggleOccasion(item)
                : () => {};

            return (
              <FormControlLabel
                key={item}
                control={
                  <Checkbox checked={isChecked} onChange={toggleFunction} />
                }
                label={item}
              />
            );
          })}
        </FormGroup>
      ))}
    </FilterMenuContainer>
  );
}

export default FilterMenu;
