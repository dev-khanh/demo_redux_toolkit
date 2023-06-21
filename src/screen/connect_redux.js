import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {
  increment,
  decrement,
  incrementAsync,
  selectLoading,
  addAction,
  fetchUserById,
} from '../slices/counter_slice';

function ConnectRedux() {
  const count = useSelector(state => state.CounterSlice.value);
  const isLoading = useSelector(selectLoading);
  // const item = useSelector(state => ({
  //   loading: state.counterSlice?.loading,
  //   value: state.counterSlice?.value,
  // }));
  // item.loading;
  const dispatch = useDispatch();
  const [incrementAmount] = useState('2');

  const onPressUseAction = () => dispatch(addAction());

  const onPressFetchUserById = () => dispatch(fetchUserById());

  const onPressIncrement = () => dispatch(increment());

  const onPressDecrement = () => dispatch(decrement());

  const onPressIncrementByAmount = () => {
    dispatch(incrementAsync(Number(incrementAmount) || 0));
  };

  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.button} onPress={onPressIncrement}>
        <Text style={styles.text}>Increment</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{count}</Text>
      <TouchableOpacity style={styles.button} onPress={onPressDecrement}>
        <Text style={styles.text}>Decrement</Text>
      </TouchableOpacity>
      <View style={styles.viewMarginTop} />
      <TouchableOpacity
        style={styles.button}
        onPress={onPressIncrementByAmount}>
        {isLoading ? (
          <View style={styles.horizontal}>
            <ActivityIndicator
              size="large"
              color="#704cb6"
              style={styles.activityView}
            />
            <Text style={styles.text}>Loading ...</Text>
          </View>
        ) : (
          <Text style={styles.text}>Add Async</Text>
        )}
      </TouchableOpacity>
      <View style={styles.viewMarginTop} />
      <TouchableOpacity style={styles.button} onPress={onPressUseAction}>
        <Text style={styles.text}>Use Action</Text>
      </TouchableOpacity>
      <View style={styles.viewMarginTop} />
      <TouchableOpacity style={styles.button} onPress={onPressFetchUserById}>
        <Text style={styles.text}>Fetch API</Text>
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
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  activityView: {marginRight: 20},
  viewMarginTop: {marginTop: 15},
});
export default ConnectRedux;
