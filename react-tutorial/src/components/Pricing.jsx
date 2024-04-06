import { useState } from 'react'
import { FaCircle } from "react-icons/fa";

const Pricing = () => {

    const [isYearly, setIsYearly] = useState(false);

    const priceDetails = [
        {
            name:"Start", 
            monthlyPrice: 19,
            yearlyPrice: 199, 
            description: "A common form ofLorem Ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
            name:"Advance", 
            monthlyPrice: 39,
            yearlyPrice: 399, 
            description: "A common form ofLorem Ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
            name:"Premium", 
            monthlyPrice: 59,
            yearlyPrice: 599, 
            description: "A common form ofLorem Ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        }
    ]
 const price = 100

  return (
    <div className='md:px-4 p-4 max-w-s mx-auto py-10' id='pricing'>
        <div className='text-center'> 
            <h2 className='md:tezt-5xl text-3xl font-extrabold text-primary mb-2'>
                Here are all our plans
            </h2>
            <p className='text-tertiary md:w-1/3 mx-auto px-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* toggle pricing */}
            <div className='mt-16'>
                <label htmlFor="toggle" className='inline-flex items-center cursor-pointer'>
                    <span className='mr-8 text-2xl font-semibold'>Monthly</span>
                    <div className='w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out'>
                        <div className={`w-6 h-6 rounded-full ${isYearly ? "bg-primary ml-8" : "bg-gray-500" }`}> </div>
                    </div>
                    <span className='ml-8 text-2xl font-semibold'>Yearly</span>
                </label>
                <input type="checkbox" id='toggle' className='hidden' checked={isYearly} 
                onChange={()=>setIsYearly(!isYearly)} />
            </div>

            {/* pricing cards */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto '> 
                {
                    priceDetails.map((priceDesc, index) => (
                    <div key={index} className='border py-10 md:px-6 px-4 rounded-l shadow-3xl'>
                        <h3 className='text-3xl font-bold text-center text-primary'> {priceDesc.name}</h3>
                        <p className='text-tertiary text-center my-5'>{priceDesc.description}</p>
                        <p className='mt-5 text-center text-secondary text-4xl font-bold'>
                            {isYearly? `$${priceDesc.yearlyPrice}`: `$${priceDesc.monthlyPrice}`}
                            <span className='text-base text-tertiary font-medium'>/{isYearly? 'year':'month'}</span>
                        </p>
                        <ul className='mt-4 space-y-2 px-4'>
                            <li className='flex gap-2 items-center'><FaCircle className='w-3 h-3 text-secondary'/> Videos of Lessons</li>
                        </ul>
                        <div className='w-full mx-auto mt-8 flex items-center justify-center'>
                            <button className='btnPrimary'>Get Started</button>
                        </div>

                    </div>))
                }
            </div>

        </div>
    </div>
  )
}

export default Pricing