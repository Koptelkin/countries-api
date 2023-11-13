import { SingleValue } from "react-select";
import { Region } from "types";
import { CountryOption } from "./CustomSelect";
import { useAppDispatch } from "store";
import { useSelector } from "react-redux";
import { selectRegion } from "./controls-selectors";
import { setRegion } from "./controls-slice";

type onSelect = (region: SingleValue<CountryOption>) => void

export const useRegion = (): [Region | "", onSelect] => {
    const dispatch = useAppDispatch();
    const region = useSelector(selectRegion);

    const handleSelect: onSelect = (reg) => {
        if (reg) {
            dispatch(setRegion(reg.value))
        } else {
            dispatch(setRegion(''))
        }
    }

    return [region, handleSelect];
}