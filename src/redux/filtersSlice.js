// У файлі filtersSlice.js оголоси слайс фільтра, використовуючи функцію createSlice().
// Екшени слайса для використання в dispatch:
// changeFilter - зміна значення фільтра в властивості name (initial state)
// З файла слайса експортуй редюсер, а також його екшени.

import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    name: "",
  },

reducers:{
    changeFilter:(state, action) => {     // actions
        state.name = action.payload;
        // state.value += action.payload;
      },
}}
)

export const { changeFilter } = slice.actions;  //export actions for dispatch
export default slice.reducer;
