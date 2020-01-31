import React from 'react';
const moment = require('moment');

moment.locale('fr');

const UsShows = ({ usShows }) => (
    <div className="spectacles">
      {usShows.map((y) => {
        return (
          <div className="container-spectacles" key={y.id}>
            <h1 className="">{y.tilte}</h1>
            <div className="container-image-spectacles">
              <img className="image-spectacles" src={y.image}></img>
            </div>
              <p className="">{y.description}</p>
              <p className="">Tarif {y.prix}€</p>
              <div className="">
                  <p className="">
                    Du {moment(y.dateStart).format('DD MMMM YYYY')} au {moment(y.dateEnd).format('DD MMMM YYYY')}
                  </p>
                  <p className="">
                    De
                    {' '}
                    {moment(y.dateStart).format('LT')}
                    {' '}
                    à
                    {' '}
                    {moment(y.dateEnd).format("LT")}
                  </p>
                </div>
          </div>
        );
      })}
    <style jsx>{`
      .spectacles{
        display: flex;
        background-image: url('https://www.letelegramme.fr/ar/imgproxy.php/images/2019/09/24/le-duo-vitalis-proposera-un-exceptionnel-numero-de-main-a_4820731.jpg?article=12391677&aaaammjj=12391677');
        color: aliceblue;
      }
      .container-image-spectacles{
        object-fit: cover;
      }
      .image-spectacles{
        width:50%;
        height:45%;
        object-fit: cover;
      }
      {
        .container-spectacles{
          text-align: center;
        }
      }
    `}
    </style>
  </div>
);


export default UsShows;
