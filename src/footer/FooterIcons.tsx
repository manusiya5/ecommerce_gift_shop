import { FooterIconsContainer } from "../styles/footerStyle"
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const iconSize = {fontSize: 40}
function FooterIcons() {
  return (
    <FooterIconsContainer>
      <FacebookIcon sx={iconSize} />
      <TwitterIcon sx={iconSize} />
      <InstagramIcon sx={iconSize} />
      <YouTubeIcon sx={iconSize} />
    </FooterIconsContainer>
  );
}

export default FooterIcons