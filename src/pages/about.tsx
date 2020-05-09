import React from 'react';
import { Helmet } from "react-helmet";
import { BlockText } from 'components/block-text/BlockText';
import { Highlight } from "components/intro/Highlight";
import { Intro } from 'components/intro/Intro';
import 'styles/fonts.css';

// tslint:disable no-default-export
export default () => (
  <>
    <Helmet title="about me" />

    <Intro>
      Still waiting for my hogwarts letter...
      <div className = "about-body">
    <img className = "about-body__image" src="https://github.com/hanlinc27/hanlinc27.github.io/blob/master/static/about-picture.png?raw=true" alt="profilepic"></img>
    {/* <div className="about-body__text">
   check text
</div> */}
<p>che<img className = "about-body__image" src="https://github.com/hanlinc27/hanlinc27.github.io/blob/master/static/about-picture.png?raw=true" className = "photo" alt="profilepic"></img></p>
</div>

{/* 
<div className="container">
    <img className="container__image" src="https://mtdata.ru/u7/photo53A0/20946911428-0/original.jpg#20946911428"/>
    <div className="container__text">
        <h2>Why Do Cats Like Boxes?</h2>
        <p>"Cats like boxes because they are cryptic animals; they like to hide," Stephen Zawistowski, science adviser for the American Society for the Prevention of Cruelty to Animals, told Business Insider. "And a box gives them a place of safety and security."</p>
        <p>While inside a box, cats feel that they cannot be snuck up on from behind or the side — anything that wants to approach them must come directly into their field of vision. In effect, such hiding spaces allow them to watch the world around them without being seen.</p>
    </div>
</div>
 */}



    </Intro>

    <BlockText
      heading="Recently I have..."
      description={
        <>
          😊 Completed a 10 hour <Highlight>Puzzlehunt</Highlight> (CMU Getaway!) for the first time. Thinking of writing one?
          <br></br>
🎤 Published the seventh episode of a <Highlight>podcast</Highlight> (it’s anonymous, so  I guess this makes it less anonymous?) To give some context, it’s called
          <a href="https://medium.com/for-context" target="_blank">
            @forcontext.
          </a>
          <br></br>
📕 Read my first <Highlight>Murakami</Highlight> novel - Kafka on the Shore (best word to describe it - dreamlike).
          <br></br>
🏀 Been watching “The Last Dance” on Netflix. I’m the biggest <Highlight>San Antonio</Highlight><Highlight> Spurs</Highlight> fan and have watched pretty much every Spurs winning documentary five times over.
          <br></br>
          <br></br>
          <br></br>
        </>
      }
    />
  </>
);
