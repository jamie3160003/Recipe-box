import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Board from './board.js';

class App extends Component{
    render(){
        return(
            <div className="container">
                <div className = "title-container">
                    <h1>Recipe Box</h1>
                </div>

                <Board />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,document.getElementById('root')
);
