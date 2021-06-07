import React from 'react';
import { Button } from './Button';
import './stylee.css';


function HeroSection() {
    return (
        <div className='hero-container'>
          <video src= 'https://storage.coverr.co/videos/lGvqVXx72DP7yFxWvAZTlaAuelBf00p6N?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjIyMjAwMzcwfQ.agSjGiBsw62y0AwTUYNQa4TaZuMWbJc_WqfffROKz5U' autoPlay loop muted />
      <h1>LUXURY AND BEYOND</h1>
      <p>Your Home Is Our Home</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          EXPLORE
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;