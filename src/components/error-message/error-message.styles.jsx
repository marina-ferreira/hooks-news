import styled from 'styled-components';

const ErrorWrapper = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorImage = styled.img`
  width: 50%;
`;

const Message = styled.div`
  color: #999EFF;
  font-size: 30px;
  text-align: center;
  margin-top: 60px;
`;

export { ErrorWrapper, ErrorImage, Message }
