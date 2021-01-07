import React, { ReactNode } from 'react';
import styled from 'styled-components';
import 'styles/fonts.css';

import { variables } from 'styles/variables';
import { Container } from 'components/container/Container';

interface HeaderProps {
  children: ReactNode;
}
const StyledContainer = styled(Container)`

`;
const StyledContent = styled.div`
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  
  color: #1E1A1D;
      font-family: 'Rubik', sans-serif;

  align-items: center;

  padding: ${variables.gutter} 0;
`;

const Navigation = styled.div`
  display: flex;
  margin-left: auto;
`;

export const Header = ({ children }: HeaderProps) => (
    <StyledContainer>   
      <StyledContent>
        <Navigation>{children}</Navigation>
      </StyledContent>
    </StyledContainer>
  

);
