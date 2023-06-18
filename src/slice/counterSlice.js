import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  isLoading: false,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log('DEVK incrementByAmount');
      state.value += action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount, setLoading} =
  counterSlice.actions;

export default counterSlice.reducer;

export const incrementAsync = amount => dispatch => {
  console.log('DEVK incrementAsync');
  dispatch(setLoading(true));
  try {
    setTimeout(function () {
      console.log('DEVK setTimeout');
      dispatch(incrementByAmount(amount));
      dispatch(setLoading(false));
    }, 1000);
  } catch (e) {
    return console.error(e.message);
  }
};
