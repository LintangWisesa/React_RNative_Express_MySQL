import React, { Component } from 'react';
import axios from 'axios';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip'

class App extends Component {
   
     
    state = {
      dataku: [],
    };
 

klikPost = (e) => {
  e.preventDefault();
  let url = 'http://localhost:3210/data';
  axios.post(url, {
    nama: this.inputnama.value,
    usia: this.inputusia.value
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  this.inputnama.value = '';
  this.inputusia.value = '';
};

klikGet = (e) => {
  e.preventDefault();
  let url = 'http://localhost:3210/data';
  axios.get(url)
  .then((ambilData) => {
    console.log(ambilData.data);
    this.setState({
      dataku: ambilData.data,
    }) 
  })
};

render() {
  const dataMySQL = this.state.dataku.map((item, index)=>{
    let arrayku = ['Nama: ',item.nama,', Usia: ', item.usia, ' th.'].join(' ');
    return <p key={index}>{arrayku}</p>;
  })
  return (
   <div className="container">
   <Zoom>
     <center style={{margin:'25px'}}>
        <Flip><h3>React ♥ Express ♥ MySQL</h3></Flip>
     
     <form>

  <div className="form-group" style={{margin:'15px'}}>
    <input className="form-control" type="text" id="nama" 
    ref={ innama => this.inputnama = innama }
    placeholder="Input nama di sini!"/>
  </div>

  <div className="form-group" style={{margin:'15px'}}>
    <input className="form-control" type="number" id="usia" 
    ref={ inusia => this.inputusia = inusia }
    placeholder="Input usia di sini!"/>
  </div>
  
  <button className="btn btn-primary" style={{width:'100px'}}
  onClick={this.klikPost}>POST</button>
  
  <button className="btn btn-success" style={{margin:'15px',width:'100px'}}
  onClick={this.klikGet}>GET</button>

</form>

     <div>
       { dataMySQL }
     </div>
     </center>
     </Zoom>
   </div>
  );
 }
 }
 
export default App;
