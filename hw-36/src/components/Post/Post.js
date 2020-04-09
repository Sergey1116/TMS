import React from 'react'

import './Post.scss'



export default function HelloWorld({ post }) {
    return (
        <div className="post">
            <h3 className="post__title">{post.title}</h3>
            <p className="post__text">{post.text}</p>
            <p className="post__user-name">{post.user}</p>
        </div>
    )
}
