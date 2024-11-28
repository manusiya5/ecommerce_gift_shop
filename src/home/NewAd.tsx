import {  Typography } from "@mui/material";
import { AdContainer, AdContent, ButtonCustom, ButtonWarpper } from "../styles/Ad";
import { Ad } from "./allAd.tsx";
interface Props{
  ad: Ad;
}
function NewAd({ad} : Props) {
  return (
    <AdContainer sx={{ bgcolor: ad.bgColor, margin: "2rem" }}>
      <AdContent>
        <img src={ad.imgSrc} alt={ad.imgAlt} />
      </AdContent>
      <AdContent>
        <Typography variant="h3" fontWeight="bold">
          {ad.title}
        </Typography>
        <Typography variant="subtitle1">{ad.desc}</Typography>
        <ButtonWarpper>
          <ButtonCustom
            variant="contained"
            hoverColor={ad.seeButtonColor}
            bgColor={ad.buyButtonColor}
            size="large"
          >
            <Typography>Buy Now</Typography>
          </ButtonCustom>
          <ButtonCustom
            size="large"
            hoverColor={ad.buyButtonColor}
            bgColor={ad.seeButtonColor}
            variant="contained"
          >
            <Typography>See More</Typography>
          </ButtonCustom>
        </ButtonWarpper>
      </AdContent>
    </AdContainer>
  );
}

export default NewAd;
