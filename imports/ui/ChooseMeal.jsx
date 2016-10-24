import React from 'react';
import ReactDOM from 'react-dom';
import { Meals } from '../api/meals.js';
import { DailyCount } from '../api/dailyCount.js';


export default class ChooseMeal extends React.Component {

    handleSubmit(event) {
        event.preventDefault();

        const currName = ReactDOM.findDOMNode(this.refs.mealChooser).value.trim();

        let mealCals = 0;
        let mealProt = 0;
        let mealSug = 0;
        let mealCarb = 0;
        let currentMeal = this.props.meals;
        let currentCount = this.props.dailyCount;

        currentMeal = currentMeal.filter(curr => curr.name === currName);

        currentMeal.map((curr) => (
            mealCals = curr.calories,
            mealProt = curr.protein,
            mealSug = curr.sugar,
            mealCarb = curr.carbs,
        ));

        DailyCount.update(1, {
            $inc: { 
                calories: parseInt(mealCals),
                protein: parseInt(mealProt),
                sugar: parseInt(mealSug),
                carbs: parseInt(mealCarb)
            },
        });

        ReactDOM.findDOMNode(this.refs.mealChooser).value = '';
    }

    renderMeals() {
        return this.props.meals.map((meal) => (
            <option value={meal.name}/>
        ));
    }


    render() {
        return (
            <div>
                <form className="submit-meal" onSubmit={this.handleSubmit.bind(this)}>
                    <input 
                        type="text" 
                        ref="mealChooser" 
                        list="meal-list" 
                        placeholder="Start typing meal name..."/>
                    <datalist id="meal-list">{this.renderMeals()}</datalist>
                </form>
            </div>
        );
    }
}


