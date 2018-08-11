import * as React from 'react'

interface SpinnerState {
isLapse100MilliSecs: boolean
}

export class Circle extends React.Component<{}, CircleState> {

handler: number

constructor(props: {}){
super(props)
this.state = {
isLapse100MilliSecs: false
}

this.handler = window.setTimeout(() => {this.setState({isLapse100MilliSecs: true})}, 100)

}

componentWillUnmount() {
this.setState({isLapse100MilliSecs: false})
clearTimeout(this.handle)
}

render() {
return (
<div>
{this.state.isLapse100MilliSecs ?
<div className="overlay centeringParent opacity" data-name="circle">
<div className="centeringChild circleContainer">
<div className="circle"/>
<div className="font-size-large padding-top-16">Processing</div>
</div>
</div>
  : null
}
</div>
)
}
}