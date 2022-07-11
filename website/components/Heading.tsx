import "@navikt/ds-css";
import "@navikt/ds-css-internal";
import {Header} from "@navikt/ds-react-internal";

export default function Heading() {
    return (
        <Header>
            <Header.Title as="h1">Sykepenger</Header.Title>
             <Header.User name="Ola Normann" />
        </Header>
    )
}
