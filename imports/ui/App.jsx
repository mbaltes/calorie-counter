import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meals } from '../api/meals.js';
import { DailyCount } from '../api/dailyCount.js';

import ViewStats from './ViewStats.jsx';
import AddMeal from './AddMeal.jsx';
import ChooseMeal from './ChooseMeal.jsx';
import ClearStats from './ClearStats.jsx';

class App extends Component {
    render() {
        return (
            <div className="container">
                <header>
                    <h1>Calorie Counter</h1>
                </header>

                <ViewStats dailyCount={this.props.dailyCount}/>
                <ChooseMeal meals={this.props.meals} dailyCount={this.props.dailyCount}/>
                <AddMeal />
                <ClearStats />
            </div>
        );
    }
}

App.propTypes = {
    meals: PropTypes.array.isRequired,
    dailyCount: PropTypes.array.isRequired,
};

export default createContainer(() => {
    return {
        meals: Meals.find({}).fetch(),
        dailyCount: DailyCount.find({"_id": 1}).fetch(),
    };
}, App);
