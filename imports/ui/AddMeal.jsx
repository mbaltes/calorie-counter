import React from 'react';
import AddMealForm from './AddMealForm.jsx';

export default class AddMeal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showAddMealForm: false,
        };
    }

    handleClick() {
        // Show add form component.
        this.setState({
            showAddMealForm: !this.state.showAddMealForm,
        });
    }


    render() {
        return(
            <div>
                 <button 
                    className="add-meal-button" 
                    onClick={this.handleClick.bind(this)}>Add Meal</button>   

                 { this.state.showAddMealForm ? <AddMealForm /> : ''} 

            </div>
        );
    }
}