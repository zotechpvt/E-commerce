import { Accordion, AccordionDetails, AccordionSummary, Box, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from "@mui/icons-material/Menu";
import Link from 'next/link';
import Badge from '@mui/material/Badge';
import { Colors } from '../theme/theme';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const HeaderMobile: React.FC = () => {
    return (
        <>
            <Accordion className='headermobileContainer'>

                <Box className='headermobile' >
                    <AccordionSummary >
                        <IconButton className='headerMenuIcon'>
                            {/* <Typography color={'black'}
                                sx={{ paddingLeft: { xs: '20px', sm: '60px' } }}  >Menu</Typography> */}
                            <MenuIcon />
                        </IconButton>
                    </AccordionSummary>
                    <Box className='headerTitle' sx={{
                        width: {
                            xs: '70%', sm: '80%'
                        }
                    }}>
                        <Typography variant='h5' color={Colors.info} fontWeight={'bold'}>COLOSHOP</Typography>

                    </Box>
                    {/* <List sx={{ alignItems: 'center', display: 'flex', cursor: 'pointer', width: { sm: '20%', } }}>
                        <ListItemButton
                            sx={{
                                justifyContent: 'center'
                            }}>
                            <ListItemIcon sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <SearchIcon />
                            </ListItemIcon>
                            <ListItemIcon sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemIcon sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <Badge badgeContent={2} color="primary">
                                    <ShoppingCartIcon color="action" />
                                </Badge>
                            </ListItemIcon>
                        </ListItemButton>
                    </List> */}
                </Box>
                <Box className='listContainer'>

                    <AccordionDetails>
                        <List className='headerList'>
                            <Link href='/'>
                                <ListItemText primary='Home' className='headerListItem' />
                            </Link>
                            <Link href=''>
                                <ListItemText primary='Shop' className='headerListItem' />
                            </Link>
                            <Link href=''>
                                <ListItemText primary='Collaction' className='headerListItem' />
                            </Link>
                            <Link href=''>
                                <ListItemText primary='Blog' className='headerListItem' />
                            </Link>
                            <Link href='/contact'>
                                <ListItemText primary='Contact' className='headerListItem' />
                            </Link>
                            <Link href='' >
                                <Accordion sx={{
                                    color: 'white', boxShadow: 'none',
                                    background: 'border-box', alignItems: 'center',
                                    marginTop: '-10px'
                                }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <ListItemText primary='Pages' className='headerListItem pages' />
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ marginTop: '-10px' }}>
                                        <Link href='/shoppingcart'>
                                            <ListItemText primary='Shopping Cart' className='headerListItem' />
                                        </Link>
                                        <Link href='/checkout'>
                                            <ListItemText primary='Check Out' className='headerListItem' />
                                        </Link>
                                        <Link href='/faqs'>
                                            <ListItemText primary='FAQs' className='headerListItem' />
                                        </Link>
                                    </AccordionDetails>
                                </Accordion>
                            </Link>
                        </List>
                    </AccordionDetails>

                </Box>
            </Accordion>
        </>
    );
};