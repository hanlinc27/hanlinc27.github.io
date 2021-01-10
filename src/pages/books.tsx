import React from 'react';
import { Helmet } from "react-helmet";
import 'styles/fonts.css';

import { Intro } from 'components/intro/Intro';
import { Container } from 'components/container/Container';

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

const StyledQuote = styled.div`
  margin-top: 28px;
  font-family: 'Rubik', sans-serif;
  font-style: italic;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #1E1A1D;
`;

export default () => (
  <>
    <Container>
      <Helmet title="Books" />

      <Intro>
        <div className="landing-heading animated animatedFadeInUp fadeInUp"> A delicate collection of musings, rambles, and insights.
    </div>
        <br></br>
        <div className="books-subtitle animated animatedFadeInUp fadeInUp"> Below are some of my favourite novel escapes. If you ever have a chance to read one - or several - I’d love to know your thoughts and I hope they can bring to you as much of an adventure as they brought for me.</div>
        <br></br>
        <div className="animated animatedFadeInUp fadeInUp">
          <div className="row">


            <div className="book-container">
              <StyledBook src={pachinko} className="book-column" alt="Pachinko"></StyledBook>
              <div className="overlay">
                <div className="text">Pachinko by Min Jin Lee</div>
              </div>
            </div>

            <div className="book-container">
              <StyledBook src={alwcs} className="book-column" alt="All The Light We Cannot See"></StyledBook>
              <div className="overlay">
                <div className="text">All the Light We Cannot See by Anthony Doerr</div>
              </div>
            </div>

            <div className="book-container">
              <StyledBook src={littleprince} className="book-column" alt="The Little Prince"></StyledBook>
              <div className="overlay">
                <div className="text">The Little Prince
by Antoine de Saint-Exupéry</div>
              </div>
            </div>

            <div className="book-container">
              <StyledBook src={kafka} className="book-column" alt="Kafka on the Share"></StyledBook>
              <div className="overlay">
                <div className="text">Kafka on the Shore by Haruki Murakami</div>
              </div>
            </div>

            <div className="book-container">
              <StyledBook src={humans} className="book-column" alt="Humans of New York"></StyledBook>
              <div className="overlay">
                <div className="text">Humans of New York by Brandon Stanton</div>
              </div>
            </div>

            <div className="book-container">
              <StyledBook src={secrethistory} className="book-column" alt="The Secret History"></StyledBook>
              <div className="overlay">
                <div className="text">The Secret History by Donna Tartt</div>
              </div>
            </div>

            <div className="book-container">
              <StyledBook src={stationeleven} className="book-column" alt="Station Eleven"></StyledBook>
              <div className="overlay">
                <div className="text">Station Eleven by Emily St. John Mandel</div>
              </div>
            </div>

            <div className="book-container">
              <StyledBook src={littlefires} className="book-column" alt="Little Fires Everywhere"></StyledBook>
              <div className="overlay">
                <div className="text">Little Fires Everywhere by Celeste Ng </div>
              </div>
            </div>
            {/* <StyledBook src={hitchiker} className="book-column" alt="Hitchhiker's Guide to the Galaxy"></StyledBook> */}
          </div>
<StyledQuote>"I remembered that the real world was wide, and that a varied field of hopes and fears, of sensations and excitements, awaited those who had the courage to go forth into it's expanse, to seek real knowledge of life amidst it's perils." - Jane Eyre</StyledQuote>
        </div>
      </Intro>
    </Container>
  </>
);
