import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Kursus from './state/State';
import Materi from './props/Props';

class Toggle extends Component{
  constructor(props) {
    super(props);
    this.state = {
      toggleStatus: false
    }

    //setiap kita ingin menggunakan this dalam even kita harus
    // mendefinisikan secara spesifik didalam componen, menggunakan .bind(this)
    this.handleClick = this.handleClick.bind(this)

  }
  handleClick(){  //nama event
    this.setState(state =>({
      toggleStatus: !state.toggleStatus
    }))
  }

  render(){
    return(
      <button onClick={this.handleClick}>
        {this.state.toggleStatus ? 'Lihat' : 'tutup'}
        <p>Lihat Isi :  {this.state.toggleStatus ? <Kursus/> :'Tutup' }</p>
      </button>
    )
  }
  
}

class App extends Component{
  render() {
    return (
      <div className="wrapperapp">
        <header className="App-header">
        {/*<img className="App-logo" src={logo} alt="ini logo"></img>*/}
        <Toggle/>
        </header>
        <Kursus/>
        <p>Contoh State</p>
        <hr/>
        <Materi img={require('./p15.jpg')} des="belajar seo" harga="12000"/>
        <Materi img={require('./p15.jpg')} des="belajar React Js" harga="25000"/>
        <Materi img={require('./p15.jpg')} des="belajar Node Js" harga="20000"/>
      </div>
    );
  }
}

export default App;
