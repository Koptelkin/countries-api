import { useSelector } from "react-redux";
import { useAppDispatch } from "store"
import { selectNeighbours } from "./details-selectors";
import { useEffect } from "react";
import { loadNeighboursByBorder } from "./details-slice";

export const useNeighbours = (borders: string[] = []) => {
    const dispatch = useAppDispatch();
    const neighbours = useSelector(selectNeighbours);

    useEffect(()=>{
        if (borders.length) {
            dispatch(loadNeighboursByBorder(borders));
        }
    },[borders, dispatch])

    return neighbours;
}