import './App.css';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner'
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <Banner fetchUrl = {requests.fetchNetflixOriginals} />
      <Row isPoster='true' title="Netflix Originals" fetchUrl = {requests.fetchNetflixOriginals} />
      <Row title="Netflix Trending" fetchUrl={requests.fetchTrending}/>
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Netflix Documentries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="TV Sci-Fi & Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
