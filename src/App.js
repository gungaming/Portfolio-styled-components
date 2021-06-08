import './App.css';
import styled from 'styled-components';

const Button = styled.button`

  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: #000;
  border: 2px solid #000
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    background-color: #000;
    color: #fff;
  }

`;

const Navbar = styled.div`
  height: 60px;
  border-bottom: 2px solid #333;
  padding: 2em;
  display: flex;
  justify-content: space-between;
`;

const LogoNav = styled.div`
  background: blue;
  padding: .5em 2em;
  border: 2px solid #000;
  width: 150px;
`;

const NavMenu = styled.div`
  padding: .5em;
  border-bottom: 2px solid #eee;
`;

const UL = styled.div`
  display: flex;
  list-style: none;
`;

const Ulli = styled.div`
  margin-right: 1em;
`;

function App() {
  return (
     <div>
       <Navbar>
         <LogoNav>MySite</LogoNav>
         <NavMenu>
           <UL>
             <Ulli><a href="#">Home</a></Ulli>
             <Ulli><a href="#">About</a></Ulli>
             <Ulli><a href="#">Contact</a></Ulli>
           </UL>
         </NavMenu>
       </Navbar>
       <Button>I'm Button</Button>
     </div>
  );
}

export default App;
