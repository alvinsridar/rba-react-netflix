import React, { Component } from 'react';

const EnhancedComponent = (OriginalComponent) => {
    return class NewComponent extends Component {

        componentDidMount() {
            console.log(OriginalComponent.name + ' component was mounted.');
        }

        render() {
            return <OriginalComponent />
            //{...this.props} is only needed if OriginalComponent has props passed to it
        }
    };
};
export default EnhancedComponent;