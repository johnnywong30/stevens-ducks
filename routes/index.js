const calendarRouter = require('./calendar')
const rosterRouter = require('./roster')
const statsRouter = require('./stats')

const API_START = '/api'

const routes = (app) => {
    
    app.use(`${API_START}/roster`, rosterRouter)
    app.use(`${API_START}/calendar`, calendarRouter)
    app.use(`${API_START}/stats`, statsRouter)
    
    // app.use('*', (req, res) => {
    //     res.status(404).json({ error: 'Route not found' });
    // });
};

module.exports = routes;