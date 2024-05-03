import React from 'react';
import { Carousel } from 'react-bootstrap';
import image from '../img/image.png'

export default function Sobre() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column', marginTop: '20px'}}>
      <h1>Sobre</h1>
      <div style={{display: 'flex', margin: 20}}>
      <p style={{border: '1px solid #000', width: '50rem', borderRadius: '10px', padding: '3rem', marginTop: '20px' }}>Meu nome é Manu e eu sou uma nail designer apaixonada pela arte de transformar unhas em verdadeiras obras de arte. Minha jornada até aqui foi marcada por desafios e obstáculos que, em vez de me derrubar, me fortaleceram e me impulsionaram em direção aos meus sonhos.</p>
      <img src={image} style={{width: '200px', borderRadius: '50%', marginLeft: '20px'}}/>
      </div>
    </div>
  );
}