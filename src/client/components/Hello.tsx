import * as React from "react";

export interface HelloProps { user: string; greeting: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>{this.props.greeting}, {this.props.user}!</h1>;
    }
}