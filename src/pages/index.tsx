import React from 'react';
import {Helmet} from "react-helmet";

import { Intro } from 'components/intro/Intro';
import { Highlight } from "components/intro/Highlight";
import { BlockText } from 'components/block-text/BlockText';

// tslint:disable-next-line: no-default-export
export default () => (
  <>
    <Helmet title="Hanlin Cheng" />

    <Intro>
     
      Hi, I'm Hanlin. :)) 
       <br></br> 
    I'm a <Highlight>Systems Design</Highlight>&nbsp;
    Engineering student at the University of Waterloo. 
    <br></br>
    I’ve previously interned at <Highlight>VMware</Highlight>&nbsp; 
    and <Highlight>Sunnybrook</Highlight>&nbsp;Research Institute. <br></br>
    I care about social engineering and volunteer a lot with Toronto’s <Highlight>Civic Tech</Highlight>&nbsp; community.
  <br></br>
Currently looking for Fall 2020 Internship opportunities in <Highlight>software development. </Highlight>

      {/* ,&nbsp; */}
    </Intro>


{/* 
    <BlockText
      heading="Who we are"
      description={
        <>
          Ueno is a full-service agency, busy designing and building beautiful digital products,
          brands, and experiences. For more informations go to{' '}
          <a href="https://ueno.co" target="_blank" rel="noopener noreferrer">
            ueno.co
          </a>
          .
        </>
      }
    /> */}
  </>
);
