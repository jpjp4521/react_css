import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.balck};
`;

interface propsData {
  children: React.ReactNode;
}
const Main3Child = ({ children }: propsData) => <Div>{children}</Div>;

export default Main3Child;

/*
  color: ${(props) => props.theme.colors.balck};
  color: ${({theme}) => theme.colors.balck};

  위의같은 방식으로 사용할수 있다
  
  여기서 theme 는 부모에서 던지는 파라미터로 예약어다
  
*/
