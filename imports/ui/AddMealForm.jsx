import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meals } from '../api/meals.js';

export default class AddMealForm extends Component {

    handleSubmit(event) {
        event.preventDefault();

        const name = ReactDOM.findDOMNode(this.refs.name).value.trim();
        const calories = ReactDOM.findDOMNode(this.refs.calories).value.trim();
        const protein = ReactDOM.findDOMNode(this.refs.protein).value.trim();
        const sugar = ReactDOM.findDOMNode(this.refs.sugar).value.trim();
        const carbs = ReactDOM.findDOMNode(this.refs.carbs).value.trim();

        Meals.insert({
            name,
            calories,
            protein,
            sugar,
            carbs,
            createdAt: new Date(),
        });
    }

    render() {
        return(
            <div>
                <form className="add-meal" onSubmit={this.handleSubmit.bind(this)}>
                    Name: <input type="text" ref="name"/> <br/>
                    Calories: <input type="text" ref="calories"/> <br/>
                    Protein: <input type="text" ref="protein"/> <br/>
                    Sugar: <input type="text" ref="sugar"/> <br/>
                    Carbs: <input type="text" ref="carbs"/> <br/>
                    <input type="submit" value="Submit Meal"/>
                </form>
            </div>
        );
    }
}

