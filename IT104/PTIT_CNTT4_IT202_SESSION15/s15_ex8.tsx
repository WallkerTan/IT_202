import React, { Component } from "react";

type StateType = {
    count: number; 
};

export default class s15_ex8 extends Component<object, StateType> {
    intervalId: NodeJS.Timeout | undefined;

    constructor(props: object) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((prevState) => ({
                count: prevState.count >= 10 ? 0 : prevState.count + 1,
            }));
        }, 1000);
    }

    componentWillUnmount() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Bộ đếm số</h1>
                <h2>{this.state.count}</h2>
            </div>
        );
    }
}
