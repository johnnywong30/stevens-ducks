import axios from 'axios'

export const getRoster = () => {
    return async dispatch => {
        try {
            // loading stuff
            console.log('hello?')
            const { data } = await axios.get('/api/roster')
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }
}