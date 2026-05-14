import { Container, styled, Grid, Typography, Button, Box } from "@mui/material"
import Avatar from "../../../../assets/Images/gru.png"
import DownloadIcon from '@mui/icons-material/Download'
import EmailIcon from '@mui/icons-material/Email'

const StyledHero = styled("section")(({ theme }) => ({
  backgroundColor: "yellow",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center", 
  padding: theme.spacing(4, 0)
}))

const StyledImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%", 
  maxWidth: 340,
  borderRadius: "50%",
  border: "4px solid #fff",
  boxShadow: theme.shadows[4]
}))

const Hero = () => {
  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          
          
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
            <StyledImg src={Avatar} alt="Foto de João Gabriel" />
          </Grid>

        
          <Grid item xs={12} md={7}>
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: { xs: 'center', md: 'flex-start' }, 
                textAlign: { xs: 'center', md: 'left' } 
              }}
            >
              <Typography color="primary" variant="h2" fontWeight="bold" gutterBottom>
                Gru
              </Typography>

              <Typography color="textSecondary" variant="h4" sx={{ mb: 3 }}>
                Vilão Profissional
              </Typography>

            
              <Box 
                sx={{ 
                  display: 'flex', 
                  gap: 2, 
                  flexDirection: { xs: 'column', sm: 'row' },
                  width: { xs: '100%', sm: 'auto' } 
                }}
              >
                <Button 
                  variant="contained" 
                  size="large" 
                  startIcon={<EmailIcon />}
                >
                  Contate-me
                </Button>
                
                <Button 
                  variant="outlined" 
                  size="large" 
                  startIcon={<DownloadIcon />}
                >
                  Baixe um vírus aqui
                </Button>
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </StyledHero>
  )
}

export default Hero