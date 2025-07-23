import React from 'react'

import { useEffect } from 'react'
import { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useNavigate } from 'react-router-dom'
import ProductsCard from '../components/ProductsCard'
import { products } from '../services/productsData/screwdrivers'


gsap.registerPlugin(ScrollTrigger, useGSAP)


const Products = () => {
    // const navigate = useNavigate()
    const productRefs = useRef([]);
    productRefs.current = []; // reset on each render

    // 2) A function to add each card’s DOM node into productRefs.current
    const addProductRef = el => {
        if (el && !productRefs.current.includes(el)) {
            productRefs.current.push(el);
        }
    };

    const proRef = useRef()
    useEffect(() => {
        const tl = gsap.timeline()
        tl.fromTo(proRef.current, {
            y: 200,
            opacity: 0,
            scale: 0.8,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.2,
        })
        tl.to(proRef.current, {
            scale: 1,
            duration: 0.2
        })
        tl.fromTo(productRefs.current, {
            opacity: 0,
            scale: 0.8,
            x: -300,
            y: 200
        },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.1
            }

        )
    }, [])
    useGSAP(() => {

    })
    return (

        <div ref={proRef} className="lenis relative dark:text-black text-white h-screen ">
            <div className="flex min-h-screen">
                {/* Sticky Sidebar */}
                <aside className="sticky top-0 h-screen  md:w-64  p-4 flex-shrink-0">
                    <div className='mt-30'>
                        <h2 className="text-xl  font-bold mb-4">FILTER:</h2>
                        <p>Filter items here</p>
                    </div>
                </aside>

                {/* Scrollable Content (Actually scrolls with Lenis) */}
                <main className="flex-1 p-6  ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 mt-30 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                        {
                            products.map((e, i) => (
                                <ProductsCard data={e} db={'all'}ref={addProductRef} />
                            )
                         )
                        }
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Products