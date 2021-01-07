import React from 'react';
import {Helmet} from "react-helmet";
import 'styles/fonts.css';
import { Container } from 'components/container/Container';
import { Intro } from 'components/intro/Intro';
// import { Highlight } from "components/intro/Highlight";

// tslint:disable-next-line: no-default-export
export default () => (
  <>
    <Helmet title="Hanlin Cheng" />
    <Container>
    <Intro>
      
     <div className = "landing-heading">  Hi there, I'm Hanlin. </div>
  
    <br></br>
    <div className = "landing-subtitle"> I’m striving to create beautiful software experiences for everyday interactions.</div>
    <div className = "landing-body">
    I’m a second year engineering student at the University of Waterloo. I’ve previously interned at Imagine Communications, VMware, and Sunnybrook Research Institute. I also do volunteer with UW Blueprint and Civic Tech Toronto to build pro-bono software. 
<br></br>
I’m currently seeking Summer 2021 software development internships! 
</div>
  <br></br>



     {/* <div className="row">
  <div className="column">
    <img src="https://user-images.githubusercontent.com/19617248/82160408-2a795380-9863-11ea-871c-d9851f993394.png" alt="Axolotl"/>
  </div>
  <div className="column">
    <img src="https://user-images.githubusercontent.com/19617248/82160410-2baa8080-9863-11ea-9d1b-8cb899ff133d.png" alt="Elephant"/>
  </div>
  <div className= "column">
    <img src="https://user-images.githubusercontent.com/19617248/82160411-2cdbad80-9863-11ea-855f-454d2d5a7351.png" alt="Matcha"/>
  </div>

   <div className="column">
    <img src="https://user-images.githubusercontent.com/19617248/82160413-2e0cda80-9863-11ea-9fab-4e60e2b86c6f.png" alt="Dumpling"/>
  </div> 
  
  <div className = "column">
    <img src = "https://user-images.githubusercontent.com/19617248/82160415-2f3e0780-9863-11ea-844d-662e59d85d42.png" alt = "Coffee"/>
  </div>
 
</div> */}
<br></br>
<br></br>
    </Intro>
    </Container>
  
  </>
);
