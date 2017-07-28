import React,{Component} from 'react';
import style from '../css/edit.scss'

class Edit extends Component {
    constructor(){
        super();
        this.state={
            edit:false
        }
    }
    handleClicked(e){
        e.preventDefault();
        if(this.state.edit == true){
            this.props.add(this.refs.newIngredient.value);
        }
        this.refs.newIngredient.value = "";

    }

    handleEdit(){
        this.setState({
            edit:!this.state.edit
        })
    }

    render(){
        let inputBox = null;
        if(this.state.edit == true) inputBox =
        <form onSubmit={this.handleClicked.bind(this)}>
            <input className="inputBox" type="text" ref = "newIngredient" required placeholder={this.props.type == "ingredient" ? "Add ingredients..." : "Add a new recipe" }></input>
            <input className="button enter" type="submit" value="Add"></input>
        </form> ;


            return (
            <div className="edit">
                {inputBox}
                <button className="button plus" ref = "edit" onClick = {this.handleEdit.bind(this)}><i className={this.state.edit? "fa fa-minus" : "fa fa-plus"} aria-hidden="true"></i></button>
            </div>
        );
    }

}

export default Edit;
