import React from 'react';
import { ErrorWrapper, ErrorImage, Message } from './error-message.styles';

const ErrorMessage = (message) => (
  <ErrorWrapper>
    <ErrorImage src='https://i.imgur.com/A040Lxr.png/360' alt="Error image" />
    <Message>
      Sorry, something went wrong...
      <div style={{ marginTop: 20 }}><em>{message.error}.</em></div>
    </Message>
  </ErrorWrapper>
)

export default ErrorMessage;
