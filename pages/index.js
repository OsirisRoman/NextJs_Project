import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://d500.epimg.net/cincodias/imagenes/2019/10/25/lifestyle/1571997676_358300_1571998101_noticia_normal.jpg",
    address: "Some Address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://d500.epimg.net/cincodias/imagenes/2019/10/25/lifestyle/1571997676_358300_1571998101_noticia_normal.jpg",
    address: "Some Address 5, 12345 Some City",
    description: "This is a second meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
