import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState,AppDispatch } from '../../state/store'
//sostanzialmente: questi sono dei customhook che ti permettono di utilizzare typescript insieme a reduxtoolkit!
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector