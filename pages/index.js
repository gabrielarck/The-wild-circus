import Header from '../components/Header';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Nav from '../components/nav/Nav';
import UsShows from '../components/usShows/UsShows'




const Home = ({ usShows }) => (
    <div>
      <Layout>
       <div className='navBar'>
            <Nav />
           <h1>The wild circus</h1>
           <a href="http://localhost:3001">clique ici boy</a>
       </div>
       <div>
           <UsShows usShows={usShows}/>
       </div>
      </Layout>
      <style jsx>{`
      {
          .navBar{
            text-align: center;
        }
      }`}
      </style>
      
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