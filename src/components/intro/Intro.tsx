import React, { ReactNode } from 'react';
import styled from 'styled-components';
import 'styles/fonts.css';

import { responsiveFont } from 'styles/utils';
import { variables, breakpoints } from 'styles/variables';
import { Container } from 'components/container/Container';
import { Column } from 'components/grid/Column';
import { Row } from 'components/grid/Row';

interface IntroProps {
  children: ReactNode;
}

const Wrapper = styled.div`
  padding: 20px 0;

  @media (min-width: ${breakpoints.md}) {
    padding: 120px 0;
  }
`;

const Paragraph = styled.p`
 ${responsiveFont(24, 24)};
  font-family: 'Quattrocento Sans';
  font-weight: 300;
`;

export const Intro = ({ children }: IntroProps) => (
  <Container>
    <Wrapper>
    <Row>
      <Paragraph>{children}</Paragraph>   
        
   

      </Row>
     
    </Wrapper>
    {/* </Column> */}
  </Container>
);
