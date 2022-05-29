import React from "react";
import {View, Text, StyleSheet} from "react-native";


function ArticleList() {
  return (
    <View style={styles.container}>
      <Text>ArticleList</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default ArticleList;