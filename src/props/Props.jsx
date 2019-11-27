import React from 'react'
import './style.css';

const Materi = (props) => {
    return(
        <div className="Wrapper">
            <div className="content">
                <div className="gambar paket">
                    <img src={require('../p15.jpg')} className="imageslider"/>
                </div>

                <p className="des">{props.des}</p>
                <p className="des">{props.harga}</p>
            </div>
        </div>
    )
}

export default Materi;