import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    padding: 30px;
    display: flex;
    background: #1D1C40;
    font-family: 'Montserrat', sans-serif;
  }

  #root {
    margin: auto;
    text-align: center;
  }
`
const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  outline: 2px solid rgba(0, 0, 0, 0);
  transition: outline .2s ease;
  background: #ccc;

  &:focus {
    outline: 2px solid #F29F05;
  }
`;

const Button = styled.input`
  min-width: 100px;
  padding: 10px;
  margin-right: 5px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background: ${props => props.light ? '#F4BA4E' : '#F29F05'};
`;

const List = styled.ul`
  width: 50vw;
  list-style: none;
  margin-top: 40px;
  box-shadow: 2px 2px rgba(0, 0, 0, .2);
  border-radius: 10px;
`;

const ListItem = styled.li`
  margin: 2px 0;
  border-radius: 5px;
  transition: background .2s ease;
  background: rgba(0, 0, 0, 0);

  &:nth-child(odd) {
    background: #8086FF30;
  }

  &:nth-child(even) {
    background: #999EFF50;
  }

  &:hover {
    background: #6C72D9;
  }
`;

const ListLink = styled.a`
  padding: 15px;
  display: block;
  color: #fff;
  text-decoration: none;
  text-align: left;
  border-radius: 5px;
`;

export { GlobalStyle, Input, Button, List, ListItem, ListLink }
