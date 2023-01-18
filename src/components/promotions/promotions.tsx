import { useMediaQuery } from '@mui/material'
import { useTheme } from "@mui/material/styles";
import React from 'react';
import PromotionsDesktop from './promotionsDesktop';
import PromotionsMobile from './promotionsMobile';

const Promotions = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));


    return (
        <div>
            {matches ? <PromotionsMobile /> : <PromotionsDesktop />}

        </div>
    )
}

export default Promotions