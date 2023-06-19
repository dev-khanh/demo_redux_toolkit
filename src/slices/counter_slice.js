import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

// import {getMenus} from 'api';

const initialState = {
  loading: false,
  value: 0,
};

// export const fetchUserById = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async () => {
//     const response = await getMenus();
//     return response;
//   },
// );

export const incrementAsync = amount => dispatch => {
  try {
    dispatch(setLoading(true));
    setTimeout(function () {
      dispatch(incrementByAmount(amount));
      dispatch(setLoading(false));
    }, 1000);
  } catch (e) {
    return console.error(e.message);
  }
};

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  // extraReducers: {
  //   [fetchUserById.fulfilled]: (state, action) => {
  //     state.arrayList = action.payload;
  //   },
  // },
});

export const {setLoading, increment, decrement, incrementByAmount} =
  counterSlice.actions;

export default counterSlice.reducer;
