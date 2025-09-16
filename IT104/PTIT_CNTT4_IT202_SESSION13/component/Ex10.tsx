import React, { Component } from "react";
type StageType = {
    values?: string;
};
export default class Ex10 extends Component<object, StageType> {
    constructor(prop: object) {
        super(prop);

        this.state = {
            values: undefined,
        };
    }
    render() {
        const handalChannge = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({
                values: e.target.value,
            });
        };
        return (
            <>
                <h1>{this.state.values}</h1>
                <input type="text" onChange={handalChannge} />
            </>
        );
    }
}
