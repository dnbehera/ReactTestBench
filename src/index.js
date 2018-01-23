import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
        return(
            <button className="square" onClick={() => alert('Clicked')}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i){
        return(
            <Square value={i}/>
        )
    }
    render(){
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare('X')}
                    {this.renderSquare('O')}
                    {this.renderSquare(9)}
                </div>
                <div className="board-row">
                    {this.renderSquare(9)}  
                    {this.renderSquare(9)}
                    {this.renderSquare(9)}
                </div>
                <div className="board-row">
                {this.renderSquare(9)}  
                {this.renderSquare(9)}
                {this.renderSquare(9)}
                </div>
            </div>
        )

    }
}

ReactDOM.render(
    <Board />,
    document.getElementById("root")
);