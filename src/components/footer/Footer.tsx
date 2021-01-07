import React from 'react';
import styled from 'styled-components';
import { Container } from 'components/container/Container';
import 'styles/fonts.css';

const StyledContainer = styled(Container)`

`;

const StyledContent = styled.div`
    display: inline;
    margin-left: 28px;
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;    
    color: #1E1A1D;
    padding-bottom: 48px;
`;

const StyledDiv = styled.div`
  margin-left: 28px;
  border-top: 1px solid #1E1A1D;
  margin-bottom: 16px;
`;


export const Footer = () => (
    <StyledContainer>
      <StyledDiv>
      </StyledDiv>
      <StyledContent>Email</StyledContent>
      <StyledContent>Github</StyledContent>
      <StyledContent>
        Linkedin
      </StyledContent>
      <StyledContent>
        Goodreads
      </StyledContent>
    </StyledContainer>
);
