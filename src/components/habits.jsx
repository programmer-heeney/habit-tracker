import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    addItem = () => { this.props.onAdd(); }
    handleKeyDown = (event) => {
        event.key === 'Enter' && this.addItem();
    }
    handleReset = () => { this.props.onReset(); }
    render() {
        return (
            <>
                <div className="input-wrap">
                    <input id="input-item" className="habit-input" type="text" placeholder="Habit" onKeyDown={this.handleKeyDown} />
                    <button className="input-button" onClick={this.addItem}>Add</button>
                </div>
                <ul>
                    {
                        this.props.habits.map(habit =>
                            <Habit
                                key={habit.id}
                                habit={habit}
                                onIncrement={this.props.onIncrement}
                                onDecrement={this.props.onDecrement}
                                onDelete={this.props.onDelete}
                            />
                        )
                    }
                </ul>
                <button className="reset-button" onClick={this.handleReset}>Reset All</button>
            </>
        );
    }
}

export default Habits;