import { NavigateFunction } from "react-router";
import { Country } from "types";
import { useNeighbours } from "./use-neighbours";
import styled from "styled-components";

const Wrapper = styled.section`
    margin-top: 3rem;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: 2rem;

    @media (min-width: 767px) {
        grid-template-columns: minmax(100px, 400px) 1fr;
        align-items: center;
        gap: 5rem;
    }
    @media (min-width: 1024px) {
        grid-template-columns: minmax(400px, 600px) 1fr;
    }
`;

const InfoImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const InfoTitle = styled.h1`
    margin: 0;
    font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
    display: flex;
    flex-direction: column;

    gap: 2rem;

    @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
    }
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li`
    line-height: 1.8;

    & > b {
    font-weight: var(--fw-bold);
    }
`;

const Actions = styled.div`
    margin-top: 3rem;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: flex-start;

    & > b {
        font-weight: var(--fw-bold);
    }

    @media (min-width: 767px) {
        flex-direction: row;
        align-items: center;
    }
`;

const TagGroup = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;

const Tag = styled.span`
    padding: 0 1rem;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    line-height: 1.5;
    cursor: pointer;
`;

interface InfoProps extends Country {
    push: NavigateFunction,
}

const Info = (props: InfoProps) => {
    const {
        currencies=[],
        borders=[],
        languages=[],
        capital,
        flag,
        name,
        nativeName,
        population,
        region,
        subregion,
        topLevelDomain,
        push,
    } = props;

    const neighbours = useNeighbours(borders);

    return (
        <Wrapper>
            <InfoImage src={flag} alt={name}/>
            <div>
                <InfoTitle>{name}</InfoTitle>
                <ListGroup>
                    <List>
                        <ListItem>
                            <b>Native Name: </b> {nativeName}
                        </ListItem>
                        <ListItem>
                            <b>Population: </b> {population}
                        </ListItem>
                        <ListItem>
                            <b>Region: </b> {region}
                        </ListItem>
                        <ListItem>
                            <b>Sub Region: </b> {subregion}
                        </ListItem>
                        <ListItem>
                            <b>Capital: </b> {capital}
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                                <b>Top Level Domain:</b>{' '}
                                {topLevelDomain.map((el) => (
                                    <span key={el}>{el}</span>
                                ))}
                        </ListItem>
                        <ListItem>
                            <b>Currencies:</b>{' '}
                            {currencies.map((el) => (
                                <span key={el.code}>{el.name}</span>
                            ))}
                        </ListItem>
                        <ListItem>
                            <b>Languages:</b>{' '}
                            {languages.map((el) => (
                                <span key={el.name}>{el.name}</span>
                            )).join(', ')}
                        </ListItem>
                    </List>
                </ListGroup>
                <Actions>
                    <b>Border Countries:</b>
                    {!borders.length ? (
                        <span>There are no border countries</span>
                    ) : (
                        <TagGroup>
                            {neighbours.map((countryName) => (
                                <Tag key={countryName} onClick={()=> push(`/country/${countryName}`)}>
                                    {countryName}
                                </Tag>
                            ))}
                        </TagGroup>
                    )}
                </Actions>
            </div>
        </Wrapper>
    )
}

export default Info;