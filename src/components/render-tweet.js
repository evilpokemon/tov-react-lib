import React from 'react'
import ReactDOM from 'react-dom'
import PlainTweet from './tweet-templates/plain-tweet'

class RenderTweet extends React.Component {
    render () {
        
        let tweet=""

        if(this.props.tweet) {
            try{
                tweet = JSON.parse(this.props.tweet)
            } catch (e) {
                console.log(e)
            }
        }

        
        let output = pug`div Nothing to render`
        
        if(tweet) {

            let childData = {}

            if(tweet.user){
                childData.bgUrl = tweet.user.profile_image_url
            }
            
            
            output = pug`
                PlainTweet(data=${childData})
            `
        }

        return output
        
    } 
}

export default RenderTweet