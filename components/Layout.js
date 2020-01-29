
// eslint-disable-next-line import/no-unresolved
import Head from 'next/head';

const Layout = ({children}) => (
  <div>
    <Head>
      <title>La Sauce Numérique</title>
      <meta charSet="UTF-8" />
      <link href="https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800&display=swap" rel="stylesheet" />
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>
    {children}
    
  </div>

);

export default Layout;
