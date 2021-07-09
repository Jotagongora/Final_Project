import React, {useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode';

export default function Posts() {

    const [post, setPost] = useState([]);

    const [user, setUser] =  useState([]);

    const token = localStorage.getItem('TOKEN_KEY');

    let decodedT = jwt_decode(token);

    const AuthStr = 'Bearer '.concat(token);
    
    
    const option = 
        { headers: 
            {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': AuthStr,
            
            }};

        useEffect(() => {
            fetch("http://localhost:8000/api/17", option)
            .then(response => response.json())
            .then(data => setUser(data))
            }, []);

        useEffect(() => {
            fetch("http://localhost:8000/api/17", option)
            .then(response => response.json())
            .then(data => setPost(data.posts))
            }, []);

    console.log(post);
    console.log(user);
            
    return (
        <div>
            <div className="bgPostColor">
                <div className="navContainer">
                    <div className="box2">
                        <form className="borderPost">
                            <textarea placeholder="Título" className="" name="newPost" id="" cols="30" rows="20"></textarea>
                            <textarea placeholder="Escribe lo que te apetezca aquí..." className="newPost" name="newPost" id="" cols="30" rows="20"></textarea>
                            <label htmlFor="attachImgFile"><i className="attachIcon fas fa-paperclip"></i></label>
                            <input className="attachImgButton" id="attachImgFile" type="file"/>     
                        </form>
                        <div className="DownBorderPost">
                            <button>Publicar</button>
                        </div>
                    </div>
                </div>
                
            </div>
            {post.map((post, index)=> {
        return (
             <div className="bgPostColor">
                <div className="navContainer">
                    <div className="box2">
                        <div className="post borderPost">
                            <div className="postImg" style={{backgroundImage: `url(${post.post_avatar})`}}></div>
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
