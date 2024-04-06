import aboutImg from '../assets/featured2.png'
import aboutImg2 from '../assets/featured3.png'

const About = () => {
  return (
    <div className='md:px-14 p-4 max-w-s mx-auto space-y-10' id='about'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/2 w-1/2'>
                <img src={aboutImg} alt="AboutImage" />
            </div>
            {/* about content */}
            <div className='md:w-2/5'> 
                <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>We have been improving our product <br />
                 <span className='text-secondary '>for many years</span></h2>
                <p className='text-tertiary text-lg mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Phasellus ultricies aliquet nibh, sagittis luctus felis volutpat in. Nam sit amet vehicula nunc, ac hendrerit odio</p>
                <button className='btnPrimary'>Get Started</button>
            </div>
        </div>


        <div className='h-8'></div>

        {/*  */}

        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            {/* about content */}
            <div className='md:w-2/5'> 
                <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>You can practice at any <br />
                 <span className='text-secondary '>time convenient for you</span></h2>
                <p className='text-tertiary text-lg mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Phasellus ultricies aliquet nibh, sagittis luctus felis volutpat in. Nam sit amet vehicula nunc, ac hendrerit odio</p>
                <button className='btnPrimary'>Get Started</button>
            </div>

            <div className='md:w-1/2'>
                <img src={aboutImg2} alt="About Image" />
            </div>
        </div> 

    </div>
  )
}

export default About;