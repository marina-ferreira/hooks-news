import React from 'react';
import { LoadingWrapper, Circle } from './loading.styles';

const Loading = () => (
  <LoadingWrapper>
    <Circle angle={0} delay={0} />
    <Circle angle={360} delay={-1.1} />
    <Circle angle={60} delay={-1} />
    <Circle angle={90} delay={-0.9} />
    <Circle angle={120} delay={-0.8} />
    <Circle angle={150} delay={-0.7} />
    <Circle angle={180} delay={-0.6} />
    <Circle angle={210} delay={-0.5} />
    <Circle angle={240} delay={-0.4} />
    <Circle angle={270} delay={-0.3} />
    <Circle angle={300} delay={-0.2} />
    <Circle angle={330} delay={-0.1} />
  </LoadingWrapper>
)

export default Loading;
