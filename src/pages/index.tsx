import React from 'react';
import {Helmet} from "react-helmet";
import 'styles/fonts.css';
import { Intro } from 'components/intro/Intro';
import { Highlight } from "components/intro/Highlight";

// tslint:disable-next-line: no-default-export
export default () => (
  <>
    <Helmet title="Hanlin Cheng" />
    <Intro>
      
     <div className = "landing-heading">  Hi, I'm Hanlin. :)) </div>
    I'm a <Highlight>Systems Design</Highlight>&nbsp;
    Engineering student at the University of Waterloo. 
    <br></br>
    I’ve previously interned at <Highlight>VMware</Highlight>&nbsp; 
    and <Highlight>Sunnybrook</Highlight>&nbsp;Research Institute. <br></br>
    I care about engineering for social good and volunteer a lot with Toronto’s <Highlight>Civic Tech</Highlight>&nbsp; community.
  <br></br>
     Currently looking for Fall 2020 Internship opportunities in <Highlight>software development! </Highlight> <br></br>
 <br></br>
   <a href= "https://hanlincheng.me/static/hanlincheng.pdf" target = "_blank">resumé            .            </a>
    <a href="mailto:h62cheng@uwaterloo.ca"  target="_blank">email            .            </a>
    <a href="https://www.linkedin.com/in/hanlincheng"target="_blank">linkedin            .            </a>
     <a href="https://github.com/hanlinc27" target="_blank">github            .            </a>
     <a href="https://twitter.com/hanlin_cheng"target="_blank">twitter       </a>

 <br></br>
 <br></br>
     <div className = "landing-body">It's the little things that count...</div>





     <div className="row">
  <div className="column">
    <img src="https://user-images.githubusercontent.com/19617248/81246999-ea0a1200-8fe6-11ea-82e2-c82dcf9ec1f8.png" alt="Snow"/>
  </div>
  <div className="column">
    <img src="https://user-images.githubusercontent.com/19617248/81247120-32c1cb00-8fe7-11ea-89a6-c7bb632a5df2.png" alt="Forest"/>
  </div>
  <div className= "column">
    <img src="https://user-images.githubusercontent.com/19617248/81247122-33f2f800-8fe7-11ea-93f1-c1bfca4e6b2b.png" alt="Mountains"/>
  </div>

   <div className="column">
    <img src="https://user-images.githubusercontent.com/19617248/81247126-35242500-8fe7-11ea-9739-e6932bbe53fd.png" alt="Mountains1"/>
  </div> 
  
  <div className = "column">
    <img src = "https://user-images.githubusercontent.com/19617248/81248008-6e5d9480-8fe9-11ea-990c-7a4b4b252be2.png" alt = "Anteater"/>
  </div>
 
</div>
<br></br>
<br></br>
    </Intro>
   
  
  </>
);
