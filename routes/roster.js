const express = require('express');
const router = express.Router();
const axios = require('axios');
const { Client } = require('@notionhq/client');

const authToken = process.env.NOTION_TOKEN
const rosterDBId = process.env.ROSTER_ID

// console.log(authToken)
// console.log(rosterDBId)

const notion = new Client({
    auth: authToken
})

router
    .route('/')
    .get(async (req, res) => {
        try {
            const response = await notion.databases.query({
                database_id: rosterDBId,
            })
            // TODO: clean up the data in a more readable object notation
            // TODO: like [{name: 'Johnny', role: 'Captain', major: 'Computer Science', ...}, ...]
            return res.json(response)
        } catch (e) {
            return res.json({error: e})
        }
    }) 


module.exports = router