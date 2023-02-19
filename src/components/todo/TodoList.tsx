import React from "react";
import { Item } from "../../util/todo/Item";

export class TodoList extends React.Component<{items: Item[], showDone:boolean}>{
    
    render(): JSX.Element {
        
        if(this.props.showDone)
            return(
            <ul>
                {this.getAllItems().map(item => 
                (<li>{item.value}</li>)
            )}
            </ul>
            )
        else
            return(
                <ul>
                    {this.getNotDoneItems().map(item => 
                    (<li>{item.value}</li>)
                )}
                </ul>
                )
    }

    getAllItems(): Item[]{
        return this.props.items
    }

    getNotDoneItems(): Item[]{
        let notDone: Item[] = this.props.items.slice();
        return notDone.filter(value => !value.done)
    }
}