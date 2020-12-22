import React, { Component } from 'react';

const EnhancedComponent = (OriginalComponent) => {
    return class NewComponent extends Component {

        componentDidMount() {
            console.log(OriginalComponent.name + ' component was mounted.');
        }

        render() {
            return <OriginalComponent {...this.props} />
        }
    };
};
export default EnhancedComponent;