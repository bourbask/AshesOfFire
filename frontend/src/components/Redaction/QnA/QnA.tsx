import * as React from 'react'

import { Box, Typography } from '@mui/material';

type QnAProps = {
    content: Array<string>;
};

const QnA: React.FunctionComponent<QnAProps> = ({ content }) => {
    return <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }}>
        {content.map((element, index) => {
            if (index % 2) {
                return <Typography variant='body1' sx={{
                    left: 0,
                }}>{element}</Typography>
            }

            return <Typography variant='body2' sx={{
                    right: 0,
                }}>{element}</Typography>
        })}
    </Box>
}

export default QnA