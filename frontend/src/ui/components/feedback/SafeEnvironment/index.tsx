import React from 'react';
import  { SafeEnvironmentContainer }  from './SafeEnvironment.style';
import { Container } from '@mui/material';

const SafeEnvironment = () => {
    return (
        <div>
        <SafeEnvironmentContainer>
        <Container>
            Ambiente Seguro <i className={'twf-lock'} />
        </Container>
        </SafeEnvironmentContainer>
        </div>
    )
}
export default SafeEnvironment;