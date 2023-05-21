import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

const Loader = () => {
    return (
        <Container className='m-auto mt-5' style={{ width: '4rem' }}>
            <Spinner animation="border" variant="primary" />
        </Container>
    )
}

export default Loader