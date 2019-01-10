import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'

class Twitter extends Component {
    state = {
        text: '',
        tweetList: [
            {   
                id: 1,
                tweet: 'First tweet'
            }
        ]
    }

    handleTextChange = (event) => {
        const text = event.target.value
        this.setState({ text })
    }

    addTweet = (event) => {
        event.preventDefault()
        if (this.state.text !== '') {
            const newTweet = {
                id: uuidv4(),
                tweet: this.state.text
            }
            const tweetList = [ newTweet, ...this.state.tweetList ]
            this.setState({
                text: '',
                tweetList
            })
        }
    }

    remove = (tweetId) => {
        const filteredTweetList = this.state.tweetList.filter(tweetItem => {
            return tweetItem.id !== tweetId
        })
        this.setState({ tweetList: filteredTweetList })
    }

    render() {
        return (
            <div>
                <h2>Simple twitter</h2>
                <form className="tweet-form" onSubmit={this.addTweet}>
                    <input
                        className="form-control"
                        onChange={this.handleTextChange}
                        value={this.state.text}
                        placeholder="What happen ?"
                    />
                    <button className="button-tweet">tweet</button>
                </form>
                <ol className="tweet-list">
                    {this.state.tweetList.map(tweetItem => (
                        <li key={tweetItem.id} className="tweet-item">
                            <div>
                                {tweetItem.tweet}
                            </div>
                            <button className="remove-tweet" onClick={() => this.remove(tweetItem.id)}>&times;</button>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default Twitter
