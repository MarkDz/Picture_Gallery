export const setColor = {
  primaryColor: '#af9a7d',
  mainWhite: '#fff',
  mainBlack: '#222',
  mainGray: '#ececec',
  lightGray: 'f7f7f7'
}

export const setFonts = {
  main: "font-family: 'Lato', sans-serif;",
  slanted: "font-family: 'Courgette', cursive"
}

export const setFlex = ({x = 'center', y = 'center'}) => {
  return `display: flex; align-items: ${y}; justify-content: ${x}`
}

export const setBackground = ({img, color = '0,0,0,0'} = {}) => {
  return ` min-height: 100vh;
    background: url(${img}) center/cover no-repeat;
    background-size: 120%;`
}
