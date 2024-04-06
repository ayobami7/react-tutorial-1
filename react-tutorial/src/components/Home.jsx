import React from 'react'
import Banner from '../shared/Banner'
import banner from  '../assets/banner.png'

const Home = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24 ' id="home">
        <Banner banner={banner} heading ="Develop your skills with diligence" subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies aliquet nibh, sagittis luctus felis volutpat in. 
                        Nam sit amet vehicula nunc, ac hendrerit odio. Nullam lobortis urna sed nibh ultricies auctor vitae vitae ex" btn1={' Get started'} btn2={'Discount'} />
    </div>
  )
}

export default Home