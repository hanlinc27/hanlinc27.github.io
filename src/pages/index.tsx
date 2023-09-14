import React from 'react';
import { Helmet } from 'react-helmet';
import 'styles/fonts.css';
import { Container } from 'components/container/Container';
import { Intro } from 'components/intro/Intro';
import styled from 'styled-components';
import { Project } from 'components/project-blurb/Project';
import { SpecialProject } from 'components/project-blurb/SpecialProject';
import CopyMailTo from 'react-copy-mailto';

import github from 'assets/images/github.svg';
import linkedin from 'assets/images/linkedin.svg';
import email from 'assets/images/email.svg';

import first from 'assets/images/first.svg';
import second from 'assets/images/second.svg';
import third from 'assets/images/third.svg';
import fourth from 'assets/images/fourth.svg';

import voiceflow from 'assets/images/voiceflow.svg';
import shoeImage from 'assets/images/shoe-image.svg';
import imaginecomms from 'assets/images/imaginecomms.svg';
import ctto from 'assets/images/ctto.svg';
import pivotal from 'assets/images/pivotal.svg';
import sunnybrook from 'assets/images/sunnybrook.svg';
import hackathons from 'assets/images/hackathons.svg';
import forcontext from 'assets/images/forcontext.svg';
// tslint:disable-next-line: no-default-export
const StyledLink = styled.a`
  cursor: pointer;
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

const StyledDiv = styled.div`
  display: inline;
`;

const StyledImg = styled.img`
  width: 130px;
  height: 186px;
`;

const StyledSubittle = styled.div`
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

const StyledProject = styled(Project)`
  flex: 1 0 50%;
  align-items: left;
`;

const StyledSpecialProject = styled(SpecialProject)`
  flex: 1 0 50%;
  align-items: left;
`;

const StyledProjectImage = styled.img`
  margin-left: 128px;
  flex: 1 0 50%;
  align-items: right;
`;

const StyledProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
  margin-top: 20px;
  margin-bottom: 0%;
`;

const StyledIcon = styled.img`
  padding-left: 8px;
  width: 28px;
  cursor: pointer;
  display: inline;
  margin-right: 16px;
`;
const StyledEmailIcon = styled.img`
  padding-left: 9px;
  padding-bottom: -4px;
  overflow: hidden;
  margin-bottom: 14px;
  width: 28px;
  cursor: pointer;
  display: inline;
  margin-right: 50px;
