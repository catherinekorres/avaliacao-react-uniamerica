import React, { Component } from 'react';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import UserInfo from '../../components/UserInfo';
import TweetList from '../../components/TweetList';

export default class Home extends Component {
  render() {
    return(
      <>
      <Header />

      <Banner />

      <UserInfo />

      <TweetList />
      </>
    );
  }
}

