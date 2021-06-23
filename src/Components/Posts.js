import React from 'react'
import {PostData} from '../Data/PostData';

export default function Posts() {
    return (
        <div>
            {PostData.map((post, index)=> {
        return (
             <div className="bgPostColor">
                <div className="navContainer">
                    <div className="box2">
                        <div className="post borderPost">
                            <div className="postImg"></div>
                            <div>
                                <h1>{post.title}</h1>
                                <p>{post.start_at}</p>
                            </div>
                        </div>
                        {post.image &&
                        <div className="borderPost">
                            <div className="toAttachImg" style={{backgroundImage: `url(${post.image})`}}></div>
                        </div>
                        }
                        {console.log(post.image)}
                        <div className="DownBorderPost">
                            <p>{post.content}</p>
                            <div className="icons">
                                <i className="far fa-lg fa-thumbs-up"><p>Me gusta</p></i>
                                <i className="far fa-lg fa-comments"><p>Ver comentarios</p></i>
                            </div>
                            <textarea placeholder="Escribe un comentario..."></textarea>
                        </div>
                    </div>
                </div>
            </div>
                )
            })}
        </div>
    )
}
