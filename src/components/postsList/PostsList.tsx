import { FC, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Card } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import avatar from '../../images/avatar.png'
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom'
import { IPost } from '../../types/IPost';
import { getComments } from '../../store/comments/commentsSlice';
import { useStoreDispatch } from '../../store';
import { useAppSelector } from '../../hooks/redux';

interface PostsListProps {
    posts: IPost[],
    userId?: string
}

const PostsList: FC<PostsListProps> = ({ posts, userId }) => {
    const [clickId, setClickId] = useState<number[]>([])
    const { comments } = useAppSelector(state => state.commentsSlice)
    const dispatch = useStoreDispatch()
    const navigte = useNavigate()

    // Преход на страницу пользователя
    const routToUser = (id: number) => {
        navigte(`/user/${id}`)
    }

    //Подгрузка комментарий
    const fetchComments = (id: number) => {
        //Проверка, чтобы не оправлять запрос для одного и тогоже поста
        if(clickId.filter(click => click === id).length === 0) { 
            dispatch(getComments(id.toString()))
            setClickId([...clickId, id])
        }    
    }

    return (
        <Container>
            <Row>
                {posts.map((post) => (
                    <Col className="mb-3" key={post.id}>
                        <Card style={{ width: '18rem' }}>
                            {!userId && ( //Только для страницы "Посты"
                                <Card.Img role="button" variant="top" src={avatar} onClick={e => routToUser(post.userId)} />
                            )}
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>
                                    {post.body}
                                </Card.Text>
                                <Accordion>
                                    <Accordion.Header onClick={e => fetchComments(post.id)}>Комментарии</Accordion.Header>
                                    <Accordion.Body>
                                        {/* Фильтрация комментариев к конкретному посту */}
                                        {comments.filter(comment => comment.postId === post.id).map((comment) => (
                                            <Card key={comment.id}>
                                                <Card.Body>
                                                    <Card.Title>{comment.email}</Card.Title>
                                                    <Card.Text>{comment.body}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        ))}
                                    </Accordion.Body>
                                </Accordion>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default PostsList