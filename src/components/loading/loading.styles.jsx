import styled, { keyframes } from 'styled-components';

const LoadingAnimation = keyframes`
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
`;

const LoadingWrapper = styled.div`
  margin: auto;
  width: 40px;
  height: 40px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const Circle = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: rotate(${({ angle }) => `${angle}deg`});

  &::before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: #fff;
    border-radius: 100%;
    animation: ${LoadingAnimation} 1.2s infinite ease-in-out both;
    animation-delay: ${({ delay }) => `${delay}s`};
  }
`;

export { LoadingWrapper, Circle }
