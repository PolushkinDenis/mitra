import React, { FC, useEffect } from 'react'
import { useAppSelector } from '../../hooks/redux'
import { getUsers } from '../../store/user/userSlice'
import { useStoreDispatch } from '../../store/index'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import avatar from '../../images/avatar.png'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import PostsList from '../../components/postsList/PostsList'
import Loader from '../../components/loader/Losder'
import Container from 'react-bootstrap/Container';

type UserParams = {
    id: string;
};

const User: FC = () => {
    const { posts, user, loading } = useAppSelector(state => state.userSlice)
    const userId = useParams<UserParams>().id
    const dispatch = useStoreDispatch()
    const navigte = useNavigate()

    //Загрузка пользователей
    useEffect(() => {
        dispatch(getUsers(userId))
    }, [])

    if (loading) {
        return (
           <Loader />
        )
    }

    return (
        <Container>
            <Button variant="primary" onClick={e => navigte(-1)}>Назад</Button>
            <div>
                <Card style={{ width: '21rem' }} className='m-auto mb-3'>
                    <Card.Img variant="top" src={avatar} />
                    <Card.Body>
                        <Card.Title className="text-center">{user?.name}</Card.Title>
                        <Card.Text>
                            <ListGroup>
                                <ListGroup.Item>Логин: {user?.username}</ListGroup.Item>
                                <ListGroup.Item>Email: {user?.email}</ListGroup.Item>
                                <ListGroup.Item>Город: {user?.address.city}</ListGroup.Item>
                                <ListGroup.Item>Телефон: {user?.phone}</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <PostsList posts={posts} userId={userId} />
        </Container>
    )
}

export default User