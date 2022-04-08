import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";
import { Box } from "@chakra-ui/react";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear"
    };
    return (
      <Box w='100vw' bg='black' justifyContent='center' alignItems='center'p='5%'>
      <div>
        
        <Slider {...settings}>
          <div style={{margin: '5%'}}>
            <Cards/>
          </div>
          <div style={{margin: '5%'}}>
          <Cards/>
          </div>
          <div style={{margin: '5%'}}>
          <Cards/>
          </div>
          <div style={{margin: '5%'}}>
          <Cards/>
          </div>
          <div style={{margin: '5%'}}>
          <Cards/>
          </div>
          <div style={{margin: '5%'}}>
          <Cards/>
          </div>
        </Slider>
      </div>
      </Box>
    );
  }
}