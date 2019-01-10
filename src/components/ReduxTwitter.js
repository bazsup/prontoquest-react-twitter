import React from 'react'
import { connect } from 'react-redux'
import { actions as twitterActions } from '../store/twitter'

const ReduxTwitter = (props) => (
    <div>
        <h2>Redux twitter</h2>
        <form className="tweet-form" onSubmit={props.addTweet}>
            <input
                className="form-control"
                onChange={(event) => props.handleTextChange(event.target.value)}
                value={props.text}
                placeholder="What happen ?"
            />
            <button className="button-tweet">tweet</button>
        </form>
        <ol className="tweet-list">
            {props.tweetList.map(tweetItem => (
                <li key={tweetItem.id} className="tweet-item">
                    <div>
                        {tweetItem.tweet}
                    </div>
                    <button className="remove-tweet" onClick={() => props.remove(tweetItem.id)}>&times;</button>
                </li>
            ))}
        </ol>
    </div>
)

const mapStateToProps = (state) => ({
    text: state.twitter.text,
    tweetList: state.twitter.tweetList
})

const mapDispatchToProps = {
    handleTextChange: twitterActions.handleTextChange,
    addTweet: twitterActions.addTweet,
    remove: twitterActions.remove,
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTwitter)
