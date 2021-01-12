import React from 'react';
import styled from 'styled-components';
import { Container } from 'components/container/Container';
import 'styles/fonts.css';
import CopyMailTo from "react-copy-mailto";

const StyledContainer = styled(Container)`

`;

const StyledContent = styled.a`
    display: inline;
    margin-left: 28px;
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;    
    color: #1E1A1D;
    padding-bottom: 48px;

    cursor: pointer;
    &:hover{
      color: #426B69;
      text-decoration: underline;
    }
    &:focus{
      text-decoration: underline;
    }

    @media only screen and (max-width: 600px) {
     font-size: 9px;
      }
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
      <CopyMailTo email="h62cheng@uwaterloo.ca" defaultTooltip="Copy to clipboard" copiedTooltip="Copied!">
      <StyledContent >My Email</StyledContent>
      </CopyMailTo>
      <StyledContent href="https://github.com/hanlinc27" target="_blank" >Github</StyledContent>
      <StyledContent href="https://www.linkedin.com/in/hanlincheng/" target="_blank">
        Linkedin
      </StyledContent>
      <StyledContent href="https://www.goodreads.com/user/show/21228715-hanlin-cheng" target="_blank">
        Goodreads
      </StyledContent>
    </StyledContainer>
);
