const React = require("react");
const Layout = require("./Layout");
const Greeting = require("./Greeting");
const CarouselWatches = require("./CarouselWatches");
const CarouselClients = require("./CarouselClients");
const Contacts = require("./Contacts");

function MainPage({ watches }) {
  return (
    <Layout>
      <div className="container greeting">
        <Greeting />
      </div>
      <div className="container watches">
        <CarouselWatches watches={watches} />
      </div>
      <div className="container clients">
        <CarouselClients />
      </div>
      <div className="container contacts">
        <Contacts />
      </div>
    </Layout>
  );
}
module.exports = MainPage;
