import { Box, Container, List, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { HeaderMobile } from './headerMobile';
import { HeaderDesktop } from './headerDesktop';

export const Header: React.FC = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box>
            {matches ? <HeaderMobile /> : <HeaderDesktop />}
        </Box>
    );
};