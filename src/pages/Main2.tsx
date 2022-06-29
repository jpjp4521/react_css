import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

// TabPanel 함수에서 전달받는 파라미터 인터페이스 생성
interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

// 3개의 텝메뉴에 해당하는 컨텐츠 영역(show hide 기능처리).  탬메뉴의 INNERHTML 과 index value를 받는다.
// value는 현재선택된 표시를 위해 던져주고,  index값과 같을경우 선택(selected)처리한다.
// value state로 정의되어 있고, 클릭시 변경처리되고 있다
// ...other 선언해 그외 정보를 그대로 전달한다.
// sx={{ p:3, m:10 }} 패딩 3만큼    마진 10만큼
// sx 는 css 적용하는 명령어라고 보면 된다. 이전 버젼에서는 css 였지만 5버젼 부터 sx 로 변경됨.
// 단축평가  ||  왼쪽의 값이 true이면 왼쪽값 리턴, false면 오른쪽 리턴. 왼쪽이 false이거나 선언되지 않았을때만 오른쪽 리턴.
// && 연산자 && 기준 왼쪽이 참이면 오른쪽에 반환된다.
// 여기서는 값이 참이면 리턴해야 하는것이 컴포넌트라서, 이런식으로 써야 한다 || 형태로 바꾸게 되면 참일경우 true 가 리턴되고 거짓일경우 컴포넌트가 리턴되는형태가 된다
// 그로인해 클릭한항목 외의 항목이 컴포넌트가 그려지게 된다
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <>
      {index === value && (
        <Box
          sx={{
            p: 3,
            width: '100%',
            height: 500,
            textAlign: 'center',
          }}
          {...other}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </>
  );
}

// 공통부분  index값만 다른 부분이므로, 함수로 빼서 처리.
// 인자값을 넣어서 리턴해준다음 스프레드(...) 연산자로 그대로 표현.
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Main2() {
  const [value, setValue] = React.useState(0);
  // 초기값 0. 첫번째 탭이 선택된 상태로 로딩된다.

  // 탭을 클릭하면. Tabs의 값이 변경되고, 그값이 변경될때 호출되는 메서드.
  // 첫번째 이벤트명, 두번째는 변경된 인덱스값이 들어온다(0부터 시작)
  // 그값을 state에 넣어준다.
  // state 값이 바뀌면. 그값을 쓰는 TabPanel 컴포너는가 재랜더링 되고, 그로 인해 show hide가 바뀐다.
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* 밑의 Box 는 지워도 무방. div를 하나 추가해서 묶어주고, border를 준거라 보면된다. */}
      <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
        {/* 밑의 tabs는 탭을 묶어주고, 선택된 탭에 색상.밑줄표시한다. textColor: 글자색상  tab disabled  선언시 비활성, variant="fullWidth" 화면가득, centered 가운데정렬. */}
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          textColor="secondary"
          variant="fullWidth"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} disabled />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
        <br />
        안녕하세요
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
