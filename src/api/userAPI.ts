import axios from "axios";
import { IUser } from "../types/IUser";

export const fetchUser = async (userId: number) => await axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/users/${userId}`);