import * as React from 'react'

import { Box, Typography } from '@mui/material'

type WorkInProgressProps = {
    status: 'soon' | 'wip' | 'next';
}

const WorkInProgress: React.FunctionComponent<WorkInProgressProps> = ({
    status,
}) => {
    const content = React.useMemo(() => {
        if (status === 'wip') {
            return <Typography>En cours de développement !</Typography>
        }

        if (status === 'next') {
            return <Typography>Prochaine fonctionnalité à arriver...</Typography>
        }

        return <Typography>Bientôt ! Juste pas encore dans le planning.</Typography>;
    }, [status]);

    return (
       <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
       }}>
            {content}
       </Box>
    )
}

export default WorkInProgress;