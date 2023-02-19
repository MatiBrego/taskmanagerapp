import React from "react";
import "../assets/ToDo.css"
import { TodoList } from "../components/todo/TodoList";
import { Card, ToggleButton } from "react-bootstrap";
import { Item } from "../util/todo/Item";


export class ToDo extends React.Component<{},{items: Item[], newItem: string, showDone: boolean}>{
    constructor(props: {}){
        super(props)
        this.state = {items:[], newItem:'', showDone: false}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render(): JSX.Element {
        return(
            <Card className='col-3 mx-auto m-4'>
                <Card.Header className="h3">My List</Card.Header>
                <Card.Body>
                    <TodoList items={this.state.items} showDone={this.state.showDone}/>
                    <form onSubmit={this.handleSubmit}>
                        <div >
                        <input className="form-control shadow-none" placeholder="Add task" onChange={this.handleChange} value={this.state.newItem}/>
                        <br />
                        <button className="btn btn-primary">Add</button>
                        <ToggleButton
                            className="m-2 check-box"
                            id="toggle-check"
                            type="checkbox"
                            variant="outline-secondary"
                            checked={this.state.showDone}
                            value="1"
                            onChange={(e) => this.setState({showDone: e.currentTarget.checked})}> Show Done </ToggleButton>
                        </div>
                    </form>
                </Card.Body>
            </Card>
        )
    }

    handleChange(e: any){
        this.setState({newItem: e.target.value})
    }

    handleSubmit(e: any){
        e.preventDefault()

        if(this.state.newItem.length === 0)
            return;

        const newItem: Item = {
            value: this.state.newItem,
            done: false
        }

        this.setState({items: this.state.items.concat(newItem), newItem: ''})
    }
}