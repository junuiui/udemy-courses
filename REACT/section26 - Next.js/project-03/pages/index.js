import MeetupList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb'
import Head from 'next/head'  // allow to add head section 
import { Fragment } from 'react';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content='Browse a huge list of highly active React meetups!' />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  )
}

// only works in page components
// wait until data is loaded
export async function getStaticProps() {
  // fetch data from an API

  // 
  const client = await MongoClient.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority');

  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 1,
  };
}

export default HomePage;