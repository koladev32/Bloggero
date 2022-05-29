import * as React from 'react';
import {Header, Icon} from '@rneui/base';
import {TouchableOpacity} from 'react-native';

function HeaderLayout(props) {
  const {text, hasGoback, navigation} = props;

  const additionalProps = {};

  if (hasGoback) {
    additionalProps.leftComponent = () => (
      <TouchableOpacity onPress={() => navigation.navigate('ArticleDetail')}>
        <Icon name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
    );
  }
  return (
    <Header
      backgroundColor="#6305dc"
      barStyle="default"
      centerComponent={{
        text: text,
        style: {color: '#fff'},
      }}
      placement="center"
      {...additionalProps}
    />
  );
}

export default HeaderLayout;
