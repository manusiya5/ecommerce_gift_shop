import { createContext, ReactNode, useContext, useState } from "react";

interface FilterContextProps {
  selectedCategories: string[];
  selectedPrices: string[];
  selectedOccasions: string[];
  toggleCategory: (category: string) => void;
  togglePrice: (price: string) => void;
  toggleOccasion: (occasion: string) => void;
  parsePriceRange: (price: string) => [number, number];
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((item) => item !== category)
        : [...prevSelectedCategories, category]
    );
  };

  const togglePrice = (price: string) => {
    setSelectedPrices((prevSelectedPrices) =>
      prevSelectedPrices.includes(price)
        ? prevSelectedPrices.filter((item) => item !== price)
        : [...prevSelectedPrices, price]
    );
  };

  

  const toggleOccasion = (occasion: string) => {
    setSelectedOccasions((prevSelectedOccasions) =>
      prevSelectedOccasions.includes(occasion)
        ? prevSelectedOccasions.filter((item) => item !== occasion)
        : [...prevSelectedOccasions, occasion]
    );
  };

  const parsePriceRange = (priceRange: string): [number, number] => {
    const [min, max] = priceRange.split(" - ").map(Number);
    return [min, max];
  };

  return (
    <FilterContext.Provider
      value={{
        selectedCategories,
        toggleCategory,
        selectedPrices,
        togglePrice,
        selectedOccasions,
        toggleOccasion,
        parsePriceRange
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