`;

export default () => (
  <>
    <Helmet title="Hanlin Cheng" />
    <Container>
      <Intro>
        <div className="landing-heading animated animatedFadeInUp fadeInUp">
          {' '}
          Hi there, I'm Hanlin.{' '}
        </div>

        <br></br>

        <div className="landing-subtitle animated animatedFadeInUp fadeInUp">
          {' '}
          I’m striving to create beautiful, intentional, and meaningful software interactions.
        </div>
        <div className="landing-body animated animatedFadeInUp fadeInUp">
          I’m a final year engineering student at the University of Waterloo. I’ve previously
          interned at <StyledDiv></StyledDiv>
          <StyledLink target="_blank" href="https://www.withpavilion.com/">
            Pavilion
          </StyledLink>
          <StyledDiv>, </StyledDiv>
          <StyledLink target="_blank" href="https://www.moderntreasury.com/">
            Modern Treasury
          </StyledLink>
          <StyledDiv> , </StyledDiv>
          <StyledLink target="_blank" href="https://www.intuit.com/">
            Intuit
          </StyledLink>
          <StyledDiv>, and </StyledDiv>
          <StyledLink target="_blank" href="https://www.voiceflow.com/">
            Voiceflow
          </StyledLink>
          <StyledDiv>. Additionally, I volunteer with </StyledDiv>
          <StyledLink target="_blank" href="https://uwblueprint.org/">
            UW Blueprint
          </StyledLink>
          <StyledDiv> and </StyledDiv>
          <StyledLink target="_blank" href="http://civictech.ca/">
            Civic Tech Toronto
          </StyledLink>
          <StyledDiv> to build pro-bono software. </StyledDiv>
        </div>
        <br></br>
        <div className="landing-subtitle animated animatedFadeInUp fadeInUp">
          {' '}
          I’m currently seeking new grad software engineering internships for 2024! I'm looking for
          a multidisciplinary team that is kind, user-focused, and where there is room to take
          ownership of complex engineering problems.
        </div>

        <a href="https://github.com/hanlinc27" target="_blank">
          <StyledIcon
            className="landing-subtitle animated animatedFadeInUp fadeInUp"
            src={github}
          ></StyledIcon>
        </a>
        <a href="https://www.linkedin.com/in/hanlincheng/" target="_blank">
          <StyledIcon
            className="landing-subtitle animated animatedFadeInUp fadeInUp"
            src={linkedin}
          ></StyledIcon>
          <CopyMailTo
            defaultTooltip="Copy to clipboard"
            copiedTooltip="Copied!"
            email="h6cheng@uwaterloo.ca"
          >
            <StyledEmailIcon
              className="landing-subtitle animated animatedFadeInUp fadeInUp"
              src={email}
            ></StyledEmailIcon>
          </CopyMailTo>
        </a>
        <br></br>
        <br></br>
        <div className="row animated animatedFadeInUp fadeInUp">
          <StyledImg className="column-test animated" src={first}></StyledImg>
          <StyledImg className="column-test3 animated " src={fourth}></StyledImg>
          <StyledImg className=" column animated" src={second}></StyledImg>

          <StyledImg className="column-test2 animated " src={third}></StyledImg>
        </div>

        {/* <div className="animated animatedFadeInUp fadeInUp">
          <StyledSubittle>Previously</StyledSubittle>
          <StyledProjectContainer>
            <StyledSpecialProject
              title="Full Stack Developer Intern at Voiceflow"
              body=" - Crafting collaborative conversation design experiences with a fully involved prototyping and user feedback focus."
              date="May 2021 - Aug 2021"
              stack="ReactJS (Typescript), Redux, Node.js, Express, Cypress, Mocha, MongoDB, Docker"
              link="https://www.voiceflow.com"
              navLink="https://www.voiceflow.com/blog/user-testing-made-easy-with-transcripts-in-voiceflow"
              buttonText="Read about it here!"
            ></StyledSpecialProject>
            <StyledProjectImage src={voiceflow}></StyledProjectImage>
          </StyledProjectContainer>

          <StyledProjectContainer>
            <StyledProject
              title="Project Developer at UW Blueprint"
              body=" - Building an interactive map platform and dashboard to showcase the written stories of immigrant women through a symbolic pair of shoes."
              date="September 2020 - May 2021"
              stack="ReactJS (Typescript), Styled Components, Mapbox, LeafletJS, Golang, PostgreSQL, Docker"
              link="https://theshoeproject.online/"
            ></StyledProject>
            <StyledProjectImage src={shoeImage}></StyledProjectImage>
          </StyledProjectContainer>

          <StyledProjectContainer>
            <StyledProject
              title="Full Stack Developer Intern at Imagine Communications"
              body=" - Envisioning a seamless television playout experience through a file orchestration application for key video content workflows."
              date="September 2020 - December 2020"
              stack="AngularJS and VueJS (Typescript), Protractor, Jasmine, Karma, Cypress"
              link="https://imaginecommunications.com/"
            ></StyledProject>
            <StyledProjectImage src={imaginecomms}></StyledProjectImage>
          </StyledProjectContainer>

          <StyledProjectContainer>
            <StyledProject
              title="Frontend Developer at Civic Tech Toronto"
              body=" - Empowering a civic grassroot organization driving tech-focused mentoring for underhoused Toronto youth. "
              date="February 2020 - December 2020"
              stack="ReactJS (Javascript), MaterialUI, Styled Components Figma"
              link="http://civictech.ca/"
            ></StyledProject>
            <StyledProjectImage src={ctto}></StyledProjectImage>
          </StyledProjectContainer>

          <StyledProjectContainer>
            <StyledProject
              title="Information Technology Intern at VMware (Formerly Pivotal Software) "
              body="  - Streamlining an internal inventory check-out system and automating the identity app migration process."
              date="January 2020 - April 2020"
              stack="ReactJS (Javascript), Google App Scripts, Cloud Foundry"
              link="https://tanzu.vmware.com/tanzu"
            ></StyledProject>
            <StyledProjectImage src={pivotal}></StyledProjectImage>
          </StyledProjectContainer>

          <StyledProjectContainer>
            <StyledProject
              title="Software Development Intern at Sunnybrook Research Institute"
              body="  - Enabling ultrasound treatment monitoring programs through parallelizing data computations."
              date="July 2019 - August 2019"
              stack="C++, CUDA, MATLAB"
              link="https://sunnybrook.ca/research/content/?page=sri-groups-fus"
            ></StyledProject>
            <StyledProjectImage src={sunnybrook}></StyledProjectImage>
          </StyledProjectContainer>

          <StyledSubittle>For Fun</StyledSubittle>

          <StyledProjectContainer>
            <StyledSpecialProject
              title="All-nighters at hackathons"
              body=" - A collection of hackathon projects from SheHacks IV, Ellehacks 2020, Delthacks 2020, and Hack the Valley 2020."
              date="Ongoing"
              stack="Too long of a tech stack to list."
              buttonText="View the project list here!"
              navLink="https://www.notion.so/Projects-Developer-Portfolio-7a41d12bbf704647a410bb46eb4b65e7"
            ></StyledSpecialProject>
            <StyledProjectImage src={hackathons}></StyledProjectImage>
          </StyledProjectContainer>

          <StyledProjectContainer>
            <StyledSpecialProject
              title="Podcasting at for context: "
              body=" - Chatting away thoughts for a future self to look back and re-discover."
              date="Ongoing"
              link="https://medium.com/for-context"
              buttonText="Give it a listen here!"
              navLink="https://anchor.fm/for-context"
            ></StyledSpecialProject>
            <StyledProjectImage src={forcontext}></StyledProjectImage>
          </StyledProjectContainer>
        </div> */}
      </Intro>
    </Container>
  </>
);
