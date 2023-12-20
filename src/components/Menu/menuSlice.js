import {createSlice} from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-unresolved
import { MENU_ITEMS } from '@/constants'

const initialState ={
  activeMenuItem: MENU_ITEMS.PENCIL,
  actionMenuItem: null,
}
export const menuSlice = createSlice({
  name:'menu',
  initialState,
  reducers:{
    menuItemClick:(state,action) =>{
      // whenever clicking the menu item , activemenu item must get updated
      // eslint-disable-next-line no-param-reassign
      state.activeMenuItem = action.payload
    },
    actionItemClick:(state,action) =>{
      // eslint-disable-next-line no-param-reassign
      state.actionMenuItem = action.payload
    },
  },
})
export const {menuItemClick,actionItemClick} = menuSlice.actions
export default menuSlice.reducer