import React from 'react'
import { PostModel } from '../models/postModel'


type CardProf={
  post:PostModel
}

function Card({post}:CardProf) {
  return (
    <div>{post.title}</div>
  )
}

export default Card