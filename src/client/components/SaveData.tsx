import * as React from "react";
import { TestData } from "../../types";
import { save } from "../server";

export interface SaveProps {
    route: string
}
interface State {
    input: string
}
export class SaveData extends React.Component<SaveProps, State> {
    constructor(props: SaveProps) {
        super(props)
        this.state = {
            input: ""
        }
    }

    onChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    onClick = (id: string) => () => {
        switch (id) {
            case "submit":
                save<TestData>("data", { some: this.state.input })
                break;
        }
    }

    render() {
        return <div>
            <input type="text" onChange={this.onChange} />
            <button onClick={this.onClick("submit")}>Press me!</button>
        </div>
    }
}