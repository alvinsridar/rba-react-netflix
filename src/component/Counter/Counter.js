import React, { Component } from 'react'

export default class Counter extends Component {

    constructor() {
        super();
        this.state = {
            itemCount: 0,
        };

        //option 1: bind function to this in constructor
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    increaseCount(e) {
        this.setState((e) => {
            return {
                itemCount: e.itemCount + 1,
            };
        });
        console.log(e);
        //if there is no "e" passed, this will log undefined
    }

    //increaseCount updates itemCount based on the passed previous state
    //decreaseCount updates itemCount using setState directly

    decreaseCount(e) {
        this.setState({
            itemCount: this.state.itemCount - 1,
        })
        console.log(e);
    }

    //option 1
    //this function was bound in constructor
    //by default, "this" refers to addItem
    //after binding, "this" refers to Counter
    addItem() {
        this.increaseCount();
        console.log("addItem");
    }

    //this function was bound in constructor
    //by default "this" refers to removeItem
    //after binding, "this" refers to Counter
    removeItem() {
        this.decreaseCount();
        console.log("removeItem");
    }

    //option 2: use arrow functions (class field syntax)
    addItemArrow = () => {
        this.increaseCount();
        console.log("addItemArrow");
    }

    removeItemArrow = () => {
        this.decreaseCount();
        console.log("removeItemArrow");
    }

    //option 3: use inner functions in onClick
    //addItemInner is identical to addItem, but was not bound in constructor
    addItemInner() {
        this.increaseCount();
        console.log("addItemInner");
    }

    //removeItemInner is identical to removeItem, but was not bound in constructor
    removeItemInner() {
        this.decreaseCount();
        console.log("removeItemInner");
    }

    //to demonstrate the difference between increaseCount and decreaseCount
    //addItem2 will increase itemCount by 2
    addItem2 = (e) => {
        this.increaseCount(e);
        this.increaseCount(e);
    }

    //removeItem2 will decrease itemCount by 1
    //but console.log(e) in decreaseCount will still be done twice
    removeItem2 = (e) => {
        this.decreaseCount(e);
        this.decreaseCount(e);
    }

    render() {
        return (
            <div>
                <p> There are {this.state.itemCount} items.</p>
                <button type="button" onClick={this.addItem} >Add 1 item (Bind)</button>
                <button type="button" onClick={this.removeItem} >Remove 1 item (Bind)</button>
                <br />
                <button type="button" onClick={this.addItemArrow} >Add 1 item (Arrow Function)</button>
                <button type="button" onClick={this.removeItemArrow} >Remove 1 item (Arrow Function)</button>
                <br />
                <button type="button" onClick={this.addItem2} >Add 2 items (successfully)</button>
                <button type="button" onClick={this.removeItem2} >Remove 2 items (unsuccessfully)</button>
                <br />
                <button type="button" onClick={() => { this.addItemInner() }} >Add 1 item (Inner Function)</button>
                <button type="button" onClick={() => { this.removeItemInner() }} >Remove 1 item (Inner Function)</button>

            </div>
        )
    };
}