import { FC, useEffect } from 'react'
import { useStoreDispatch } from '../../store'
import { useAppSelector } from '../../hooks/redux'
import { getPosts } from '../../store/posts/postSlice'
import PostsList from '../../components/postsList/PostsList';
import Loader from '../../components/loader/Losder';

const Posts: FC = () => {
    const {posts, loading} = useAppSelector(state => state.postSlice)
    const dispatch = useStoreDispatch()

    //Загрузка постов
    useEffect(() => {
        dispatch(getPosts())
    }, [])

    console.log(posts)

    if (loading) {
        return (
           <Loader />
        )
    }

    return (
        <PostsList posts={posts}/>
    )
}

export default Posts