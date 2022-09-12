import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export const OrderConfirmed = () => (
  <main className="flex mt-20 justify-between items-end">
    <div>
      <header className="mb-10">
        <h1 className="text-secondary-800 font-bold text-3xl">
          Wohoo! Order confirmed
        </h1>
        <span className="text-black-500">
          Now all you have to do is wait for the coffee to come to you soon
        </span>
      </header>

      <div className="p-10 rounded-tr-4xl rounded-bl-4xl rounded-tl-md rounded-br-md flex flex-col gap-8 border border-secondary-800">
        <div className="flex items-center gap-3">
          <div className={`rounded-full bg-primary-500 w-8 p-2`}>
            <MapPin weight="fill" size={16} color="#fff" />
          </div>

          <span className="text-black-500 max-w-xs">
            Delivery at Avenida Ceará 1039 B Canudos - Belém, PA
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className={`rounded-full bg-secondary-500 w-8 p-2`}>
            <Timer weight="fill" size={16} color="#fff" />
          </div>

          <div>
            <span className="text-black-500">Delivery Forecast</span>
            <p className="font-bold text-black-500">20 min - 30 min</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className={`rounded-full bg-secondary-800 w-8 p-2`}>
            <CurrencyDollar weight="fill" size={16} color="#fff" />
          </div>

          <div>
            <span className="text-black-500">Payment on Delivery</span>
            <p className="font-bold text-black-500">Credit Card</p>
          </div>
        </div>
      </div>
    </div>

    <aside>
      <img src="/illustration.svg" alt="" />
    </aside>
  </main>
)
