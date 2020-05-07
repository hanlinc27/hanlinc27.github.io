import React from 'react';
import styled from 'styled-components';
import DolphinFooter from 'assets/svg/dolphin.svg';
import { Container } from 'components/container/Container';

interface Social {
  icon: React.ReactNode;
  to: string;
}

interface FooterProps {
  logo: React.ReactNode;
  social: Social[];
}

const FooterRoot = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 40px 0;

   border-bottom: 10px solid #FAFAC6;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  margin-left: 30px;

  transition: 200ms opacity ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

export const Footer = ({ logo, social }: FooterProps) => (
  <FooterRoot>
    <Container>
      <Content>
      <img src="https://user-images.githubusercontent.com/19617248/81241681-fa1af500-8fd8-11ea-9410-e69a952bb830.png" alt = "dolphin"/>
    
      
        <List>
          {social.map((item) => (
            <ListItem key={item.to}>
              <a href={item.to} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  </FooterRoot>
);
