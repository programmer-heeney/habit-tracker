import React, { Component } from 'react';
import './app.css';
import Navbar from './components/navbar'
import Habits from './components/habits'

class app extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Coding', count: 0 },
      { id: 3, name: 'Running', count: 0 },
    ]
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits.splice(index, 1);
    // this.setState({ habits });
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name: name.charAt(0).toUpperCase() + name.slice(1), count: 0 }];
    this.setState({ habits });
  }


  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      habit.count = 0;
      return habit;
    })
    this.setState({ habits });
  }

  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Habits habits={this.state.habits} onReset={this.handleReset} onAdd={this.handleAdd} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} />
      </>
    );
  }
}

export default app;