import React from 'react';
import { Helmet } from 'react-helmet';
import { Intro } from 'components/intro/Intro';
import { Container } from 'components/container/Container';
import 'styles/fonts.css';
import styled from 'styled-components';

import mePhoto from 'assets/images/about-photo.svg';
// tslint:disable no-default-export

const StyledPhoto = styled.img`
  display: inline-flex;
  vertical-align: top;
  width: 40;
`;

const StyledDiv = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  margin-top: 12px;
  color: #1e1a1d;
`;

const StyledSubtitle = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #426b69;
`;

const StyledSmallText = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: #1e1a1d;
  display: inline;
`;

const StyledBoldSmallText = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #1e1a1d;
  display: inline;
`;

const StyledContainer = styled.div`
  display: inline-flex;
  width: 59%;
  flex-basis: auto;
  flex-grow: 4;
  margin-right: 72px;
`;

const StyledLink = styled.a`
  cursor: pointer;
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 14px;
  text-decoration: underline;
  color: #1e1a1d;

  &:hover {
    color: #426b69;
    text-decoration: none !important;
  }
  &:focus {
    text-decoration: none !important;
  }
`;
const StyledSubtitleHeading = styled.div`
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  letter-spacing: 0.05em;

  color: #1e1a1d;
  margin-top: 48px;
  padding-bottom: 8px;
  border-bottom: 1px solid #1e1a1d;
`;

const ColouredDiv = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;

  color: #1e1a1d;
  margin-top: 28px;
  background-color: #dfe3df;
  padding: 8px;
  margin-bottom: 32px;
`;

const StyledBullets = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 8px;
  color: #1e1a1d;
`;
export default () => (
  <>
    <Container>
      <Helmet title="about me" />
      <div className="row animated animatedFadeInUp fadeInUp">
        <Intro>
          <StyledSubtitle>Nice to Meet You! </StyledSubtitle>
          <div className="landing-heading"> As a child, I fell in love with jigsaw puzzles. </div>

          <StyledContainer>
            <StyledDiv>
              Somewhere along the way, I realized there’s not much difference between approaching
              puzzle pieces and lines of code. My curiosity lies in learning how to positively
              connect the code we write directly to empower the humans that use it. I’ve explored
              this by engaging with the{' '}
              <StyledLink target="_blank" href="http://civictech.ca/">
                Civic Tech Toronto
              </StyledLink>{' '}
              community and at a social impact club,
              <StyledLink target="_blank" href="http://uwblueprint.org">
                UW Blueprint
              </StyledLink>
              .<br></br>
              <br></br>I also happen to be finishing my final year as a Systems Design Engineering
              student at the University of Waterloo. Why Systems Design? Because humans are diversly
              complex, so it’s exciting to understand the “big picture” story behind all the
              different puzzles we’re trying to solve together in this world.
              <br></br>
              <br></br>
              Moving forward, I hope to fit the little and large jigsaws we encounter to create
              intentionally delightful interactions.
              <br></br>
              <br></br>
              <StyledSmallText>Thank you for stopping by! I’m currently seeking </StyledSmallText>
              <StyledBoldSmallText>
                a new grad Software Engineering role for Spring 2024!
              </StyledBoldSmallText>
              <StyledSmallText>
                {' '}
                - If you’d like to chat, I'm always open to listen and learn.
              </StyledSmallText>
              <br />
              <br />
              <StyledLink
                target="_blank"
                href="https://hanlincheng.me/static/hanlin_cheng_resume.pdf"
              >
                Resume here.
              </StyledLink>
            </StyledDiv>
          </StyledContainer>
          <StyledPhoto src={mePhoto}></StyledPhoto>
          {/* <StyledSubtitleHeading>What I'm Up To!</StyledSubtitleHeading>
          <ColouredDiv>
            In my free time, I enjoy debating over fantasy basketball (the Spurs!), shots of
            espresso, building puzzles, and watercolour painting.
          </ColouredDiv>

          <StyledBullets>• 📚 Finished my 2B school term. </StyledBullets>
          <StyledBullets>• 🍪 Eating lots of peanut butter. </StyledBullets>
          <StyledBullets>
            • 🎤 Published the eleventh episode of a podcast with friends.
            <a target="_blank" href="https://anchor.fm/for-context">
              {' '}
              Listen here!
            </a>
          </StyledBullets> */}
        </Intro>
      </div>
    </Container>
  </>
);
