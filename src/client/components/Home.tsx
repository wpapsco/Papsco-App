import * as React from "react";
import { Hello } from "./Hello";
import { GetData } from  "./GetData";
import { SaveData } from "./SaveData";

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Home extends React.Component {
    render() {
        return <div>
            <Hello user="you" greeting="Hey" />
            <GetData route="data" />
            <SaveData route="data" />
        </div>;
    }
}