import React from 'react';
import {Helmet} from "react-helmet";
import 'styles/fonts.css';

import { Intro } from 'components/intro/Intro';
import {Container } from 'components/container/Container';
import pachinko from "assets/images/books/pachinko.svg";
import alwcs from "assets/images/books/alwcs.svg";
import littleprince from "assets/images/books/littleprince.svg";
import styled from 'styled-components';

const StyledBook = styled.img`
width: 300px;
height: 300px;
`;
export default () => (
  <>
  <Container>
    <Helmet title="Books" />

    <Intro>
    <div className = "landing-heading animated animatedFadeInUp fadeInUp"> A delicate collection of musings, rambles, and insights. 
    </div>
    <br></br>
    <div className = "books-subtitle animated animatedFadeInUp fadeInUp"> Below are some of my favourite novel escapes, if you ever have a chance to read one, or many, I’d love to know your thoughts and I hope they bring to you as much of an adventure as they brought for me.</div>
<br></br>
    <div className="animated animatedFadeInUp fadeInUp">
      <div className = "row">
<StyledBook src={pachinko} className="column" alt="Pachinko"></StyledBook>
<StyledBook src={alwcs} className="column" alt="All The Light We Cannot See"></StyledBook>
<StyledBook src={littleprince} className = "column" alt="The Little Prince"></StyledBook>
</div>
    </div>
    </Intro>
    </Container>
  </>
);
