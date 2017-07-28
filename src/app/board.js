import React,{Component} from 'react';
import RecipeElement from './recipeElement.js';
import Edit from './edit.js'
import style from '../css/board.scss'

class Board extends Component {
    constructor(){
        super();
        this.state = {
            recipes:[]
        }
    }

    add(element){
        let newList = this.state.recipes;
        newList.push(element);
        this.setState({
            recipes:newList
        });
    }

    remove(element){
        let newList = this.state.recipes.filter(
            (x) => {return x != element}
        );
        this.setState({
            recipes:newList
        });
    }

    render(){
        let recipeList = this.state.recipes.map(
            (x) => {return <RecipeElement name = {x}  remove={this.remove.bind(this)} />}
        );
        return (
            <div className="board">
                {recipeList}
                <Edit type = "recipe" add = {this.add.bind(this)} />
            </div>
        );
    }

}

export default Board;
