import {ReactNode} from "react";
import { Container } from "./Container";
import styled from "styled-components";

const Wrapper = styled.main`
    padding: 2rem 0;

    @media (min-width: 767px) {
        padding: 4rem 0;
    }
`;

interface MainProps {
    children: ReactNode
}

const Main = ({children}: MainProps) => {
    return (
        <Wrapper>
            <Container>
                {children}
            </Container>
        </Wrapper>
    )
}

export default Main;