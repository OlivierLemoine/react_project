import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        let res = await fetch('/api/words').catch(reason => console.log(reason));
        let val = await res.json();
        if (res.status !== 200) {
            this.props.onLoaded(val, null);
        } else if (!val.data) {
            this.props.onLoaded(val, null);
        } else {
            this.props.onLoaded(null, val.data);
        }
    }

    render() {
        return (
            <div>
                I'm waiting
            </div>
        );
    }
}