import React, {useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode';
import {useAuthContext} from '../contexts/AuthContext';

export default function Posts() {

    const {friendUser, post, setPost} = useAuthContext();

    const token = localStorage.getItem('TOKEN_KEY');

    const AuthStr = 'Bearer '.concat(token);

    const formData = new FormData;

    const fileInput = document.querySelector('#postImage');

    const titleInput = document.querySelector('#titleInput');

    const contentInput = document.querySelector('#contentInput');

    const commentData = new FormData;

    const commentInput = document.querySelectorAll('#commentInput');

    const postId = document.querySelectorAll('#postId');

    const likeData = new FormData;

    const [chargeFetch, setChargeFetch] = useState(false);

    

    
    

    const changeHandler = e => {
        e.preventDefault();
        e.target.name = e.target.value;
    }

    function show (e) {
        const comments = document.querySelectorAll('#comments');
        if (comments[e].style.display === "none") {
        comments[e].style.display = "block";
        } else {
            comments[e].style.display = "none";
        }
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

        if (e.target[0].value != "") {

        fetch('http://localhost:8000/api/addComment', option2)
        .then(response => response.json())
        .then(data => data);

        e.target[0].value = "";
        e.target[1].value = "";
        }

        setChargeFetch(!chargeFetch);
    }

    function send (post) {

        likeData.append("post", post);

        const option2 = {
            method: "POST",
            headers: {'Accept': 'application/json',
            'Authorization': AuthStr,},
            body: likeData 
        }

        fetch('http://localhost:8000/api/addLike', option2)
        .then(response => response.json())
        .then(data => data);

        setChargeFetch(!chargeFetch);
    }
    
    const option = 
        { headers: 
            {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': AuthStr,
        }};


        useEffect(() => {
            fetch(`http://localhost:8000/api/Friend/${friendUser}`, option)
            .then(response => response.json())
            .then(data => setPost(data.posts));
            }, [chargeFetch]);

           console.log(post);
        
            
    return (
        <div>
            {post.map((post, index)=> {
                
        return (
             <div id="posts" className="bgPostColor">
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
                                <i onClick={() => send(post.post_id)} className="hover far fa-lg fa-thumbs-up"><p>Me gusta {post.likes}</p></i>
                                <i onClick={() => show(index)} className="hover far fa-lg fa-comments"><p>Ver comentarios</p></i>
                            </div>
                            <div id="comments" style={{display: "none"}}>
                                {post.comments.map((comment, i) => {
                                
                                    return (
                                       <p key={i}>{comment.content_text}</p>
                                    )
                                })} 
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
