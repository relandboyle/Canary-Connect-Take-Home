import React, { useState, useEffect } from 'react';
import Device from '../components/Device';
import initialFetch from '../Utils/initialFetch';

const MainContainer = () => {
  const [devices, setDevices] = useState({});
  // proxy to get around cors issues.
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  // default query for devices
  const url = 'https://fullstack-challenge-api.herokuapp.com/devices';

  // to be sent upon component mount
  // its only purpose is to get the list of devices from the API
  // imported function call
  useEffect(() => {
    initialFetch(url, proxy, setDevices);
  }, []);

  // for in loop to pass an open ended amount of devices to be rendered.
  // Passing in their text, id, and the proxy as props
  const deviceRender = [];
  for (const x in devices) {
    deviceRender.push(<Device text={x} id={devices[x]} key={devices[x]} proxy={proxy} />);
  }
  return <article id="main-container">{deviceRender}</article>;
};

export default MainContainer;
