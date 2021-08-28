import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, paddingSizes } from '../../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [tmpItem, settmpItem] = useState(null);
  console.log('Once the Enter is hit', tmpItem);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> What would you like to Focus on? </Text>
        <View style={styles.inputContanier}>
          <TextInput
            style={{ flex: 1, marginRight: 20 }}
            onSubmitEditing={({ nativeEvent }) => settmpItem(nativeEvent.text)}
          />
          <RoundedButton
            size={50}
            title="+"
            style={{ paddingTop: 6, marginTop: 10 }}
            onPress={() => {
              addSubject(tmpItem);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)
  },
  titleContainer: {
    flex: 0.5,
    padding: paddingSizes.md,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  inputContanier: {
    paddingTop: paddingSizes.md,
    flexDirection: 'row',
  },
});
