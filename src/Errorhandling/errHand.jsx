//we use the react class component Error boundary, that catches JS errors anywhere in their child component tree and logs it.
// it also displays a fallback UI.
// Calling it error boundary is not a must, but it is a common name to use.
//example of a Error boundary

export default class ErrorBoundary extends React.Component{
constructor(props){
    super(props);
    this.state={hasError:false};
}
static getDerivedStateFromError(error){
    return {hasError: true}
}
componentDidCatch(error,errorInfo){
    console.log(error,errorInfo);
}
render(){
    if(this.state.hasError){
        return <h1>Something wrong</h1>
    }
    return this.props.children;
}
}