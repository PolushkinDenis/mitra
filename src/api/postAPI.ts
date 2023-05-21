import axios from "axios";
import { IPost } from "../types/IPost";

export const fetchPost = () => axios.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts`);

export const fetchUserPost = (userId: string) => axios.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
