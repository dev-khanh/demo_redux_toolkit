import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {fetchUserById} from '../slices/counter_slice';
import {useDispatch} from 'react-redux';
import React from 'react';

function TextFetchApi() {
  const dispatch = useDispatch();

  const onPressFetchUserById = () => dispatch(fetchUserById());

  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.button} onPress={onPressFetchUserById}>
        <Text style={styles.text}>Fetch User ID</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    appearance: 'none',
    border: 'none',
    background: 'none',
    fontSize: 32,
    padding: 20,
    outline: 'none',
    cursor: 'pointer',
    borderRadius: 2,
    backgroundColor: '#f1edf8',
    transition: 'all 0.15s',
  },
  text: {
    color: '#704cb6',
    fontSize: 32,
  },
});
export default TextFetchApi;
