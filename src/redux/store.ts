import { configureStore } from '@reduxjs/toolkit'
import drawerReducer from './drawerSlice'
import cardsReducer from './cardsSlice'

const store = configureStore({
	reducer: {
		drawer:drawerReducer,
		cards:cardsReducer,
	},
});

export default store


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
