import {Container, styled , Grid, Typography} from "@mui/material"
import Avatar from "../../../../assets/Images/Screenshot_2.png"

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "purple"
    }))

    const StyledImg = styled("img")(() => ({
        width: "40%",
        borderRadius: "50%"
    }))

    return (
        <>
            <StyledHero>
                <Container>
                    
                </Container>
                <Grid container spacing={2}>
                    <Grid size={4}>
                        <StyledImg src={Avatar} /> 
                    </Grid>
                    <Grid size={8}>
                      <Typography color="primary" variant="h1">João Gabriel Curtinaz Maron</Typography>
                      <Typography color="primary" variant="h2">Sou alguma coisa</Typography>
                    </Grid>
                </Grid>
            </StyledHero>
        </>
    )
}

export default Hero