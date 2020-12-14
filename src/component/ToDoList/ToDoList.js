import React, { Component } from 'react'

export default class ToDoList extends Component {
    constructor() {
        super();

        this.state = {
            item: '',
            savedItems: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.addItem = this.addItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };

    //call addItem
    handleSubmit(e) {
        e.preventDefault();
        //prevent form from actually submitting

        //prevent empty strings from being saved
        let entry = this.state.item;
        if (entry.trim() !== '') {
            this.addItem();
        };

        //clears input field after submission
        this.setState({
            item: '',
        });
    };

    //add value from state.item to state.savedItems
    addItem() {
        this.setState((prevState) => {
            return {
                savedItems: prevState.savedItems.concat(this.state.item)
            };
        });
    }

    //hold entered value by changing state.item
    handleChange(e) {
        console.log(e.target.value);
        this.setState({
            item: e.target.value,
        });
    }

    //clears list by resetting states
    handleClick() {
        this.setState({
            savedItems: [],
            item: '',
        })
    }

    render() {
        //map state.savedItems to <li>
        const list = this.state.savedItems.map((value, index) => <li key = {index}>{value}</li>);

        return (
            <div className="ToDoList">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.item} onChange={this.handleChange} />
                    <button type="submit">Add to List</button>
                    <button type="text" onClick={this.handleClick}>Empty List</button>
                </form>
                {this.state.savedItems.length === 0 && "Enter an item and click 'Add to List'."}
                {list}
            </div>
        )
    };
}