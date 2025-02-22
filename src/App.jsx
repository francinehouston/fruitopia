import { useState } from 'react'
import { Route, Routes } from "react-router"
import './App.css'
import styled from 'styled-components'
import NavBar from './components/NavBar/NavBar.jsx'
import Fruits from './components/Fruits/Fruits.jsx'
import Footer from './components/Footer/Footer.jsx'
import About from "./components/About/About"
import Contact from "./components/Contact/Contact.jsx"
import FruitSearch from "./components/Fruits/FruitSearch/FruitSearch.jsx";
// import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

// Theme Object
// const theme = {
//   colors: {
//     primary: '#ff6384', // Strawberry Red
//     secondary: '#77dd77',// Leaf Green
//     background: '#fff5f5', // Cream White
//     hover: '#ffc2d1',// Soft Pink
//     text: '#663300',// Chocolate Brown
//     warning: '#ffa726', // Orange
//     success: '#66bb6a', // Green
//     error: '#ef5350', // Red
//   },
//   borderRadius: '12px',
//   maxWidth: '800px',
//   shadow: '0 4px 8px rgba(0,0,0,0.1)',
// };

// // Global Styles
// const GlobalStyle = createGlobalStyle`
// body {
// background-color: ${({ theme }) => theme.colors.background};
// color: ${({ theme }) => theme.colors.text};
// font-family: Arial, sans-serif;
// margin:0;
// padding:0;
// }

// h1,h2 {
// color:${({ theme }) => theme.colors.primary}
// text-align:center;
// }
// `;

// // Styled Compontents
// const Container = styled.div`
// max-width: ${({theme}) => theme.maxWidth};
// margin: 0 auto;
// padding: 20px;
// `;

// const NavBar = styled.nav`
//      background-color: ${({ theme }) => theme.colors.primary};
//      padding: 15px;
//      display: flex;
//      justify-content: space-around;
//      color: ${({ theme }) => theme.colors.background};
//      a {
//         color: ${({ theme }) => theme.colors.background};
//         text-decoration: none;
//         font-weight: bold;

//         &:hover {
//             color: ${({ theme }) => theme.colors.hover};
//         }
//      };
// `;

// const Card = styled.div`
// background-color:#fff;
// padding: 20px;
// border-radius: ${({ theme }) => theme.borderRadius};
// box-shadow: ${({ theme }) => theme.shadow};
// margin: 20px auto;
// max-width: 400px;
// text-align: center;
// `;

// const Input = styled.input`
// padding: 10px;
// border: 2px solid ${({ theme }) => theme.colors.primary};
// border-radius: ${({ theme }) => theme.borderRadius};
// width: 100%;
// max-width: 300px;
// margin: 10px auto;

// &::placeholder {
// color: ${({ theme }) => theme.colors.hover};
// }
// `;

// // const Footer = styled.footer`
// // background-color: ${({theme}) => theme.colors.primary};
// // color: #fff;
// // padding: 10px;
// // text-align:center;
// // margin-top: 40px;
// // border-radius: ${({theme}) => theme.borderRadius};
// // `;

// const Badge = styled.span`
// display: inline-block;
// padding: 6px 12px;
// margin: 5px;
// border-radius: ${({theme}) => theme.borderRadius};
// background-color: ${({status, theme}) => 
//   status === 'success' 
// ? theme.colors.success 
// : status === 'warning' ?
// theme.colors.warning 
// : theme.colors.error
// };
// color: #fff;
// font-weight: bold;
// `;

// const ResponsiveBox = styled.div`
//   background-color: ${({ theme }) => theme.colors.secondary};
//   color: #fff;
//   padding: 20px;
//   border-radius: ${({ theme }) => theme.borderRadius};
//   margin-top: 20px;
//   text-align: center; 

//   @media(max-width: 600px) { 
//         background-color: ${({ theme }) => theme.colors.primary};
// //   }
// // `

// const Button = styled.button`
//   background-color: ${({ primary, theme }) =>
//     primary ? theme.colors.primary : theme.colors.secondary};
//   color: #fff;
//   padding: 10px 20px;
//   border: none;
//   border-radius: ${({ theme }) => theme.borderRadius};
//   cursor: pointer;
//   margin: 10px;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: ${({ theme }) => theme.colors.hover};
//   }
// `;


function App() {
const [inputValue, setInputValue]= useState('');

  return (
    <>
      <NavBar />
  <Routes>
    <Route path="/" element={<Fruits />} />
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/search"element={<FruitSearch/>}/>
  </Routes>
      <Footer />

    </>
//   <ThemeProvider theme={theme}>
//     <GlobalStyle />
//     <NavBar>
//       <a href="#home">Home</a>
//       <a href="#features">Features</a>
//       <a href="#contact">Contact</a>
//     </NavBar>
  

//   <Container>
//     <h1>🍓styled-components Showcase</h1>
//     <Card>
// <Input 
// placeholder= 'Type Something ...'
// value ={inputValue}
// onChange={(e) => setInputValue(e.target.value)}
// />

// <p>{inputValue ? `You typed: ${inputValue}` : 'Start typing above ...'}</p>
//     </Card>

//     <Card>
//     <h2>Status Badges</h2>
//     <Badge status="success">Success</Badge>
//     <Badge status="warning">Warning</Badge>
//     <Badge status="error">Error</Badge>
//     </Card>

//     <ResponsiveBox>
//       Resize the window to change this box's background color!
//     </ResponsiveBox>
//     <Card>
//     <h2>Buttons with Props</h2>
//     <Button primary> Primary Button</Button>
//     <Button>Secondary Button</Button>
//     </Card>
//   </Container>
//   <Footer>2025 StyledComponents Demo</Footer>
//   </ThemeProvider>
  )
}

export default App;
