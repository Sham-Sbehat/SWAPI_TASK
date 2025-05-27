import React from 'react';
import styled from 'styled-components';
import BackButton from '../components/Button/BackButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  text-align: center;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: #065F46;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 2rem;
`;



const NotFoundPage: React.FC = () => {

  return (
    <Container>
      <Title>404</Title>
      <Subtitle>Sorry Page Not Found!</Subtitle>
      <BackButton/>
    </Container>
  );
};

export default NotFoundPage;
