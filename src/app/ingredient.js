import React,{Component} from 'react';
import style from '../css/ingredient.scss';

class Ingredient extends Component {

    clickHandler(){
        this.props.remove(this.props.name);
    }

    render(){
        return (
            <div className="ingredient">
                <span className="ingreName">{this.props.name}</span>
                <span className="ingreDel" onClick={this.clickHandler.bind(this)}><i className="fa fa-times" aria-hidden="true"></i></span>
            </div>
        );
    }

}

export default Ingredient;
