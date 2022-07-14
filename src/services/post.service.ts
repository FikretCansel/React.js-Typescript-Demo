import axios,{AxiosResponse,AxiosRequestConfig} from "axios";
import { PostModel } from "../models/postModel";


export class PostService {


    apiUrl="https://jsonplaceholder.typicode.com/posts";
  
    getAllPosts():Promise<AxiosResponse<PostModel[]>>{
        return axios.get(this.apiUrl);
    }

    addPost(post:PostModel):Promise<AxiosRequestConfig>{
        return axios.post(this.apiUrl,post);
    }
    
  }