import { Typography } from "@mui/material"
import { SideBarContainer } from "../styles/ShopStyles"
import FilterMenu from "./FilterMenu"

function Sidebar() {
  return (
    <SideBarContainer>
       <Typography variant="h5">
         Filter By
       </Typography>
       <FilterMenu />
    </SideBarContainer>
  )
}

export default Sidebar