import React from 'react';
import {Helmet} from "react-helmet";
import { BlockText } from 'components/block-text/BlockText';

import { Intro } from 'components/intro/Intro';

// tslint:disable no-default-export
export default () => (
  <>
    <Helmet title="about me" />
  
    <Intro>
      Still waiting for my hogwarts letter...

    <img src = "https://github.com/hanlinc27/hanlinc27.github.io/blob/master/static/about-picture.png?raw=true" alt = "profilepic"></img>

    </Intro>

    <BlockText
      heading="Recently I have..."
      description={
        <>
         😊 Completed a 10 hour Puzzlehunt (CMU Getaway!) for the first time. Thinking of writing one?
<br></br>
🎤 Published the seventh episode of a podcast (it’s anonymous, so  I guess this makes it less anonymous?) To give some context, it’s called 
<a href="https://medium.com/for-context" target="_blank">
             @forcontext.
          </a>
<br></br>
📕 Read my first Murakami novel - Kafka on the Shore (best word to describe it - dreamlike). 
<br></br>
🏀 Been watching “The Last Dance” on Netflix. I’m the biggest San Antonio Spurs fan and have watched prett much every Spurs winning documentary five times over. 
         <br></br>
         <br></br>
         <br></br>
        </>
    }
    />
 </>
);
