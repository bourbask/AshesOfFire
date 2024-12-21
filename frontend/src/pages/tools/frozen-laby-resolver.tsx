import * as React from 'react'

import FrozenLabyResolver from '../../components/Tools/FrozenLabyResolver/FrozenLabyResolver';
import WorkInProgress from '../../components/Common/WorkInProgress/WorkInProgress';

const FrozenLabyResolverPage: React.FunctionComponent = () => {
    return (
        <>
            <WorkInProgress status='wip'/>
            <FrozenLabyResolver />
        </>
    )
}

export default FrozenLabyResolverPage