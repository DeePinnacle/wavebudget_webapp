'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from '../../../components/ui/button' 
import { useRouter } from 'next/navigation'
const Scan = () => {
  const navigation = useRouter()
  const handleAddProduct = () => {
    navigation.push("/instore/scan/add-product")
  }
  return (
    <div className='py-4 bg-slate-100 w-full min-h-screen'>
        <h2 className='text-2xl text-center font-semibold my-5'>Scan</h2>
        <div className= 'relative bg-white my-10 w-3/4 h-72 p-3 rounded-xl mx-auto'>
            <Image src={"/scan.png"} alt='scan-code' fill priority className='object-cover' />
            <div className='absolute w-16 h-16 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-1 bg-white rounded-full'>
                <Image src={"/user.png"} alt='user' priority fill className='z-50' />
            </div>
        </div>
        <h2 className='text-2xl text-center font-semibold'>Wisdom Umanah</h2>
        <p className='text-[#858585] text-center font-semibold text-lg'>Shop ID: <span className='text-black'>23DH98</span></p>
        <div className='flex flex-col mt-10'>
            <Button className='w-11/12 mx-auto bg-[#0B7E78] py-5 hover:bg-[#0B7E78]' size="lg" onClick={ handleAddProduct }>Add product</Button>
        </div>
    </div>
  )
}

export default Scan