import uuidv4 from 'uuid/v4'

const SET_TEXT = 'SET_TEXT'
const ADD_TWEET = 'ADD_TWEET'
const REMOVE_TWEET = 'REMOVE_TWEET'

const initialState = {
    text: '',
    tweetList: [
        {   
            id: 1,
            tweet: 'First tweet from redux'
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TEXT: {
            return {
                ...state,
                text: action.payload
            }
        }
        case ADD_TWEET: {
            const newTweet = {
                id: uuidv4(),
                tweet: state.text
            }

            return {
                ...state,
                tweetList: [ newTweet, ...state.tweetList ],
                text: ''
            }
        }
        case REMOVE_TWEET: {
            const filteredTweetList = state.tweetList.filter(item => item.id !== action.payload)

            return {
                ...state,
                tweetList: filteredTweetList
            }
        }
        default: return state
    }
} 

export const actions = {
    handleTextChange: (text) => ({
        type: SET_TEXT,
        payload: text
    }),
    addTweet: (event) => {
        event.preventDefault()
        return {
            type: ADD_TWEET
        }
    },
    remove: (tweetId) => ({
        type: REMOVE_TWEET,
        payload: tweetId
    })
}

export default reducer
