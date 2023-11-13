import { NavigateFunction } from "react-router";
import { useDetails } from "./use-details";
import Info from "./Info";

interface CountryDetailsProps {
    name?: string,
    navigate: NavigateFunction
}

const CountryDetails = ({name= '', navigate}: CountryDetailsProps) => {
    const {status, error, currentCountry} = useDetails(name);

    return (
        <>
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {currentCountry && <Info push={navigate} {...currentCountry}/>}
        </>
    )
}

export default CountryDetails;