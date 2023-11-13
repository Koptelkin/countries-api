import styled from "styled-components";
import Search from "./Search";
import { CustomSelect } from "./CustomSelect";
import { Region } from "types";
import { useRegion } from "./use-region";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    }
`;

type RegionOption = {
    [RegKey in Region]: {value: RegKey, label: RegKey}
}

const optionsMap: RegionOption = {
    'Africa': {value: "Africa", label: 'Africa'},
    'America': {value: 'America', label: "America"},
    'Asia': {value: "Asia", label: "Asia"},
    'Europe': {value: "Europe", label: "Europe"},
    'Oceania': {value: "Oceania", label: "Oceania"}
}

const options = Object.values(optionsMap);

const Controls = () => {
    const [region, handleSelect] = useRegion();

    return (
        <Wrapper>
            <Search/>
            <CustomSelect
                options={options}
                placeholder='Filter by region'
                isClearable
                isSearchable={false}
                value={region ? optionsMap[region] : ''}
                onChange={handleSelect}
            />
        </Wrapper>
    )
}

export default Controls;