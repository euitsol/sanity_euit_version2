import React, { Component } from "react";
import Slider from "react-slick";
import './OurPartners.css'
import usePartners from "../Hooks/usePartners";
import partnersimg from '../images/microsoft-logo.png'


export default class OurPartner extends Component {
  
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay:true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="our-partners">
        <h2> Our Partners </h2>
        <Slider {...settings}>
          <div>
            <img src={partnersimg} alt='partner'></img>
          </div>
          <div>
          <img src={partnersimg} alt='partner'></img>
          </div>
          <div>
          <img src={partnersimg} alt='partner'></img>
          </div>
          <div>
          <img src={partnersimg} alt='partner'></img>
          </div>
          <div>
          <img src={partnersimg} alt='partner'></img>
          </div>
          <div>
          <img src={partnersimg} alt='partner'></img>
          </div>
          <div>
          <img src={partnersimg} alt='partner'></img>
          </div>
          <div>
          <img src={partnersimg} alt='partner'></img>
          </div>
        </Slider>
      </div>
    );
  }
}