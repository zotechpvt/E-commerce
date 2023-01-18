import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import AnimationIcon from '@mui/icons-material/Animation';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import WebhookIcon from '@mui/icons-material/Webhook';
import HouseboatIcon from '@mui/icons-material/Houseboat';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

function PartnersLogo() {
    return (
        <Box className='partnersLogoContainer'>
        <Box className='partnersLogoItem'>
            {/* <Image src='/50off.jpeg' alt='partnersLogo' width={50} height={50} /> */}
            <Box className='partnersLogo'>
                <AnimationIcon className='logo' fontSize='large' />
                <Typography variant='subtitle1' ml={2}>BanToni</Typography>
            </Box>
            <Box className='partnersLogo'>
                <MotionPhotosAutoIcon className='logo' fontSize='large' />
                <Typography variant='subtitle1' ml={2}>vCrop</Typography>
            </Box>
            <Box className='partnersLogo'>
                <WebhookIcon className='logo' fontSize='large' />
                <Typography variant='subtitle1' ml={2}>Alitume</Typography>
            </Box>
            <Box className='partnersLogo'>
                <HouseboatIcon className='logo' fontSize='large' />
                <Typography variant='subtitle1' ml={2}>Zokota</Typography>
            </Box>
            <Box className='partnersLogo'>
                <ElectricBoltIcon className='logo' fontSize='large' />
                <Typography variant='subtitle1' ml={2}>Vicinck</Typography>
            </Box>
        </Box>
        </Box>
    )
}

export default PartnersLogo