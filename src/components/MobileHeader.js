import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import StarsIcon from '@mui/icons-material/Stars';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';



export default function BottomAppBar() {
  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, bgcolor: "#ffffff" }}>
      <Toolbar>
        <Grid container spacing={9}>
          <Grid item xs={2.6}>
            <IconButton href='#'  sx={{color:"black"}} aria-label="open drawer">
              <Stack alignItems='center' justifyContent='center'>
                < HomeIcon fontSize='small' />
                <Typography sx={{ fontSize: 10 }}>Home</Typography>
              </Stack>
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <IconButton href='#porto'  sx={{color:"black"}} aria-label="open drawer">
              <Stack alignItems='center' justifyContent='center'>
                <DocumentScannerIcon fontSize='small'  />
                <Typography sx={{ fontSize: 10 }}>Portfolio</Typography>
              </Stack>
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <IconButton href='#experience' sx={{color:"black"}} aria-label="open drawer">
              <Stack alignItems='center' justifyContent='center'>
                <StarsIcon fontSize='small'  />
                <Typography sx={{ fontSize: 10 }}>Experience</Typography>
              </Stack>
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <IconButton href='#contact' sx={{color:"black"}} aria-label="open drawer">
              <Stack alignItems='center' justifyContent='center'>
                <PermContactCalendarIcon fontSize='small'  />
                <Typography sx={{ fontSize: 10 }}>Contact</Typography>
              </Stack>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>

  );
}