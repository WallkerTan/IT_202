import React, { Component } from "react";

type StateType = {
    time: Date;
};

export default class s15_ex7 extends Component<object, StateType> {
    private intervalId: NodeJS.Timeout | undefined;

    constructor(props: object) {
        super(props);
        this.state = {
            time: new Date(),
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                time: new Date(),
            });
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
                <h1>Đồng hồ hiện tại</h1>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
            </div>
        );
    }
}
