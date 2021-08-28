import React from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';

import { RoundedButton } from '../../components/RoundedButton';

const HistoryItem = ({ item, index }) => {
  return <Text style={styles.HistoryItem(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
        {focusHistory.length ? (
          <>
            <Text style={styles.title}>Things weve focuse on</Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{
                flex: 1,
                alignItems: 'center',
              }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
          </>
        ) : null}
      </SafeAreaView>
      <View style={styles.clearContainer}>
        <RoundedButton
          size={60}
          title="Clear"
          onPress={() => onClear()}
          style={{ paddingTop: 10 }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  HistoryItem: (status) => ({
    color: status < 1 ? 'red' : 'green',
    fontSize: 16,
  }),
  title: {
    color: 'white',
    fontSize: 24,
  },
  clearContainer: {
    paddingBottom: 10,
    paddingLeft: 10,
  },
});
