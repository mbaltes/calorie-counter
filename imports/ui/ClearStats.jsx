import React from 'react';
import Modal from 'react-modal';

import AddMealForm from './AddMealForm.jsx';
import { DailyCount } from '../api/dailyCount.js';

const customStyles = {
    content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
    }
};

export default class ClearStats extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
        };
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }




    handleClick() {
        {/* Clears the current calorie count. */}
        DailyCount.update(1, {
            $set: { 
                calories: 0,
                protein: 0,
                sugar: 0,
                carbs: 0
            },
        });
        {/* Close modal */}
        this.closeModal();
    }


    render() {
        return(
            <div>
                <button className="clear-stats-button" onClick={this.openModal.bind(this)}>Clear Calories</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles} >

                    <h2>Are you sure?</h2>
                    <button onClick={this.closeModal.bind(this)}>No</button>
                    <button onClick={this.handleClick.bind(this)}>Yes</button>
                </Modal>
            </div>
        );
    }
}