// /api/new-meetup
// POST /api/new-meetup

import { MongoClient } from 'mongodb'

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    //-------------------------------
    // store in db
    const client = await MongoClient.connect('mongodb+srv:')
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    // data is object
    const result = meetupsCollection.insertOne(data)
    client.close();
    res.status(201).json({ message: 'meetup added' });
    //-------------------------------
  }
}

export default handler;