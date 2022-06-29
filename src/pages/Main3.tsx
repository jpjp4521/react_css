import React from 'react';
import { ThemeProvider } from 'styled-components';
import Main3Child from './Main3Child';

const colors = {
  balck: '#000000',
  gray_1: '#22222',
};
const theme1 = {
  colors,
};

const Main3 = () => (
  <ThemeProvider theme={theme1}>
    <div>안녕하세요.</div>
    <Main3Child>반갑습니다.</Main3Child>
  </ThemeProvider>
);

export default Main3;

/*
전역 스타일링의 다른 방법. 테마 설정.
font등에 적용가능하다

ThemeProvider 컴포넌트가 감싸고 있는 자식 컴포넌트에서 해당 테마를 받아서 사용할수 있다
theme는 지정되어 있는 예약어
*/
