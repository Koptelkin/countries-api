import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Country, Extra, Status } from "types";

export const loadCountryByName = createAsyncThunk<
    {data: Country[]}, //тип возвращаемого значения
    string, //тип аргумента в санк
    {extra: Extra} // тип конфига
>(
    '@@details/load-country-by-name',
    (name, {extra: {client, api}}) => {
        return client.get(api.searchByCountry(name));
    }
);

export const loadNeighboursByBorder = createAsyncThunk<
    {data: Country[]},
    string[],
    {extra: Extra}
>(
    '@@details/load-neighbours',
    (borders, {extra: {client, api}}) => {
        return client.get(api.filterByCode(borders))
    }
)

type DetailsSlice = {
    currentCountry: Country | null,
    neighbours: string[],
    status: Status,
    error: string | null,
}

const initialState: DetailsSlice = {
    currentCountry: null,
    neighbours: [],
    status: 'idle',
    error: null
}

const detailsSlice = createSlice({
    name: '@@details',
    initialState,
    reducers: {
        clearDetails: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCountryByName.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(loadCountryByName.rejected, (state) => {
                state.status = "rejected";
                state.error = `Can't load data`;
            })
            .addCase(loadCountryByName.fulfilled, (state, action) => {
                state.currentCountry = action.payload.data[0];
                state.status = "received";
            })
            .addCase(loadNeighboursByBorder.fulfilled, (state, action) => {
                state.neighbours = action.payload.data.map(country => country.name);
            })
    }
})

export const {clearDetails} = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;