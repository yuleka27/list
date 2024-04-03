import { Component, ReactNode } from "react";
import list from './list.png'

export class Todolist extends Component {
    state = {
userInput: "",
todolist: []
    }

onChangeEvent(input) {
this.setState({userInput:input})
}

addItem(input) {
    if (input === '') {
        alert("Please enter an item")
    } else {
    let listArray = this.state.todolist;
    listArray.push(input)
    this.setState({todolist:listArray, userInput:''})
}
}

crossedWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

deleteItem() {
    let listArray = this.state.todolist;
    listArray = [];
    this.setState({todolist:listArray})
}

onFormSubmit(e) {
    e.preventDefault();
}

render() {
    return (
        <div>
            <form onSubmit={this.onFormSubmit}>
<div className="container">
<input type="text" 
placeholder="I need..." 
onChange = {(e) => {this.onChangeEvent(e.target.value)}}
value={this.state.userInput}/>
</div>
<div className="container">
    <button onClick = {() => this.addItem(this.state.userInput)} className="add">ADD</button>
</div>
<ul>
    {this.state.todolist.map((item, index) => (
        <li onClick={this.crossedWord} key={index}>
            <img src={list} width="25px"/> 
          {item} gi</li>
    ))}
</ul>
<div className="container">
<button onClick={() => this.deleteItem()} className="delete">Delete</button>
</div>
</form>
</div>
    )
}
}    
