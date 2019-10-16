import React, { useState, useEffect } from 'react';
import Device from '../components/Device';

const MainContainer = () => {
  const [devices, setDevices] = useState({});
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const url = 'https://fullstack-challenge-api.herokuapp.com/devices';

  useEffect(() => {
    fetch(proxy + url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
      //   mode: 'no-cors'
    })
      .then(res => res.json())
      .then(response => {
        const deviceObj = {};
        response.forEach(el => {
          deviceObj[el.name] = el.id;
        });
        setDevices(deviceObj);
      })
      .catch(() => {
        throw new Error('error in fetch request');
      });
  }, []);

  const deviceRender = [];
  for (let x in devices) {
    deviceRender.push(<Device text={x} id={devices[x]} key={devices[x]} proxy={proxy} />);
  }
  //   const deviceRender = devices.map((el, idx) => <Device text={el} key={`device-${el}-${idx}`} />);
  return <div id="main-container">{deviceRender}</div>;
};

export default MainContainer;
