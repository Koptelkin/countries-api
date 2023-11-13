import { useAppDispatch } from "store"
import { clearControls } from "./controls-slice";

export const useCleanup = () => {
    const dispatch = useAppDispatch();

    const cleanup = dispatch(clearControls());

    return cleanup;
}