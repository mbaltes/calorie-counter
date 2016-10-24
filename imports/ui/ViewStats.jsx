import React from 'react';
import { DailyCount } from '../api/dailyCount.js';

export default class ViewStats extends React.Component {

    renderTasks() {
        let currentCount = this.props.dailyCount;
        return currentCount.map((curr) => (
            <div className="stat-view">
                <p>Calories: {curr.calories} </p>
                <p>Protein: {curr.protein} g</p>
                <p>Sugar: {curr.sugar} g</p>
                <p>Carbs: {curr.carbs} g</p>
            </div>
        ));
    }

    render() {
        return(
            <div>
                {this.renderTasks()}
            </div>
        );
    }
}