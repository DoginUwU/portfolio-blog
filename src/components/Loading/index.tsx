import React from 'react';
import ReactLoading from 'react-loading';

import { Container } from './styles';

const Loading: React.FC = () => (
    <Container>
        <ReactLoading type="spin" color="#000" />
    </Container>
);

export default Loading;
