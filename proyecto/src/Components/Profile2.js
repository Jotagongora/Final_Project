import React from 'react';
import './Profile2.css';

export default function Profile2() {
    return (
        <div>
            <div className="profileContainer">
                <div className="box1">

                </div>
                <div className="box2 bg-img">
                    
                </div>
                <div className="box3">

                </div>
            </div>
            <div className="profileImg"></div> {/*TODO: Arreglar margenes de foto perfil} */}
            <div>
                <h1 className="textSize">Juan Alberto</h1>
            </div>
            <div className="navContainer">
                <div className="box1"></div>
                <nav className="profileNav box2">
                    <a href="" className="isActive">Publicaciones</a>
                    <a href="">Fotos</a>
                    <a href="">Biblioteca</a>
                    <button>Editar perfil</button>
                </nav>
                <div className="box3"></div>
            </div>
            <div className="navContainer">
                <div className="profileAsideLeft"></div>
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
                    </div>
                </div>
                <div className="profileAsideRight"></div>
            </div>
        </div>
    )
}
