const React = require('react');
const Layout = require('./Layout');
const Greeting = require('./Greeting');
const CarouselWatches = require('./CarouselWatches');
const CarouselClients = require('./CarouselClients');
const Contacts = require('./Contacts');
const Header = require('./Header');
const Footer = require('./Footer');
const Information = require('./Information');

function MainPage({ user, watches }) {
  return (
    <Layout user={user}>
      <Header user={user} />
      <div className="greeting">
        <Greeting />
      </div>
      <div>
        <Information />
      </div>
      <div className='watches'>
        <CarouselWatches user={user} watches={watches} />
      </div>
      <div className="contacts">
        <Contacts />
      </div>
      <Footer />
    </Layout>
  );
}
module.exports = MainPage;
