import React from 'react';
import './Profile2.css';

export default function Profile2() {
    return (
        <div>
            <div className="profileContainer">
                <div className="bg-img"> </div>
            </div>
            <div className="profileImg"></div> {/*TODO: Arreglar margenes de foto perfil} */}
                <div>
                    <h1 className="textSize">Juan Alberto</h1>
                </div>
            <div>
                <nav className="profileNav">
                    <a href="">Publicaciones</a>
                    <a href="">Fotos</a>
                    <a href="">Biblioteca</a>
                    <button>Editar perfil</button>
                </nav>
            </div>
            <div className="bgPostColor">
                <div className="navContainer">
                    <div className="box2">
                        <div className="post borderPost">
                            <div className="postImg"></div>
                            <div>
                                <h1>Título publicación</h1>
                                <p>Fecha</p>
                            </div>
                        </div>
                        <div className="borderPost">
                            <div className="toAttachImg"></div>
                        </div>
                        <div className="DownBorderPost">
                            <p>El nuevo juego. El nuevo juego. El nuevo juego. El nuevo juego. El nuevo juego. El nuevo juego. El nuevo juego. El nuevo juego. asdasd</p>
                            <div className="icons">
                                <i className="far fa-lg fa-thumbs-up"><p>Me gusta</p></i>
                                <i className="far fa-lg fa-comments"><p>Ver comentarios</p></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navContainer">
                <div className="box2">
                    <div className="post borderPost">
                        <div className="postImg"></div>
                        <div>
                            <h1>Título publicación</h1>
                            <p>Fecha</p>
                        </div>
                    </div>
                    <div className="borderPost">
                        <div className="toAttachImg"></div>
                    </div>
                    <div className="DownBorderPost">
                        <p>El nuevo juego. El nuevo juego. El nuevo juego. El nuevo juego. El nuevo juego. El nuevo juego. El nuevo juego. El nuevo juego. asdasd</p>
                        <div className="icons">
                            <i className="far fa-lg fa-thumbs-up"><p>Me gusta</p></i>
                            <i className="far fa-lg fa-comments"><p>Ver comentarios</p></i>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
