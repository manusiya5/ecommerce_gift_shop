import { Box, Button, styled } from "@mui/material";


export const AdContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '96%',
    marginLeft: '20rem',
    borderRadius: '0.5rem',
    color: 'white'
}))


export const AdContent = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '40%',
    gap: '0.5rem'
}))

export const ButtonWarpper = styled(Box)(() => ({
       display: 'flex',
       gap: '0.5rem',
       marginTop: "2rem"
}))

export const ButtonCustom = styled(Button)<{ hoverColor: string, bgColor: string }>(
  
  ({ hoverColor, bgColor }) => ({
    backgroundColor: bgColor,
    borderRadius: '0rem',
    width: '35%',
    height: '3rem',
    fontSize: '1rem',
    color: bgColor === "white" ? "black" : "white",

    '&:hover': {
      backgroundColor: hoverColor === "white" ? 'rgba(255,255,255,0.1)' : hoverColor,
      color: hoverColor === "white"? 'black' : 'white',
    },
  })
);

