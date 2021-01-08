import React from 'react';
import styled from 'styled-components';
import 'styles/fonts.css';

export interface ProjectProps {
    title: string;
    body: string;
    date: string;
    stack: string;
    link: string;

}
const StyledTitle = styled.a`
font-family: 'Rubik', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
display: inline;
color: #1E1A1D;

&:hover{
    color: #426B69;
    text-decoration: none !important;
  }
  &:focus{
    text-decoration: none !important;
  }
`;

const StyledBody = styled.div`
display: inline;
font-family: 'Rubik', sans-serif;
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 17px;
color: #1E1A1D;

`;

const StyledDate = styled.div`
margin-top: 8px;
margin-bottom: 8px;
font-family: 'Rubik', sans-serif !important;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;

color: #426B69;
`;

const StyledStack = styled.div`

font-family: 'Rubik', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;

color: #1E1A1D;

`;

const StyledContainer=styled.div`

`;

export const Project = ({ title, body, date, stack, link}: ProjectProps) => (
       <>
       <StyledContainer>
       <StyledTitle href={link} target="_blank">
            {title}
        </StyledTitle>
        <StyledBody>
            {body}
        </StyledBody>
        <StyledDate>
            {date}
        </StyledDate>
        <StyledStack>
            <span className = "text-highlight">
            {stack}
            </span>
        </StyledStack>
        </StyledContainer>
        </>

);
