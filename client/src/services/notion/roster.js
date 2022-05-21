import axios from 'axios'
import { setRoster } from '../../redux/actions/roster'

export const getRoster = () => {
    return async dispatch => {
        try {
            // loading stuff
            // console.log('hello?')
            const { data } = await axios.get('/api/roster')
            // need loading dispatch
            dispatch(setRoster(data))
            // need end loading dispatch
        } catch (e) {
            console.log(e)
        }
    }
}