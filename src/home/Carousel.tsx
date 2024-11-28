import { IconButton, Typography } from "@mui/material"
import { CarouselContainer, CarouselContent } from "../styles/CarouselStyle"
import { useState } from "react"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const bannerItems = [
  {
    title: "Discover new products",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat, magnam odit est exercitationem quidem, iusto consequuntur quas sunt et ea fuga!",
    img: "/image/grilShoppingBag.png",
  },
  {
    title: "Buy now, pay later",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat, magnam odit est exercitationem quidem, iusto consequuntur quas sunt et ea fuga!",
    img: "/image/boyGiftBox.png",
  }, 
]
function Carousel() {
  const [index, setIndex] = useState(0)

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0? bannerItems.length - 1 : prevIndex - 1
    )
  }
  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === bannerItems.length - 1? 0 : prevIndex + 1
    )
  }
  return (
    <CarouselContainer>
      <IconButton onClick={handlePrev}>
        <NavigateBeforeIcon />
      </IconButton>
      <CarouselContent>
        <Typography variant="h2">{bannerItems[index].title}</Typography>
        <Typography variant="h6">{bannerItems[index].desc}</Typography>
      </CarouselContent>
      <CarouselContent>
        <img src={bannerItems[index].img} alt="image" />
      </CarouselContent>
      <IconButton onClick={handleNext}>
        <NavigateNextIcon />
      </IconButton>
    </CarouselContainer>
  );
}

export default Carousel