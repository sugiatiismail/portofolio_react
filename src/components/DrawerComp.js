import React, { useState } from 'react'
import { Drawer, Grid, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import StarsIcon from '@mui/icons-material/Stars';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';


const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState();

    return (
        <React.Fragment>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} anchor={'right'}>
                <List>
                    <ListItemButton href='#' onClick={() => setOpenDrawer(!openDrawer)}>
                        <ListItemIcon >
                            <HomeIcon />
                            <Typography fontSize={16} ml={1}>
                                Home
                            </Typography>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton href='#porto' onClick={() => setOpenDrawer(!openDrawer)} >
                        <ListItemIcon>
                            <DocumentScannerIcon />
                            <Typography fontSize={16} ml={1}>
                                Portfolio
                            </Typography>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton href='#experience' onClick={() => setOpenDrawer(!openDrawer)} >
                        <ListItemIcon>
                            <StarsIcon />
                            <Typography fontSize={16} ml={1}>
                                Experience
                            </Typography>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton href='#contact' onClick={() => setOpenDrawer(!openDrawer)} >
                        <ListItemIcon>
                            <PermContactCalendarIcon />
                            <Typography fontSize={16} ml={1}>
                                Contact
                            </Typography>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Drawer>
            <Grid container>
                <Grid item xs></Grid>
                <Grid item xs={1.5}>
                    <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                        <MenuIcon />
                    </IconButton>
                </Grid>

            </Grid>
        </React.Fragment>
    )
}

export default DrawerComp;