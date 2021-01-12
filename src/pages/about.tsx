import React from 'react';
import { Helmet } from "react-helmet";
import { Intro } from 'components/intro/Intro';
import { Container } from 'components/container/Container';
import 'styles/fonts.css';
// tslint:disable no-default-export
export default () => (
  <>
  <Container>
    <Helmet title="about me" />

    <Intro>
    <div className = "landing-heading"> 	Our dear friend, Winnie the Pooh, endearingly points out that, <br></br>“I always get to where I am going by walking away from where I have been.” </div>
      <div className = "about-body">

<div className = "about-text">
{/* I love jigsaw puzzles. Start with the framed edge, slowly work your way into the middle, and voila - the satisfaction of a completed puzzle is like none other. Sometimes,  you don’t work from the edges and instead settle on piecing together individual sections and then successfully joining them. And on the rare occasion, no matter how you tilt or angle your head, you’re stumped and have to come back another time. 
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

So in the meantime, I’ll just keep walking. :) */}
</div> 
</div>

    </Intro>

    </Container>
  </>
);
