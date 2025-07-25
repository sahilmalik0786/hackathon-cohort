import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { bestproducts , bestseller, products} from '../services/productsData/screwdrivers.js'
import { RiAccountBox2Fill } from '@remixicon/react'
import { getLenis } from '../utils/lenisInstance.js'
import { useNavigate, useParams } from 'react-router-dom'
import NewsletterArchive from '../components/NewsletterArchive.jsx'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const ProductDetails = () => {
  const { name ,db } = useParams()

  const navigate = useNavigate()

  const containerRef = useRef()
  const sectionRef = useRef()
  const pinRef = useRef()
  const scrollRef = useRef()
 
  let data ;
  if(db === 'featured'){
     data = bestproducts.find(product => product.name == name
  )
  }
  else if(db==='seller'){
    data = bestseller.find(product => product.name == name)
  }
  else if(db=='all'){
    data = products.find(product => product.name == name)
  }
  
  useEffect(() => {


    const lenis = getLenis();
    if (lenis) {

      setTimeout(() => {
        lenis?.resize();
        lenis?.scrollTo(0, { immediate: true });
        ScrollTrigger?.refresh();
      }, 100);

    }
  
    
    
      const ctx = gsap.context(() => {
        const scrollEl = scrollRef.current


        scrollEl.scrollTop = 0
        const scrollHeight = scrollEl.scrollHeight - scrollEl.clientHeight

     
         gsap.to(scrollEl, {
          scrollTop: scrollHeight,
          ease: 'none',
          scrollTrigger: {
            start: 'top top',
            end: () => `+=${scrollHeight}`,
            scrub: true,
            pin: pinRef.current,
          },
        })      
      }, sectionRef)
      const tl = gsap.timeline()
         tl.fromTo(containerRef.current, {
            y: 200,
            opacity: 0,
            scale: 0.8,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.4,
        })
        tl.to(containerRef.current, {
            scale: 1,
            duration: 0.3
        })
    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef}>
      <div ref={pinRef} className="min-h-screen flex flex-col font-suisse">
        <div ref={containerRef}>
          <div className="w-fit  ml-44  not-md:ml-10 mt-30 py-2 px-4">
            <button className='bg-gradient-to-tr from-slate-300 to-slate-300 via-white dark:bg-gradient-to-tr dark:from-slate-600 dark:to-slate-800 dark:via-black px-3 py-1 rounded-md dark:text-white text-black cursor-pointer active:scale-95 transition-all duration-300 not-md:text-sm' onClick={() => {
                navigate('/')
              }}>
                Back to Home

              </button>
          </div>

          <div className="flex w-full  h-screen p-1">
            <div className="w-44 not-md:hidden h-96 mt-4"></div>
            <div className="flex w-full not-md:flex-col p-4 gap-4 overflow-hidden">


              <div className="w-1/2 not-md:w-full not-md:h-[350px] h-[500px]  rounded-2xl dark:bg-gradient-to-tr dark:from-slate-300 dark:to-slate-300 dark:via-white bg-gradient-to-tr from-slate-600 to-slate-800 via-black ">
                <img
                  className="w-full h-full object-contain"
                  src={data?.Imgs[0]}
                  alt="Product"
                />
              </div>

              <div
                ref={scrollRef}
                className="w-1/2 not-md:w-full  product-info p-4 rounded-2xl h-3/4 scrollbar-hide"
                style={{ overflowY: 'scroll' }}
              >
                <div className="h-fit">
                  <div className='h-fit dark:text-black text-white'>
                    <h2 className="text-4xl  top-0 font-bold w-56 mb-4">{data?.name}</h2>
                    {/* <h3 className='text-lg font-thin text-left p-2'>{data?.description}</h3> */}
                    <h3 className='text-xl'>{data?.price}</h3>
                  </div>
                  <div className=' mt-5  h-fit w-full p-1 dark:text-white dark:bg-gradient-to-br dark:via-black dark:from-gray-600 dark:to-gray-800 text-black bg-gradient-to-br from-gray-300 via-white/90   to-gray-400 rounded'>
                    <h1 className='text-2xl dark:bg-gradient-to-br dark:via-black dark:from-gray-400 dark:to-gray-800  bg-gradient-to-br from-gray-300 via-white   to-gray-400 rounded p-1 sticky inset-0 flex items-center justify-between mb-3'>Description <span > <RiAccountBox2Fill /> </span></h1>
                    <p className='leading-7 p-1'>{data?.description}</p>
                  </div>
                  <div className=' mt-5  h-fit w-full p-1 dark:text-white dark:bg-gradient-to-br dark:via-black dark:from-gray-600 dark:to-gray-800 text-black bg-gradient-to-br from-gray-300 via-white/90   to-gray-400 rounded'>
                    <h1 className='text-2xl dark:bg-gradient-to-br dark:via-black dark:from-gray-400 dark:to-gray-800  bg-gradient-to-br from-gray-300 via-white   to-gray-400 rounded p-1 sticky inset-0 flex items-center justify-between mb-3'>Product info <span > <RiAccountBox2Fill /> </span></h1>
                    <span className='p-1'>
                      whatsincluded:
                      {data?.ProductInfo.whatsincluded.map((e, i) => {
                        return <span key={i}><li>{e}</li></span>
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
            <NewsletterArchive />
 
      </div>
     

    </div>
  )
}

export default ProductDetails
