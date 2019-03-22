import React ,{Component}from 'react';

//only work on production server not use too much only use when needed
class ErrorBoundary extends Component{

    state = {
        hasError: false,
        message: ''
    }
    ComponentDidCatch = (error, info) => {
        this.setStage=({
            hasError:true,
            message:error
        });
    }
    render() {
        if(this.state.hasError){
       return (<h1>{this.state.message}</h1>)
        }else{
          return this.props.children;
        } 
    }
}

export default ErrorBoundary;