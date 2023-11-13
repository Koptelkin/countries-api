import { useNavigate } from "react-router";
import { useCountries } from "./use-countries";
import { List } from "components/List";
import { CountryInfo } from "types";
import { Card } from "components/Card";


const CountryList = () => {
    const navigate = useNavigate();

    const [countries, {status, error}] = useCountries();

    return (
        <>
            {error && <h2>Can't fetch data</h2>}
            {status === 'loading' && <h2>Loading...</h2>}
            {status === 'received' && (
                <List>
                    {countries.map((el) => {
                        const countryInfo: CountryInfo = {
                            img: el.flags.png,
                            name: el.name,
                            info: [
                                {
                                    title: 'Population',
                                    description: el.population.toLocaleString(),
                                },
                                {
                                    title: 'Region',
                                    description: el.region,
                                },
                                {
                                    title: 'Capital',
                                    description: el.capital,
                                }
                            ]
                        };

                        return <Card
                            key={el.name}
                            onClick={() => void navigate(`/country/${el.name}`)}
                            {...countryInfo}
                        />
                    })}
                </List>
            )}
        </>
    )
}

export default CountryList;