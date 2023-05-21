import React, { FC } from 'react'
import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const AboutMe: FC = () => {
    return (
        <Container>
            <Card className='m-auto mb-3'>
                <Card.Body>
                    <Card.Title className="text-center">Полушкин Денис</Card.Title>
                    <Card.Text>
                        <ListGroup>
                            <ListGroup.Item>Email: tigraszver@gmail.com</ListGroup.Item>
                            <ListGroup.Item>Город: Самара</ListGroup.Item>
                            <ListGroup.Item>
                                <p>Навыки: React, React Hooks, Redux, Redux Toolkit, HTML, CSS, JavaScript (ES6),TypeScript, SQL, Postgresql, MongoDB.
                                    Тестирование на Jest.</p>
                                <p>Использовал компоненты пользовательского интерфейса из библиотеки Material UI.</p>
                                <p>CSS-препроцессоры: SCSS/SASS.</p>
                                <p>Немного работал с беком. А именно с Node.js, Express</p>
                                <p>На github представлены некоторые pet-проекты https://github.com/PolushkinDenis</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>

    )
}

export default AboutMe