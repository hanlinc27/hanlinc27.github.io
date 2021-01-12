import React from 'react';
import styled from 'styled-components';
import 'styles/fonts.css';
import lightbulb from "assets/images/lightbulb.svg";

export interface ProjectProps {
    title: string;
    body: string;
    date: string;
    stack?: string;
    link?: string;
    navLink?: string;
    buttonText: string;

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

const StyledContainer = styled.div`

`;

const StyledLink = styled.button`
    margin-top: 28px;
    width: 210px;
    height: 36px;

    text-align: left;

    font-size: 16px;
    color: #333;
    background: rgba(254, 216, 146, 0.8);
    cursor: pointer;
    display: flex;
    flex-direction: row;

    &:hover{
        background: rgba(254, 216, 146, 1);
    }
    `;

const StyledSpan = styled.span`
    flex: 1 0 93%;
    vertical-align:middle;
    padding-left: 4px;
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    padding-top: 8px;
    color: #426B69;
    white-space: nowrap;


    @media only screen and (max-width: 600px) {
        font-size: 12px;
         }
`;

const StyledButtonContainer = styled.div`
    width:207px;
    height:28px; 
    padding-top: 5px;
    flex: 1 0 8%;
`;

const StyledNav = styled.a`
&:hover{
    text-decoration: none !important;
  }
  &:focus{
    text-decoration: none !important;
  }
`;
export const SpecialProject = ({ title, body, date, stack, link, buttonText, navLink }: ProjectProps) => (
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
                <span className="text-highlight">
                    {stack}
                </span>
            </StyledStack>

            <StyledNav href={navLink}>
                <StyledLink>
                    <StyledButtonContainer>
                        <img width="20" height="20" src={lightbulb}></img>
                    </StyledButtonContainer>
                    <StyledSpan>
                        {buttonText}
                    </StyledSpan>
                </StyledLink>
            </StyledNav>

        </StyledContainer>
    </>

);
