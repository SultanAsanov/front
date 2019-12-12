import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      squares: Array(17).fill(null),
      count:0
    }
  this.winnerLine=[
    [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15],
    [0,4,8,12],
    [1,5,9,13],
    [2,6,10,14],
    [3,7,11,15],
    [0,5,10,15]
  ]
}

  isWinner=()=>{
    let s=(this.state.count%2===0)?"X":"O";
    for(let i=0;i<16;i++){
      let line=this.winnerLine[i];
      if(this.state.squares && line
       && this.state.squares[line[0]]
        && this.state.squares[line[0]]===s
         && this.state.squares[line[1]]===s
          && this.state.squares[line[2]]===s
           && this.state.squares[line[3]]===s){
        alert(s+" win");
        setTimeout(()=>{
          this.setState({squares:Array(17).fill(null)});
          this.setState({count:0});
        },3000)
      }
    }
  }

clickHandler=event =>{
let data=event.target.getAttribute("data");
let currentSquares=this.state.squares;
// console.log(currentSquares);
if (currentSquares[data]===null){
  currentSquares[data]=(this.state.count%2===0)?"X":"O";
  this.setState({count:this.state.count+1});
  this.setState({squares:currentSquares});
}
else{
  alert("Не нажимай два раза на ячейку!");
}
this.isWinner();
}

render(){
  return(
    <div className="tic-tac-toe">
    <div className="t-grid" onClick={this.clickHandler} data="0">{this.state.squares[0]}</div>
    <div className="t-grid" onClick={this.clickHandler} data="1">{this.state.squares[1]}</div>
    <div className="t-grid" onClick={this.clickHandler} data="2">{this.state.squares[2]}</div>
    <div className="t-grid" onClick={this.clickHandler} data="3">{this.state.squares[3]}</div>
    <div className="t-grid" onClick={this.clickHandler} data="4">{this.state.squares[4]}</div>
    <div className="t-grid" onClick={this.clickHandler} data="5">{this.state.squares[5]}</div>
    <div className="t-grid" onClick={this.clickHandler} data="6">{this.state.squares[6]}</div>
    <div className="t-grid" onClick={this.clickHandler} data="7">{this.state.squares[7]}</div>
    <div className="t-grid" onClick={this.clickHandler} data="8">{this.state.squares[8]}</div>
    <div className="t-grid" onClick={this.clickHandler} data="9">{this.state.squares[9]}</div>
    <div className="t-grid" onClick={this.clickHandler} data="10">{this.state.squares[10]}</div>
    <div className="t-grid" onClick={this.clickHandler} data="11">{this.state.squares[11]}</div>
    <div className="t-grid" onClick={this.clickHandler} data="12">{this.state.squares[12]}</div>
    <div className="t-grid" onClick={this.clickHandler} data="13">{this.state.squares[13]}</div>
    <div className="t-grid" onClick={this.clickHandler} data="14">{this.state.squares[14]}</div>
    <div className="t-grid" onClick={this.clickHandler} data="15">{this.state.squares[15]}</div>
    </div>
  );
}
}

export default App;
