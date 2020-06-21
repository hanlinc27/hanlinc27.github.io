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
Anything interesting? I'm open to talk! 😊👍
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
 
</div>
<br></br>
<br></br>
    </Intro>
   
  
  </>
);
