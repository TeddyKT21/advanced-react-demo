import { createTheme } from "@mui/material";


export const lightTheme = createTheme({
    palette:{
        background:{
            default:'#fafafa',
            paper:'#fefefe'
        },
        primary:{
            main:
            '#00ff00'
        },
        secondary:{
            main:'#aaaaaa'
        },
        error:{
            main:'#FF0000'
        }
    },
    spacing:3,
})

export const darkTheme = createTheme({
    palette:{
        background:{
            default:'#999999',
            paper:'#999999'
        },
        primary:{
            main:
            '#009900',
        },
        secondary:{
            main:'#555555'
        },
        error:{
            main:'#770000'
        }
    },
    spacing:4,
})