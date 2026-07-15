import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const CardComponent = ({
    title,
    description,
    cardStyles
}) => {
    return (
        <Card sx={{
            width: '25%',
            border: '2px solid grey',
            borderRadius: '15px',
            ...cardStyles
        }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardComponent