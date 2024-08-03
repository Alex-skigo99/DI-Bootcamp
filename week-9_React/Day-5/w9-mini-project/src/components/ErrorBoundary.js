import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false, error: "", errorInfo: ""}
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    };

    render() {
        if (this.state.hasError) {
            return <p>The error is: {this.state.error.toString()} </p>
        }
        return this.props.children;
    } 
}

export default ErrorBoundary;