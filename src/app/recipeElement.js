import React,{Component} from 'react';
import Ingredient from './ingredient.js';
import Edit from './edit.js';
import style from '../css/recipeElement.scss'

class RecipeElement extends Component {
    constructor(){
        super();
        this.state = {
            ingredients:[],
            show:true
        }
    }

    add(element){
        let newList = this.state.ingredients;
        newList.push(element);
        this.setState({
            ingredients:newList
        });
    }

    remove(element){
        let newList = this.state.ingredients.filter(
            (x) => {return x != element}
        );
        this.setState({
            ingredients:newList
        });
    }

    removeClickHandler(){
        this.props.remove(this.props.name);
    }

    showClickHandler(){
        this.setState({
            show:!this.state.show
        })
    }

    render(){
        let ingredientList = null;
        if(this.state.show) ingredientList = this.state.ingredients.map(
            (x) => {return <Ingredient name={x} remove = {this.remove.bind(this)}/>}
        );

        let show = null
        if(this.state.ingredients.length != 0) show = <span className="plus" onClick={this.showClickHandler.bind(this)}><i className={this.state.show? "fa fa-minus":"fa fa-plus"} aria-hidden="true"></i></span>
        return (
            <div className="recipeElement">

                <h1 className="recipeName">{show}{this.props.name}<span className="trash" onClick={this.removeClickHandler.bind(this)}><i className="fa fa-trash" aria-hidden="true"></i></span></h1>
                {ingredientList}
                <Edit type= "ingredient" add = {this.add.bind(this)}/>

            </div>
        );
    }

}

export default RecipeElement;
