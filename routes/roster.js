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
            // Loop through response (results -> number -> properties -> major/name/role/year -> title -> 0 -> plaintext)
            const clean = response.results.map(person => {
                const { properties } = person
                const { Major, Name, Role, Year } = properties
                // TODO: clean this up
                const personMajor = Major.rich_text[0].plain_text;
                const personName = Name.title[0].plain_text;
                const personRole = Role.rich_text[0].plain_text;
                const personYear = Year.rich_text[0].plain_text;

                // personMajor has a string with the person's major
                const personInfo = {
                    personMajor,
                    personName,
                    personRole,
                    personYear
                }

                return personInfo
            })
            console.log(clean);
            return res.json(clean);
        } catch (e) {
            console.log(e);
            return res.json({ error: e });
        }
    })


module.exports = router