import React, { Component } from 'react';

class Input extends Component {
    addItem = () => {
        const habits = [...this.props.habits];
        const input = document.querySelector('#input-item');
        const habit = { id: 4, name: input.value, count: 0 };
        habits.push(habit);
        console.log(habits);
        this.setState({ habits });

        input.value = "";
    }
    render() {
        return (
            <div className="input-wrap">
                <input id="input-item" className="habit-input" type="text" placeholder="Habit" />
                <button className="input-button" onClick={this.addItem}>Add</button>
            </div>
        );
    }
}

export default Input;