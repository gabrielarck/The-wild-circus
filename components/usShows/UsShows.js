import React from 'react';
const moment = require('moment');

moment.locale('fr');

const UsShows = ({ usShows }) => (
  <div>
    <div className="">
      {usShows.map((y) => {
        return (
          <div className="" key={y.id}>
            <h1 className="">{y.title}</h1>
            <p className="">{y.description}</p>
            <div className="">
              <p className="">{y.prix}</p>
              <div className="">
                  <p className="">
                    {moment(y.dateStart).format('DD MMMM')}
                  </p>
                  <p className="">
                    de
                    {' '}
                    {moment(y.dateStart).format('LT')}
                    {' '}
                    à
                    {' '}
                    {moment(y.DateEnd).format(' HH:mm')}
                  </p>
                </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);


export default UsShows;
