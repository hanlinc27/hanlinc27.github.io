import React from 'react';
import {Helmet} from "react-helmet";
import 'styles/fonts.css';
import { Container } from 'components/container/Container';
import { Intro } from 'components/intro/Intro';
import styled from 'styled-components';
// import { Highlight } from "components/intro/Highlight";

// tslint:disable-next-line: no-default-export
const StyledLink = styled.a`
cursor: pointer;
text-decoration: underline;
&:hover{
  color: #426B69;
  text-decoration: none !important;
}
&:focus{
  text-decoration: none !important;
}
`;

const StyledDiv = styled.div `
display: inline;
`;
export default () => (
  <>
    <Helmet title="Hanlin Cheng" />
    <Container>
    <Intro>
      
     <div className = "landing-heading animated animatedFadeInUp fadeInUp">  Hi there, I'm Hanlin. </div>
  
    <br></br>

    <div className = "landing-subtitle animated animatedFadeInUp fadeInUp"> I’m striving to create beautiful software experiences for everyday interactions.</div>
    <div className = "landing-body animated animatedFadeInUp fadeInUp"> 
    I’m a second year engineering student at the University of Waterloo. I’ve previously interned at <StyledDiv></StyledDiv>
    <StyledLink target="_blank" href="https://imaginecommunications.com/">Imagine Communications
</StyledLink>
   <StyledDiv>, </StyledDiv> 
   <StyledLink target="_blank" href="https://tanzu.vmware.com/tanzu">VMware</StyledLink>
   <StyledDiv>, and </StyledDiv> 
    <StyledLink target="_blank" href="https://sunnybrook.ca/research/content/?page=sri-groups-fus">Sunnybrook Research Institute</StyledLink>
    <StyledDiv>. Additionally, I volunteer with </StyledDiv> 
    <StyledLink target="_blank" href="https://uwblueprint.org/">UW Blueprint</StyledLink>
    <StyledDiv> and </StyledDiv>
    <StyledLink target="_blank" href="http://civictech.ca/">Civic Tech Toronto</StyledLink>  
    <StyledDiv> to build pro-bono software.  </StyledDiv>
   </div>
<br></br>
<br></br>
    </Intro>
    </Container>

  </>
);
