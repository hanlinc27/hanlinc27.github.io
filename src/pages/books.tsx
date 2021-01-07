import React from 'react';
import {Helmet} from "react-helmet";
import 'styles/fonts.css';

import { Intro } from 'components/intro/Intro';
import {Container } from 'components/container/Container';

import pachinko from "assets/images/books/pachinko.svg";
import alwcs from "assets/images/books/alwcs.svg";
import littleprince from "assets/images/books/littleprince.svg";
import kafka from "assets/images/books/kafka.svg";
import humans from "assets/images/books/humans.svg";
import secrethistory from "assets/images/books/secrethistory.svg";
import stationeleven from "assets/images/books/stationeleven.svg";
import littlefires from "assets/images/books/littlefires.svg";
import hitchiker from "assets/images/books/hitchhiker.svg";

import styled from 'styled-components';


const StyledBook = styled.img`
width: 275px;
height: 275px;
`;
export default () => (
  <>
  <Container>
    <Helmet title="Books" />

    <Intro>
    <div className = "landing-heading animated animatedFadeInUp fadeInUp"> A delicate collection of musings, rambles, and insights. 
    </div>
    <br></br>
    <div className = "books-subtitle animated animatedFadeInUp fadeInUp"> Below are some of my favourite novel escapes. If you ever have a chance to read one - or several - I’d love to know your thoughts and I hope they can bring to you as much of an adventure as they brought for me.</div>
<br></br>
    <div className="animated animatedFadeInUp fadeInUp">
      <div className = "row">
<StyledBook src={pachinko} className="book-column" alt="Pachinko"></StyledBook>
<StyledBook src={alwcs} className="book-column" alt="All The Light We Cannot See"></StyledBook>
<StyledBook src={littleprince} className = "book-column" alt="The Little Prince"></StyledBook>
<StyledBook src={kafka} className="book-column" alt="Kafka on the Share"></StyledBook>
<StyledBook src={humans} className="book-column" alt="Humans of New York"></StyledBook>
<StyledBook src={secrethistory} className="book-column" alt="The Secret History"></StyledBook>
<StyledBook src={stationeleven} className="book-column" alt="Station Eleven"></StyledBook>
<StyledBook src={littlefires} className="book-column" alt="Little Fires Everywhere"></StyledBook>
{/* <StyledBook src={hitchiker} className="book-column" alt="Hitchhiker's Guide to the Galaxy"></StyledBook> */}

</div>
    </div>
    </Intro>
    </Container>
  </>
);
