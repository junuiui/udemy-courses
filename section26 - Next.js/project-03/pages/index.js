import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A 1 Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Sungnyemun_Gate%2C_front%2C_2013.jpg',
    address: '남대문, Korea',
    description: 'This is the 1 meetup',
  },
  {
    id: 'm2',
    title: 'A 2 Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Republic_of_Korea_capitol.jpg',
    address: '청와대, Korea',
    description: 'This is the 2 meetup',
  },
  {
    id: 'm3',
    title: 'A 3 Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Sinbu-Dong.jpg',
    address: '천안, Korea',
    description: 'This is the 3 meetup',
  }

]

function HomePage() {
  return (
      <MeetupList meetups={DUMMY_MEETUPS} />
  )
}

export default HomePage;