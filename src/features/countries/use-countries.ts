import { Country } from "types";
import { selectCountriesInfo, selectVisibleCountires } from "./countries-selectors";
import { RootState, useAppDispatch } from "store";
import { selectControls } from "features/controls/controls-selectors";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { loadCountries } from "./countries-slice";


export const useCountries = (): [
    Country[],
    ReturnType<typeof selectCountriesInfo>
] => {
    const dispatch = useAppDispatch();
    const controls = useSelector(selectControls);
    const countries = useSelector((state: RootState) => selectVisibleCountires(state, controls));
    const {status, error, quantity} = useSelector(selectCountriesInfo);

    useEffect(()=>{
        if (!quantity) {
            dispatch(loadCountries());
        }
    },[quantity, dispatch]);

    return [countries, {status, error, quantity}]
}