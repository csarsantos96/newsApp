import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Countdown from '../components/countdown';
import News from '../components/news';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Countdown />
      <News />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;
