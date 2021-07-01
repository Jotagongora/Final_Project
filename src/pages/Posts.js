import React, {useEffect, useState} from 'react'

export default function Posts() {

    const [post, setPost] = useState([]);

    
    
    const option = [
        { 
            headers: [
                {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Bearer +${localStorage.getItem("TOKEN_KEY")}`
            }]}];

    useEffect(() => {
        fetch("http://localhost:8000/api/12", option)
        .then(response => response.json())
        .then(data => console.log(data))
        }, [post]);

        
    return (
        <div>
            {post.map((post, index)=> {
        return (
             <div className="bgPostColor">
                <div className="navContainer">
                    <div className="box2">
                        <div className="post borderPost">
                            <div className="postImg"></div>
                            <div>
                                <h1>{post.title}</h1>
                                <p>{post.created_at}</p>
                            </div>
                        </div>
                        {post.post_img &&
                        <div className="borderPost">
                            <div className="toAttachImg" style={{backgroundImage: `url(${post.post_img})`}}></div>
                        </div>
                        }
                        <div className="DownBorderPost">
                            <p>{post.content_text}</p>
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
