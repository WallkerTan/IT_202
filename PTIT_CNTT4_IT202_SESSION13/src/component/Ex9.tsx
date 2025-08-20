import React, { Component } from "react";
type StageType = {
    name?: string;
};
export default class Ex9 extends Component<object, StageType> {
    constructor(prop: object) {
        super(prop);

        this.state = {
            name: "ngoc Huyen",
        };
    }

    static defaultProps = {
        name: "huyen",
    };
    render() {
        const handalClick = () => {
            this.setState({
                name: "tan dz",
            });
        };
        return (
            <>
                <h1>Ten: {this.state.name}</h1>
                <button onClick={handalClick}>click</button>
            </>
        );
    }
}
