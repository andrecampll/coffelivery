import Image from 'next/image'
import { BulletPoints } from './BulletPoints'

export const Banner = () => (
  <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start">
    <div className="my-4 max-w-2xl">
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold text-black leading-snug">
          Find the perfect coffee for any hour of the day
        </h1>
        <p className="my-3 text-black-500">
          With Coffee Delivery you get your coffee wherever you are, anytime
        </p>
      </div>

      <div className="mt-7 lg:mt-16">
        <BulletPoints />
      </div>
    </div>
    <div className="max-w-xl lg:pt-6">
      <Image
        src="/banner.svg"
        width={476}
        height={360}
        alt="A cup of coffee with coffee beans around"
      />
    </div>
  </div>
)
