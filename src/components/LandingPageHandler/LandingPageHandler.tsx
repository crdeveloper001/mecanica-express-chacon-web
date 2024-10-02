import AboutPage from '../AboutPage/AboutPage'
import InitialPage from '../InitialPage/InitialPage'
import Container from '@mui/material/Container'

const LandingPageHandler = () => {
    return (
        <>

            <Container disableGutters style={{ maxWidth: '100%' }}>
                <InitialPage />
                <AboutPage />
            </Container>

        </>
    )
}

export default LandingPageHandler