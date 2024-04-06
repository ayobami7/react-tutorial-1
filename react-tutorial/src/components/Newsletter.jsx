import Banner from "../shared/Banner"
import banner from "../assets/banner.png"


const Newsletter = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-4">
        <Banner banner={banner} heading ="Students can share their discount code" subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies aliquet nibh, sagittis luctus felis volutpat in." 
            btn1={' Get started'}/>
    </div>
  )
}

export default Newsletter 