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

function App() {
  return (
     <div>
       <Button>I'm Button</Button>
     </div>
  );
}

export default App;
