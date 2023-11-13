import { RootState } from "store";

export const selectCountriesInfo = (state: RootState) => ({
    status: state.countries.status,
    error: state.countries.error,
    quantity: state.countries.list.length,
})

export const selectAllCountries = (state: RootState) => state.countries.list;

export const selectVisibleCountires = (state: RootState, {search = '', region = ''}) => {
    return state.countries.list.filter(country => (
        country.name.toLowerCase().includes(search.toLowerCase()) && country.region.includes(region)
    ))
}