import { createSlice } from "@reduxjs/toolkit";
import { MENU_ITEMS, COLORS } from "../constants";

const initialState = {
  [MENU_ITEMS.PENCIL]:{
    color: COLORS.BLACK,
    size: 3,
  },
  [MENU_ITEMS.PENCIL]:{
    color: COLORS.BLACK,
    size: 3,
  },
  [MENU_ITEMS.UNDO]:{},
  [MENU_ITEMS.REDO]:{},
  [MENU_ITEMS.DOWNLOAD]:{},

}
export const toolboxSlice = createSlice({
  name:'menu',
  initialState ,
  reducers : {
    changeColor: (state,action) =>{
      //action.payload is an object
      // eslint-disable-next-line no-param-reassign
      state[action.payload.item].color = action.payload.color
    },
    changeBrushSize: (state,action) =>{
      // eslint-disable-next-line no-param-reassign
      state[action.payload.item].size = action.payload.size
    },
  },
})

export const {changeColor, changeBrushSize} = toolboxSlice.actions
export default toolboxSlice.reducer

