import React from 'react';
import { Helmet } from "react-helmet";
import { BlockText } from 'components/block-text/BlockText';
import { Highlight } from "components/intro/Highlight";
import { Intro } from 'components/intro/Intro';
import 'styles/fonts.css';
import Image from 'react-bootstrap/Image';
// tslint:disable no-default-export
export default () => (
  <>
    <Helmet title="about me" />

    <Intro>
    <div className = "landing-heading"> 	Our dear friend, Winnie the Pooh, endearingly points out that, <br></br>“I always get to where I am going by walking away from where I have been.” </div>
      <div className = "about-body">
   
    {/* <div className="about-body__text">
   check text
</div> */}

<Image className = "about-picture" src="https://github.com/hanlinc27/hanlinc27.github.io/blob/master/static/about-picture.png?raw=true"  />
<div className = "about-text">
I love jigsaw puzzles. Start with the framed edge, slowly work your way into the middle, and voila - the satisfaction of a completed puzzle is like none other. Sometimes,  you don’t work from the edges and instead settle on piecing together individual sections and then successfully joining them. And on the rare occasion, no matter how you tilt or angle your head, you’re stumped and have to come back another time. 
<br></br>
<br></br>

It occurred to me the other day while working on a puzzle with my sister, that my interest in software development might be as simple as that. Piece by piece, section by section, building software is really just problem-solving little pieces of a bigger puzzle.
 <br></br>
 <br></br>

I’m currently studying Systems Design Engineering at the University of Waterloo because I want to understand better the “larger picture” behind all the different puzzles we’re trying to solve in this world. In my spare time, I volunteer a lot with the Civic Tech community in Toronto through web development, design, and other creative projects. I also tremendously enjoy watching basketball (especially the San Antonio Spurs!). 

<br></br>
<br></br>

Moving forward, I want to solve the little and large puzzles humans encounter in their lives to create intentionally delightful experiences. 
How so? To be honest, I’m not too sure yet.
<br></br>	<br></br>

So in the meantime, I’ll just keep walking. :) 
</div>
{/* <p>che<img className = "about-body__image" src="https://github.com/hanlinc27/hanlinc27.github.io/blob/master/static/about-picture.png?raw=true" class = "photo" alt="profilepic"></img></p> */}
</div>



    </Intro>

    <BlockText
      heading="Recently I have..."
      description={
        <>
          😊 Completed a 10 hour online <Highlight>Puzzlehunt</Highlight> (CMU Getaway!) for the first time. Thinking of writing one?
          <br></br>
🎤 Published the seventh episode of a <Highlight>podcast</Highlight> (it’s anonymous, so  I guess this makes it less anonymous?) To give some context, it’s called
          <a href="https://medium.com/for-context" target="_blank">
            @forcontext.
          </a>
          <br></br>
📕 Read my first <Highlight>Murakami</Highlight> novel - Kafka on the Shore (best word to describe it - dreamlike).
          <br></br>
          🍞 Working on <Highlight>Puzzle Potluck </Highlight> 3 (Week-long Puzzlehunt)! 
          <br></br>
          <br></br>
        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;🐬 If you’re willing to chat, I am always open to listen and learn. Feel free to reach me through my 
        <a href="mailto:h62cheng@uwaterloo.ca"  target="_blank"> email </a>
        or through 
        <a  href="https://twitter.com/hanlin_cheng"target="_blank"> twitter </a>
        ! :) 
          <br></br>
          <br></br>
          <br></br>
        </>

      }
    />
  </>
);
