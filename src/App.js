import styled from 'styled-components';

// coomit use github desktop
const Button = styled.button`

  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: ${props => (props.primary ? 'black' : 'red')};
  border: ${props => (props.primary ? '2px solid black' : '2px solid pink')};
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    background-color: ${props => (props.primary ? 'black' : 'red')};
    color: #fff;
  }

`;

function App() {
  return (
     <div>
       <Button>I'm Button1</Button>
       <Button primary>I'm Button</Button>
     </div>
  );
}

export default App;
