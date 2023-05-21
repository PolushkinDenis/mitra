import axios from "axios";
import { IComment } from "../types/IComment";


export const fetchComments = async (postId: number) => await axios.get<IComment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);