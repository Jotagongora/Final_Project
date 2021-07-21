import React, {useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode';
import {useAuthContext} from '../contexts/AuthContext';

export default function Posts() {

    const {LoggedInUser, post, setPost, setUser, user, chargeFetch, setChargeFetch } = useAuthContext();

    const token = localStorage.getItem('TOKEN_KEY');

    const AuthStr = 'Bearer '.concat(token);

    const formData = new FormData;

    const commentData = new FormData;

    const likeData = new FormData;

    const deleteData = new FormData;


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

    function deletePost(id) {
        
        deleteData.append("postId", id);
        
        const option = {
            method: "POST",
            headers: {'Accept': 'application/json',
            'Authorization': AuthStr,},
            body: deleteData 
        }

        fetch('http://localhost:8000/api/remove', option)
        .then(response => response)
        .then(data =>data);

        setChargeFetch(!chargeFetch);
    }
    

    const submit = e => {

        e.preventDefault();

        const fileInput = document.querySelector('#postImage');

        const titleInput = document.querySelector('#titleInput');

        const gameInput = document.querySelector('#game');

        const contentInput = document.querySelector('#contentInput');
        
        formData.append("newTitlePost", titleInput.value);
        formData.append("newContentPost", contentInput.value);
        formData.append("postImage", fileInput.files[0]);
        formData.append("game", gameInput.value);

        const option2 = {
            method: "POST",
            headers: {'Accept': 'application/json',
            'Authorization': AuthStr,},
            body: formData 
        }

        if (titleInput.value != "" && contentInput.value != "") {

        fetch('http://localhost:8000/api/addPost', option2)
        .then(response => response)
        .then(data =>data);

        titleInput.value = "";
        contentInput.value = "";
        fileInput.value = "";
        gameInput.value = "";
        document.getElementById('info').innerHTML = "";
        }

        setChargeFetch(!chargeFetch);
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
        .then(response => response)
        .then(data => data);

        e.target[0].value = "";
        e.target[1].value = "";
        }

        setChargeFetch(!chargeFetch);
    }

    function handleChange() {
        let docName = document.getElementById('postImage').files[0].name;
        document.getElementById('info').innerHTML = docName;
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
        .then(response => response)
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
            fetch(`http://localhost:8000/api/${LoggedInUser}`, option)
            .then(response => response.json())
            .then(data => setPost(data.posts))
            }, [chargeFetch]);

        useEffect(() => {
            fetch(`http://localhost:8000/api/${LoggedInUser}`, option)
            .then(response => response.json())
            .then(data => setUser(data.library))
            }, [chargeFetch]);
            
    return (
        <div>
            <div className="bgPostColor">
                <div className="navContainer">
                    <div className="box2">
                        <form onSubmit={submit} className="borderPost">
                            <textarea placeholder="Título" className="" name="newTitlePost" id="titleInput" cols="30" rows="20"></textarea>
                            <textarea placeholder="Escribe lo que te apetezca aquí..." className="newPost" name="newContentPost" id="contentInput" cols="30" rows="20"></textarea>
                            <label for="postImage" className="subir">
                                Subir archivo
                            </label>
                            <input id="postImage" onChange={handleChange} name="PostImage" type="file" style={{display: "none"}}/>
                            <p className="upload-name" id="info"></p>
                            <select name="game" id="game">
                                <option value="">Ninguno</option>
                                {user.map((game, index)=> {
                                    return (
                                        <option value={game.id}>{game.title}</option>
                                    );
                                })}
                            </select>
                            <button>Publicar</button>   
                        </form>
                        <div className="DownBorderPost">
                            
                        </div>
                    </div>
                </div>
                
            </div>
            {post.map((post, index)=> {
        return (
             <div id="posts" className="bgPostColor">
                <div className="navContainer">
                    <div className="box2">
                        <div className="post borderPost">
                            <div className="closeIconDiv"><i onClick={() => deletePost(post.post_id)} id="deletePost" className="closeIcon fas fa-times"></i></div>
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
                                        <div>
                                            <div>
                                                <p className="authorComment">{comment.author} :</p>
                                            </div>
                                            <div className="comments">
                                                <p className="textComment" key={i}>{comment.content_text}</p>
                                            </div>
                                       </div>
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
