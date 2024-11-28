import { Typography } from "@mui/material";
import {
  WhyusContainer,
  WhyusContentContainer,
  WhyusContent,
  iconStyle
} from "../styles/WhyusStyle";
import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import GppGoodTwoToneIcon from "@mui/icons-material/GppGoodTwoTone";
import SentimentVerySatisfiedTwoToneIcon from "@mui/icons-material/SentimentVerySatisfiedTwoTone";

const reasons = [
  {
    title: "Fast Delivery",
    desc: "Variations of passages of Lorem Ipsum available",
    icon: <LocalShippingTwoToneIcon sx={iconStyle} />,
  },
  {
    title: "Free Shipping",
    desc: "Variations of passages of Lorem Ipsum available",
    icon: <SentimentVerySatisfiedTwoToneIcon sx={iconStyle} />,
  },
  {
    title: "Best Quality",
    desc: "Variations of passages of Lorem Ipsum available",
    icon: <GppGoodTwoToneIcon sx={iconStyle} />,
  },
];

function Whyus() {
  return (
    <WhyusContainer>
      <Typography variant="h3" fontWeight="bold">
        WHY SHOP WITH US
      </Typography>
      <WhyusContentContainer>
        {reasons.map((reason, index) => (
          <WhyusContent key={index}>
            {reason.icon}
            <Typography variant="h4" fontWeight="bold">{reason.title}</Typography>
            <Typography variant="subtitle1">{reason.desc}</Typography>
          </WhyusContent>
        ))}
      </WhyusContentContainer>
    </WhyusContainer>
  );
}

export default Whyus;
