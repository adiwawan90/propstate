import React, { Component } from 'react'



class Kursus extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            paket: "Kursus programming",
            materi: "react Js",
            desc: "React Native",
            harga: 25000
        };
    }




    render() {
        return (
            <div>
                <h1>Nama paket  : {this.state.paket}</h1>
                <h1>Jenis Materi  : {this.state.materi}</h1>
                <h1>Deskripsi  : {this.state.desc}</h1>
                <h1>Harga paket  : {this.state.harga}</h1>
            </div>
        )
    }
}

export default Kursus;