import Header from '../components/Header';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Nav from '../components/nav/Nav';
import UsShows from '../components/usShows/UsShows'




const Home = ({ usShows }) => (
    <div>
      <Layout>
       <div>
            <Nav />
           <h1>the wild circus</h1>
       </div>
       <div>
           <UsShows usShows={usShows}/>
       </div>
      </Layout>
      
    </div>
  );

Home.getInitialProps = async () => {
    const usShowsRes = await fetch(`http://localhost:5000/api/v1/usShows`);
    const usShowsData = await usShowsRes.json();
  
  
    return {
        usShows: usShowsData,
    };
  };
  
  
  export default Home;