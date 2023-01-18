import { Button, Slide, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Fade from 'react-reveal/Fade';
import { itemData } from './promotionData';

const PromotionsMobile = () => {
    const containerRef = useRef<HTMLInputElement>(null);
    const [show, setShow] = useState<Boolean>(true)
    const [itemIndex, setItemIndex] = useState<number>(0)

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 4000);
        const intervalId = setInterval(() => {
            setItemIndex(i => (i + 1) % itemData.length)
            setShow(true)
            setTimeout(() => {
                setShow(false)
            }, 4000);
        }, 5000)
        return () => {
            clearInterval(intervalId);
        }
    }, [])
    return (
        <Box className='promotionsMobile'>
            <Box className='promotionLeftRightIcon'>

                <ChevronLeftIcon fontSize='large'
                    onClick={() => setItemIndex(i => (i + 1) % itemData.length)} />
                <ChevronRightIcon fontSize='large'
                    onClick={() => setItemIndex(i => (i + 1) % itemData.length)} />
            </Box>
            <Slide
                container={containerRef.current}
                direction={show ? "left" : "right"}
                in={show}
                timeout={{
                    enter: 500,
                    exit: 100
                }}>
                <Box className='promotionsSlider'>
                    {show && <Fade bottom big>
                        <Box className='promotionsText'>
                            <Typography variant='h2' mt={2} ml={3}>
                                {itemData[itemIndex].title}
                            </Typography>
                            <Typography variant='subtitle1' mt={2} ml={3}>
                                {itemData[itemIndex].sub1}
                            </Typography>
                            <Button variant='contained' className='promotionsBtn'>Shop now</Button>
                        </Box>
                    </Fade>}

                    <Box className='promotionsImgContainer'>
                    </Box>
                </Box>
            </Slide>

        </Box>
    )
}

export default PromotionsMobile