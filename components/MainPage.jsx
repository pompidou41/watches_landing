const React = require('react');
const Layout = require('./Layout');
const Greeting = require('./Greeting');
const CarouselWatches = require('./CarouselWatches');
const CarouselClients = require('./CarouselClients');
const Contacts = require('./Contacts');
const Information = require('./Information');

function MainPage() {
  return (
    <Layout>
      <div className='greeting'>
        <Greeting />
      </div>
      <div className='information'>
        <Information />
      </div>
      <div className='container watches'>
        <CarouselWatches />
      </div>
      <div className='container clients'>
        <CarouselClients />
      </div>
      <div className='container contacts'>
        <Contacts />
      </div>
    </Layout>
  );
}
module.exports = MainPage;
