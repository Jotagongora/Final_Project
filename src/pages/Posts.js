import React, {useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode';
import {useAuthContext} from '../contexts/AuthContext';

export default function Posts() {

    const {LoggedInUser} = useAuthContext();

    const [post, setPost] = useState([]);

    const [user, setUser] =  useState([]);

    const token = localStorage.getItem('TOKEN_KEY');

    const AuthStr = 'Bearer '.concat(token);

    const formData = new FormData;

    const fileInput = document.querySelector('#postImage');

    const titileInput = document.querySelector('#titleInput');

    const contentInput = document.querySelector('#contentInput');

    const commentData = new FormData;

    const commentInput = document.querySelectorAll('#commentInput');

    const postId = document.querySelectorAll('#postId');
    

    const changeHandler = e => {
        e.preventDefault();
        e.target.name = e.target.value;
    }


    const submit = e => {

        e.preventDefault();
        
        formData.append("newTitlePost", titileInput.value);
        formData.append("newContentPost", contentInput.value);
        formData.append("postImage", fileInput.files[0]);

        const option2 = {
            method: "POST",
            headers: {'Accept': 'application/json',
            'Authorization': AuthStr,},
            body: formData 
        }

        fetch('http://localhost:8000/api/addPost', option2)
        .then(response => response.json())
        .then(data => data);

        titileInput.value = "";
        contentInput.value = "";
        fileInput.value = "";
    }
    
    const submitComment = e => {

        e.preventDefault();
        
        commentData.set("commentInput", e.target[0].value);
        commentData.set("postId", e.target[1].value);

        const option2 = {
            method: "POST",
            headers: {'Accept': 'application/json',
            'Authorization': AuthStr,},
            body: commentData 
        }

        fetch('http://localhost:8000/api/addComment', option2)
        .then(response => response.json())
        .then(data => data);

        e.target[0].value = "";
        e.target[1].value = "";
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
                            <textarea placeholder="Título" className="" name="newTitlePost" id="titleInput" cols="30" rows="20"></textarea>
                            <textarea placeholder="Escribe lo que te apetezca aquí..." className="newPost" name="newContentPost" id="contentInput" cols="30" rows="20"></textarea>
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
                            <form onSubmit={submitComment}>
                                <textarea name="commentInput" onChange={changeHandler} id="commentInput" placeholder="Escribe un comentario..."></textarea>
                                <input type="hidden" name="postId" id="postId" value={post.post_id}/>
                                <button>Publicar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                )
            })}
        </div>
    )
}
