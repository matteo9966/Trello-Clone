import { configureStore } from '@reduxjs/toolkit'
import drawerReducer from './drawerSlice'
export default configureStore({
	reducer: {
		drawer:drawerReducer
	},
});

