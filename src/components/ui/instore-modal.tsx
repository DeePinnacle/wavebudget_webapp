'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type overlayProps = {
    overlay: Boolean
}

const InstorModal = ({ overlay }: overlayProps) =>{
    const navigation = useRouter()
    const handleInstore = () => {
        navigation.push('/instore')
    }
    const handleSTN = () => {
      navigation.push('/stn')
    }
    const handleEcommerce = () => {
      navigation.push('https://wavemart.wavebudget.com')
    }
    return (
        <div
        className={`${
          overlay === true ? "block" : "hidden"
        } close flex flex-row items-center justify-center absolute inset-0 w-full h-[950px] bg-black/20`}
      >
        <div className="fixed bottom-44 bg-white w-11/12 min-h-5 rounded-2xl p-3 z-[1000000]">
          <div className="p-2 my-2 grid grid-cols-2 items-center justify-around gap-3">
            <div className="bg-[#C6F9F7] border border-solid border-[#0FAEA5] p-2 rounded-xl overflow-hidden" onClick = { handleInstore }>
              <h2 className="text-[#0B7E78] font-bold ">
                In store <br /> shopping
              </h2>
              <div className="relative w-20 h-20 left-16 top-2 overflow-hidden">
                <Image
                  src={"/bag.png"}
                  alt="bag"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
            <div className="bg-[#F9F4C6] border border-solid border-[#EBDD5C] p-2 rounded-xl overflow-hidden" onClick={ handleEcommerce }>
              <h2 className="text-[#C9B817] font-bold ">
                E-commerce <br /> shopping
              </h2>
              <div className="relative w-20 h-20 left-16 top-2 overflow-hidden">
                <Image
                  src={"/straight-cart.png"}
                  alt="bag"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#0B7E78] my-3 p-2 rounded-xl overflow-hidden" onClick={ handleSTN }>
            <div className="p-2 rounded-xl">
              <h2 className="font-bold text-white ">
                Social Trust Network <br />
              </h2>
              <div className="relative bottom w-48 h-20 top-5 left-32 overflow-hidden">
                <Image
                  src={"/group-user.png"}
                  alt="bag"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default InstorModal