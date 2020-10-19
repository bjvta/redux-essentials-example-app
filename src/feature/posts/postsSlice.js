import {createSlice, nanoid} from '@reduxjs/toolkit';
import {sub} from 'date-fns'

const initialState = [
    {
        id: '1',
        title: 'First Post!',
        content: 'Hello!',
        date: sub(new Date(),{minutes: 10}).toISOString(),
        user: '0',
        reactions: {
            thumbsUp: 0,
            hooray: 2,
        }
    },
    {
        id: '2',
        title: 'Second Post!',
        content: 'More text',
        date: sub(new Date(),{minutes: 5}).toISOString(),
        user: '1',
        reactions: {
            thumbsUp: 1,
            hooray: 3,
        }
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        title,
                        content,
                        user: userId
                    }
                }
            }
        },
        postUpdated(state, action) {
            const {id, title, content} = action.payload
            const existingPost = state.find(post => post.id === id)
            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        },
        reactionAdded(state, action) {
            const {postId, reaction} = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost){
                if (existingPost.reactions[reaction] === undefined) {
                    existingPost.reactions[reaction] = 1
                }else{
                    existingPost.reactions[reaction]++
                }
            }
        }
    }
})

export const {postAdded, postUpdated, reactionAdded} = postsSlice.actions

export default postsSlice.reducer;