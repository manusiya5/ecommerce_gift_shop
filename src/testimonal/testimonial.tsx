import { Typography } from "@mui/material"
import {
  TestimonialContainer,
  TestimonialContent,
  TestimonialContentContainer,
  TestimonialIcon,
  TestimonialTitleContainer,
} from "../styles/testimonialStyle";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { useEffect, useState } from "react";

const testimonials = [
  {
    authorName: "Rochak",
    desc: "Various editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy, editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various",
  },
  {
    authorName: "Bord Johns",
    desc: "Various editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy, editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various",
  },
  {
    authorName: "Morijorch",
    desc: "editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various",
  },
];
function Testimonial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); 

    return () => clearInterval(interval); 
  }, []);

  const handlePrevClick = () => {
    setIndex((prevIndex) => (prevIndex === 0? testimonials.length - 1 : prevIndex - 1));
  };
  const handleNextClick = () => {
    setIndex((prevIndex) => (prevIndex === testimonials.length - 1? 0 : prevIndex + 1));
  };
  return (
    <TestimonialContainer>
      <Typography variant="h3" fontWeight="bold">
        Testimonial
      </Typography>
      <TestimonialContentContainer>
        <TestimonialIcon onClick={handlePrevClick}>
          <KeyboardArrowLeftIcon />
        </TestimonialIcon>
        <TestimonialContent>
          <TestimonialTitleContainer>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: "#f16179" }}
            >
              {testimonials[index].authorName}
            </Typography>
            <FormatQuoteIcon sx={{ fontSize: "3rem" }} />
          </TestimonialTitleContainer>
          <Typography variant="subtitle1" sx={{ color: "grey" }}>
            Default model text
          </Typography>
          <Typography variant="subtitle1">
            {testimonials[index].desc}
          </Typography>
        </TestimonialContent>
        <TestimonialIcon onClick={handleNextClick}>
          <KeyboardArrowRightIcon />
        </TestimonialIcon>
      </TestimonialContentContainer>
    </TestimonialContainer>
  );
}

export default Testimonial