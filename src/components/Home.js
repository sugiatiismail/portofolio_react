import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../tes.css';
import contact from '../image/contact.png';
import MobileHeader from "./MobileHeader";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Chip from '@mui/material/Chip';
import useMediaQuery from '@mui/material/useMediaQuery';
import DrawerComp from "./DrawerComp";

const Home = () => {


    let theme = createTheme({
        palette: {
            primary: {
                main: '#0052cc',
            },
            secondary: {
                main: '#ffffff',
            },
            black: {
                main: '#000000',
            },
        },
    });


    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <ThemeProvider theme={theme}>
            <Box pb={5}>
                <section id="home">

                    <Box sx={{ backgroundColor: '#f5f7fc', pt: isDesktop ? 5 : '', pb: isDesktop ? 15 : 5 }}>
                        {isDesktop ?
                            <Container >
                                <Grid container>
                                    <Grid item xs>
                                        <Stack direction={'row'} mt={1} ml={2} spacing={1}>
                                            <IconButton
                                                size="small"
                                                disableRipple
                                                href='https://api.whatsapp.com/send?phone=6282386523307'
                                                sx={{ backgroundColor: '#000000' }}
                                                aria-label='FacebookIcon'>
                                                <WhatsAppIcon sx={{ color: '#fff' }} />
                                            </IconButton>
                                            <IconButton
                                                size="small"
                                                disableRipple
                                                href='https://www.instagram.com/dapurcreator/?hl=id'
                                                sx={{ backgroundColor: '#000000' }}
                                                aria-label='InstagramIcon'>
                                                <InstagramIcon sx={{ color: '#fff' }} />
                                            </IconButton>
                                            <IconButton
                                                size="small"
                                                disableRipple
                                                href='https://www.youtube.com/c/dapurCreator'
                                                sx={{ backgroundColor: '#000000' }}
                                                aria-label='YouTubeIcon'>
                                                <YouTubeIcon sx={{ color: '#fff' }} />
                                            </IconButton>
                                            <IconButton
                                                size="small"
                                                disableRipple
                                                href='https://github.com/sugiatiismail'
                                                sx={{ backgroundColor: '#000000' }}
                                                aria-label='GitHubIcon'>
                                                <GitHubIcon sx={{ color: '#fff' }} />
                                            </IconButton>
                                        </Stack>
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={12} xs={12}>
                                        <Stack direction={'row'} spacing={3}>
                                            <a className="button" href="#home">Home</a>
                                            <a className="button" href="#porto">Portfolio</a>
                                            <a className="button" href="#experience">Experience</a>
                                            <a className="button" href="#contact">Contact</a>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Container>
                            :
                            <DrawerComp />
                        }
                        <Container >
                            <Grid container maxWidth="lg" mt={isDesktop ? 20 : ''} spacing={2} alignItems='center'>
                                <Grid item md={7} lg={7} sm={12} xs={12}  >

                                    <Stack spacing={4}>
                                        <Typography variant={isDesktop ? "h1" : "h4"} fontWeight={isDesktop ? 400 : 600}>Ismail Halawa</Typography>
                                        <Typography variant={isDesktop ? "h5" : "subtitle2"} >Front End Developer, | HTML | CSS | JavaScript | ReactJS</Typography>
                                        <Stack direction={'row'} spacing={2} justifyContent={isDesktop ? '' : 'center'}>
                                            <Button href="#porto" color="error" variant="contained">See My Portfolio</Button>
                                            <Button color="secondary" variant="contained">Contact</Button>
                                        </Stack>
                                    </Stack>

                                </Grid>
                                <Grid item xs >
                                    <Stack spacing={2} alignItems='center'>
                                        <Box sx={{ width: isDesktop ? 400 : 200, mt: isDesktop ? 0 : 10 }}>
                                            <img style={{ width: '100%' }}
                                                src="https://ismailhalawa.netlify.app/img/profil.png"
                                                alt="new"
                                            />
                                        </Box>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </section>
                <section id="porto" className="section">
                    <Box sx={{ backgroundColor: '#ffffff' }}>
                        <Container>
                            <Grid container mt={isDesktop ? 15  : 1}  >
                                <Grid item xs>
                                    <Stack spacing={2}>
                                        <Stack spacing={8}>
                                            <Typography variant={isDesktop ? "h3" : "h4"} fontWeight={500}>Portfolio</Typography>
                                            <Typography variant="h1" color={'#dddddd'} fontWeight={700} >01</Typography>
                                        </Stack>
                                        <Typography variant="h5" fontWeight={500} >Cloning Sayur Box Website</Typography>
                                        <Typography variant="subtitle1" fontSize={18}>Sayur Box - Situs belanja online, Kebutuhan segar sehari hari..</Typography>
                                        <Stack direction={'row'} spacing={2} justifyContent={isDesktop ? '' : 'center'}>
                                            <Button href="https://friendly-mirzakhani-1b31f1.netlify.app/" color="error" variant="contained">See My Website</Button>
                                        </Stack>
                                    </Stack>
                                </Grid>

                                <Grid item md={5} lg={5} sm={12} xs={12}>
                                    <Stack alignItems='center'>
                                        <Box className="animasi" sx={{ width: 300, mt: isDesktop ? 15 : 5 }}>
                                            <img style={{ width: '100%' }}
                                                src="https://ismailhalawa.netlify.app/img/foodbox.png"
                                                alt="foodbox"
                                            />
                                        </Box>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Container>
                        <Container>
                            <Grid container mt={isDesktop ? 20 : 5} mb={isDesktop ? 15 : 4}>
                                <Grid item xs>
                                    <Stack spacing={2}>
                                        <Typography variant="h1" color={'#dddddd'} fontWeight={700} >02</Typography>
                                        <Typography variant="h5" fontWeight={500} >Make Website Hasanah Islamic Daycare</Typography>
                                        <Typography variant="subtitle1" fontSize={18}>Hasanah Islamic Daycare - Mengasihi, Menyayangi, Sepenuh Hati..</Typography>
                                        <Stack direction={'row'} spacing={2} justifyContent={isDesktop ? '' : 'center'}>
                                            <Button href="https://brave-ramanujan-9231eb.netlify.app/" color="error" variant="contained">See My Website</Button>
                                        </Stack>
                                    </Stack>
                                </Grid>
                                <Grid item md={5} lg={5} sm={12} xs={12}>
                                    <Stack alignItems='center'>
                                        <Box className="animasi" sx={{ width: 300, mt: isDesktop ? 0 : 5}}>
                                            <img style={{ width: '100%' }}
                                                src="https://ismailhalawa.netlify.app/img/hasanah.png"
                                                alt="foodbox"
                                            />
                                        </Box>
                                    </Stack>

                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </section>

                <section id="experience" className="section-ex">
                    <Box sx={{ backgroundColor: '#f5f7fc', pt: isDesktop ? 15 : 5, pb: isDesktop ? 15 : 5 }}>

                        <Typography variant={isDesktop ? "h3" : "h4"} textAlign={'center'} mb={isDesktop ? 20 : 5} fontWeight={500}>Experience</Typography>
                        <Container>
                            <Grid container spacing={2}>
                                <Grid item md={3} lg={3} sm={12} xs={12}  >
                                    <Stack spacing={4}>
                                        <Typography variant="h5" fontWeight={500} >SKILLS:</Typography>
                                        <Stack direction={'row'} spacing={1}>
                                            <CheckCircleOutlineIcon sx={{ color: '#51c2e0' }} />
                                            <Typography variant="subtitle1" fontSize={18} >HTML</Typography>
                                        </Stack>
                                    </Stack>
                                    <Stack direction={'row'}  spacing={1}>
                                        <CheckCircleOutlineIcon sx={{ color: '#51c2e0' }} />
                                        <Typography variant="subtitle1" fontSize={18} >CSS</Typography>
                                    </Stack>
                                    <Stack direction={'row'} spacing={1}>
                                        <CheckCircleOutlineIcon sx={{ color: '#51c2e0' }} />
                                        <Typography variant="subtitle1" fontSize={18} >JAVASCRIPT</Typography>
                                    </Stack>
                                    <Stack direction={'row'} spacing={1}>
                                        <CheckCircleOutlineIcon sx={{ color: '#51c2e0' }} />
                                        <Typography variant="subtitle1" fontSize={18} >REACT</Typography>
                                    </Stack>
                                    <Stack direction={'row'} spacing={1}>
                                        <CheckCircleOutlineIcon sx={{ color: '#51c2e0' }} />
                                        <Typography variant="subtitle1" fontSize={18} >FLUTTER</Typography>
                                    </Stack>
                                    <Stack direction={'row'} spacing={1}>
                                        <CheckCircleOutlineIcon sx={{ color: '#51c2e0' }} />
                                        <Typography variant="subtitle1" fontSize={18} >Material Ui</Typography>
                                    </Stack>
                                    <Stack direction={'row'} spacing={1}>
                                        <CheckCircleOutlineIcon sx={{ color: '#51c2e0' }} />
                                        <Typography variant="subtitle1" fontSize={18} >Adobe Premier Pro</Typography>
                                    </Stack>
                                    <Stack direction={'row'} spacing={1}>
                                        <CheckCircleOutlineIcon sx={{ color: '#51c2e0' }} />
                                        <Typography variant="subtitle1" fontSize={18} >Adobe After Effect</Typography>
                                    </Stack>
                                    <Stack direction={'row'} spacing={1}>
                                        <CheckCircleOutlineIcon sx={{ color: '#51c2e0' }} />
                                        <Typography variant="subtitle1" fontSize={18} >Adobe Photoshop</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item md={5} lg={5} sm={12} xs={12}>
                                    {/* <div class="animasi"> */}
                                    <Box
                                        className="animasi"
                                        sx={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            '& > :not(style)': {
                                                m: 1,
                                                width: 350,
                                                height: 350,
                                            },
                                        }}
                                    >
                                        <Paper elevation={3} >
                                            <Box sx={{ width: 350 }}>
                                                <img style={{ width: '100%' }}
                                                    src="https://ismailhalawa.netlify.app/img/react.png"
                                                    alt="foodbox"
                                                />
                                            </Box>
                                            <Box pt={2} pl={2}>
                                                <Chip label="react js" color="success" />
                                                <Typography variant="h6" fontWeight={500} >1 Year Experience</Typography>
                                            </Box>
                                        </Paper>
                                    </Box>
                                    {/* </div> */}
                                </Grid>
                                <Grid item xs>
                                    <Box
                                        className="animasi"
                                        sx={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            '& > :not(style)': {
                                                m: 1,
                                                width: 350,
                                                height: 350,
                                            },
                                        }}
                                    >
                                        <Paper elevation={3} >
                                            <Box sx={{ width: 350 }}>
                                                <img style={{ width: '100%' }}
                                                    src="https://ismailhalawa.netlify.app/img/flutter.png"
                                                    alt="foodbox"
                                                />
                                            </Box>
                                            <Box pt={2} pl={2}>
                                                <Chip label="flutter" color="success" />
                                                <Typography variant="h6" fontWeight={500} >1 Year Experience</Typography>
                                            </Box>
                                        </Paper>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </section>
                <section id="contact" className="section-contact">
                    <Container>
                        <Box sx={{ backgroundColor: '#ddecff' }} borderRadius={5} paddingLeft={5} paddingBottom={0.1}>
                            <Grid container mt={isDesktop ? 20 : 5} mb={10} spacing={2}>
                                <Grid item lg={6}md={6}sm={12}xs={12}>
                                    <Stack spacing={2}>
                                        <Stack spacing={8}>
                                            <Typography variant={isDesktop ? "h3" : "h4"} fontWeight={500}>Contact</Typography>
                                            <Typography variant={isDesktop ? "h2" : "h4"} fontWeight={isDesktop ? 700 : 600} color={'#rgbfgt'} >Ismail Halawa</Typography>
                                        </Stack>
                                        <Typography variant="h5" fontWeight={500} >SUMMARY</Typography>
                                        <Typography variant="subtitle1" fontSize={18}>I was born on June 26 th. 1995 in Kab. Asahan I like to learn new things and like challenges..</Typography>
                                        <Typography variant="h5" fontWeight={500} >CONTACT PERSON</Typography>
                                        <Typography variant="subtitle1" fontSize={18}>+6282386523307</Typography>
                                        <Typography variant="subtitle1" fontSize={18}>sugiatiismail@gmail.com</Typography>
                                        <Typography variant="subtitle1" fontSize={18}>Dumai City</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs>
                                    <Box sx={{ width: isDesktop ? 500 : 300, mt: isDesktop ? 10 : 1 }}>
                                        <img src={contact} alt="contact" style={{ width: '100%' }} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </section>
                {isDesktop ?
                    <Box paddingTop={18} >
                        <Container >
                            <Grid container spacing={1}>
                                <Grid item xs={2}>
                                    <Typography paddingLeft={1} fontSize='16px' color='#4D4D4D' fontWeight='bold'>Home</Typography>
                                    <Button href='#home' variant="text" sx={{ textTransform: 'none', color: '#4D4D4D' }}>Back to Top</Button>
                                </Grid>

                                <Grid item xs={3.7}>
                                    <Typography  fontSize='16px' color='#4D4D4D' fontWeight='bold'>Contact us</Typography>
                                    <Stack>
                                    <Typography variant="text" sx={{ textTransform: 'none', color: '#4D4D4D' }}>Jl Pertanian No 30, Dumai City</Typography>
                                    <Typography variant="text" sx={{ textTransform: 'none', color: '#4D4D4D' }}>sugiatiismail@gmail.com</Typography>
                                    <Typography variant="text" sx={{ textTransform: 'none', color: '#4D4D4D' }}>082386523307</Typography>
                                    </Stack>
                                </Grid>

                                <Grid item xs={3}>
                                    <Typography fontSize='16px' color='#4D4D4D' fontWeight='bold'>Portfolio</Typography>
                                    <Stack>
                                    <Typography variant="text" sx={{ textTransform: 'none', color: '#4D4D4D' }}>Cloning Sayur Box Website</Typography>
                                    <Typography variant="text" sx={{ textTransform: 'none', color: '#4D4D4D' }}>Make Website Hasanah Islamic Daycare</Typography>
                                    </Stack>
                                </Grid>

                                <Grid item xs>
                                    <Typography fontSize='16px' color='#4D4D4D' textAlign={'end'} fontWeight='bold'>Experience</Typography>
                                    <Typography fontSize={15} textAlign='end' mb={2} > Copyright 2020 Ismail halawa</Typography>

                                </Grid>
                            </Grid>

                        </Container>
                    </Box >
                    : <MobileHeader />}
            </Box>
        </ThemeProvider>
    );
};



export default Home;