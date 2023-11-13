import axios from 'axios';
import * as api from 'config';
import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from 'features/theme/themeSlice';
import { detailsReducer } from 'features/details/details-slice';
import { controlsReducer } from 'features/controls/controls-slice';
import { countriesReducer } from 'features/countries/countries-slice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        details: detailsReducer,
        controls: controlsReducer,
        countries: countriesReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                client: axios,
                api,
            },
        },
        serializableCheck: false,
    })

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch
