import {Container, styled , Grid, Typography} from "@mui/material"
import Avatar from "../../../../assets/Images/Screenshot_2.png"

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "purple"
    }))

    const StyledImg = styled("img")(() => ({
        width: "30%",
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
                      <Typography color="primary">João Gabriel Curtinaz Maron</Typography>
                    </Grid>
                </Grid>
            </StyledHero>
        </>
    )
}

export default Hero