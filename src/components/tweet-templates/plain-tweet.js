import React from 'react'
import ReactDOM from 'react-dom'

let containerStyle = {
    border: '1px solid pink',
    width: '800px',
    height: '600px',
    backgroundSize:'auto',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}

class PlainTweet extends React.Component {
    render() {
        const data = this.props.data
        console.log(data)
        const _containerStyle = { ...containerStyle, background:`url(${data.bgUrl})`}
        return pug`
        div(style=${_containerStyle}) Yo
        `
    }
}

export default PlainTweet
