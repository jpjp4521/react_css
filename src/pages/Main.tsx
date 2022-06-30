import React from 'react';
import styled, { css } from 'styled-components';
import GlobalStyle from '../css/GlobalStyle';

const Title = styled.h2`
  font-family: 'Helvetica', 'Arial', sans-serif;
  line-height: 1.5;
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 8px;
`;

const Button = styled.button`
  background-color: white;
  color: ${(props) => props.color || 'black'};
`;

interface abc {
  color: string;
  huge: boolean;
}
const Button1 = styled.button`
  background-color: white;

  ${({ huge }: abc) =>
    huge &&
    css`
      color: white;
      background: blue;
    `}
`;

const Main = () => (
  <>
    <GlobalStyle />
    <div>
      <Title>확인</Title>
      <Button color="blue">확인</Button>&nbsp;
      <Button color="tomato">확인</Button>&nbsp;
      <Button>확인</Button>
      <Button1 color="gg" huge>
        확인
      </Button1>
    </div>
  </>
);

export default Main;

/*

styled 컴포넌트 사용
컴포너트를 생성하고, styled.h1`  ` 형태로  선언후
h1기반의 추가 css를 커스텀형태로 선언후 사용한다
스타일 내부에서 파라미터를 받아서 유동적으로 처리할수 있다
예로, 위의 Button 컴포넌트에 color를 던지고, Button 컴포넌트에 받고 있다

 <Button1 color="gg" huge> 형태로 쓰는건, huge에 대한 boolean 선언을 인터페이스에 해줘야 한다
 비구조활당은 필요한 이름만 써주면 받을수 있다
 
 Button1 에 적용한 형태로
 css ``  형태로 여러줄에 걸쳐 css를 작성할수 있다




css를 전역으로 설정하려면, styled-component의 createGlobalStyle 를 이용한다
폰트 색상을 바꾸는부분을 Main 컴포넌트를 포함하여 하위자식에게 모두 적용
createGlobalStyle 를 통해 선언하고, 포함시킨다고 보면 된다

*/
