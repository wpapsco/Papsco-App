import * as React from "react";
import { get } from "../server";
import { TestData } from "../../types";

export interface GetProps {
    route: string
}
interface State {
    loading: boolean
    data: {}
}
export class GetData extends React.Component<GetProps, State> {
    constructor(props: GetProps) {
        super(props)
        this.state = {
            loading: true,
            data: undefined
        }
    }

    componentWillMount() {
        get(this.props.route)
            .then(data => this.setState({ data, loading: false }))
    }

    render() {
        if (this.state.loading) {
            return <p>loading</p>
        } else {
            return <div>
                <p>{JSON.stringify(this.state.data)}</p>
            </div>
        }
    }
}