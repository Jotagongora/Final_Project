import React, {useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode';
import {useAuthContext} from '../contexts/AuthContext';

export default function Posts() {

    const {LoggedInUser} = useAuthContext();

    const [post, setPost] = useState([]);

    const formData = new FormData();

    const [user, setUser] =  useState([]);

    const token = localStorage.getItem('TOKEN_KEY');

    const AuthStr = 'Bearer '.concat(token);

    

    const submit = e => {

        e.preventDefault();

        const option2 = {
            method: "POST",
            headers: {'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': AuthStr,},
            body: formData
            
        }

        fetch('http://localhost:8000/api/addPost', option2)
        .then(response => response.json())
        .then(data => console.log(data));
    }

    function handleChange(e) {
        formData.append(e.target.name, e.target.value)
    }
    
    
    const option = 
        { headers: 
            {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': AuthStr,
        }};

        

        useEffect(() => {
            fetch(`http://localhost:8000/api/${LoggedInUser}` , option)
            .then(response => response.json())
            .then(data => setUser(data))
            }, []);

        useEffect(() => {
            fetch(`http://localhost:8000/api/${LoggedInUser}`, option)
            .then(response => response.json())
            .then(data => setPost(data.posts))
            }, []);
            
    return (
        <div>
            <div className="bgPostColor">
                <div className="navContainer">
                    <div className="box2">
                        <form onSubmit={submit} className="borderPost">
                            <textarea placeholder="Título" className="" onChange={handleChange} name="newTitlePost" id="" cols="30" rows="20"></textarea>
                            <textarea placeholder="Escribe lo que te apetezca aquí..." onChange={handleChange} className="newPost" name="newContentPost" id="" cols="30" rows="20"></textarea>
                            <label htmlFor="postImage"><i className="attachIcon fas fa-paperclip"></i></label>
                            <input className="attachImgButton" id="postImage" name="postImage" type="file"/>  
                            <button>Publicar</button>   
                        </form>
                        <div className="DownBorderPost">
                            
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
