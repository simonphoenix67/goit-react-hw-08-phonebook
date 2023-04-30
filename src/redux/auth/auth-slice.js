import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [authOperations.logOut.fulfilled](state, action) {
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
      state.isLoggedIn = false;
    },

    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      // console.log(action);
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export const authReducer = authSlise.reducer;
export default authSlise.reducer;


// при обнове редукс тулзов  ________________________________________________________________________________________

// import { createSlice } from '@reduxjs/toolkit';
// import authOperations from './auth-operations';

// const initialState = {
//   user: {
//     name: null,
//     email: null,
//   },
//   token: null,
//   isLoggedIn: false,
//   isFetchingCurrentUser: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {},
//   builder: (builder) => {
//     builder
//       .addCase(authOperations.register.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(authOperations.logIn.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(authOperations.logOut.fulfilled, (state, action) => {
//         state.user = {
//           name: null,
//           email: null,
//         };
//         state.token = null;
//         state.isLoggedIn = false;
//       })
//       .addCase(authOperations.fetchCurrentUser.pending, (state) => {
//         state.isFetchingCurrentUser = true;
//       })
//       .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.isLoggedIn = true;
//         state.isFetchingCurrentUser = false;
//       })
//       .addCase(authOperations.fetchCurrentUser.rejected, (state) => {
//         state.isFetchingCurrentUser = false;
//       });
//   },
// });

// export const authReducer = authSlice.reducer;
// export default authSlice.reducer;
