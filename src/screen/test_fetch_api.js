import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {fetchUserById, selectArrayList} from '../slices/counter_slice';
import {useDispatch, useSelector} from 'react-redux';
import React from 'react';

function TextFetchApi() {
  const dispatch = useDispatch();

  const onPressFetchUserById = () => dispatch(fetchUserById());
  const item = useSelector(selectArrayList);

  return (
    <View style={styles.row}>
      <View style={styles.flexRow}>
        <Text style={styles.text}>UserId: </Text>
        <Text style={[styles.text, styles.colorText]}>
          {item.userId ?? '...'}
        </Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.text}>ID: </Text>
        <Text style={[styles.text, styles.colorText]}>{item.id ?? '...'}</Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.text}>Title: </Text>
        <Text style={[styles.text, styles.colorText]}>
          {item.title ?? '...'}
        </Text>
      </View>
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
  flexRow: {flexDirection: 'row'},
  colorText: {color: 'red'},
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
