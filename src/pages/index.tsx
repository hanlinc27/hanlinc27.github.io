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
&:hover{
  color: #426B69;
  text-decoration: none !important;
}
&:focus{
  text-decoration: none !important;
}
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
    I’m a second year engineering student at the University of Waterloo. I’ve previously interned at 
    <StyledLink> Imagine Communications</StyledLink>
   
   <div>, </div> 
   <StyledLink>VMware</StyledLink>
   <div>, and</div> 
    <StyledLink>Sunnybrook Research Institute</StyledLink>
    <div>. Additionally, I volunteer with </div> 
    <StyledLink>UW Blueprint</StyledLink>
    <div> and </div>
    <StyledLink>Civic Tech Toronto</StyledLink>  
    <div>to build pro-bono software.  </div>
<StyledLink target="_blank" href="https://imaginecommunications.com/"> Imagine Communications
</StyledLink>
<br></br>

<br></br>

I’m currently seeking Summer 2021 software development internships! 
</div>
  <br></br>


     {/* <div className="row">
  <div className="column">
    <img src="https://user-images.githubusercontent.com/19617248/82160408-2a795380-9863-11ea-871c-d9851f993394.png" alt="Axolotl"/>
  </div>
 
</div> */}
<br></br>
<br></br>
    </Intro>
    </Container>

  </>
);
