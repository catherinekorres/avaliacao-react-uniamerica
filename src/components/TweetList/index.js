import React from 'react';

import Tweet from '../Tweet';

import './styles.css';

export default function TweetList() {
  const tweetList = [
    'Hello world.',
    'Isto é um tweet.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam odio nobis voluptatum blanditiis magnam consectetur quaerat nesciunt quo voluptatibus asperiores. Et, eum obcaecati. Veritatis ipsum vero laboriosam at ratione dolor.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam odio nobis voluptatum blanditiis magnam consectetur quaerat nesciunt quo voluptatibus asperiores. Et, eum obcaecati. Veritatis ipsum vero laboriosam at ratione dolor.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam odio nobis voluptatum blanditiis magnam consectetur quaerat nesciunt quo voluptatibus asperiores. Et, eum obcaecati. Veritatis ipsum vero laboriosam at ratione dolor.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam odio nobis voluptatum blanditiis magnam consectetur quaerat nesciunt quo voluptatibus asperiores. Et, eum obcaecati. Veritatis ipsum vero laboriosam at ratione dolor.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam odio nobis voluptatum blanditiis magnam consectetur quaerat nesciunt quo voluptatibus asperiores. Et, eum obcaecati. Veritatis ipsum vero laboriosam at ratione dolor.',
  ]

  return (
    <div className="tweet-list">

      {
        tweetList.map((tweet) => (
          <Tweet text={tweet}/>
        ))
      }
    
    </div>
  );
}
