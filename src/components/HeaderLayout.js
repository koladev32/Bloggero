import * as React from 'react';
import {Header} from '@rneui/base';

function HeaderLayout(props) {
  const {text} = props;
  return (
    <Header
      backgroundColor="#6305dc"
      barStyle="default"
      centerComponent={{
        text: text,
        style: {color: '#fff'},
      }}
      placement="center"
    />
  );
}

export default HeaderLayout;
