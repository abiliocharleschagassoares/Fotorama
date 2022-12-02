import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 60vw;
    margin: 30px auto;
    border: 1px solid blue;
    border-radius: 30px;
    background-color: #284387;
`;

export const Image = styled.img`
  width: inherit;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;

export const DescriptionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px 40px;
`;

export const Text = styled.span`
    font-size: 1.2em;
    font-family: 'bold';
    margin-bottom: 10px;
    color: white;
`;

export const BackButton = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  padding: 10px 30px;
  color: white;
  background-color: #2d55ff;
  text-decoration: none;
  font-family: 'bold';
  border-radius: 3px;
  position: fixed;
`