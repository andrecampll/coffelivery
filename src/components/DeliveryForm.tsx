import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { Form } from './Form'
import { Input } from './Input'
import { PaymentTypeButton } from './PaymentTypeButton'

export const DeliveryForm = () => (
  <div>
    <h1 className="text-lg text-black-500 font-bold mb-4">Finish your order</h1>

    <Form
      title="Delivery Address"
      description="Enter the address where you want to receive your order"
      icon={<MapPinLine color="#C47F17" size={22} />}
    >
      <Input placeholder="CEP" />
      <Input placeholder="Address" className="w-full mt-4" />

      <div className="my-4 flex gap-4">
        <Input placeholder="Number" type="number" className="w-1/2 md:w-1/3" />
        <Input placeholder="Address" className="w-full" />
      </div>

      <div className="my-4 flex flex-col md:flex-row gap-4">
        <Input placeholder="District" className="w-full md:w-1/2" />
        <Input placeholder="City" className="w-full" />
        <Input placeholder="State" className="w-full md:w-1/3" />
      </div>
    </Form>

    <Form
      className="mt-3"
      title="Payment"
      description="Payment is made on delivery. Choose the way you want to pay"
      icon={<CurrencyDollar color="#21A756" size={22} />}
    >
      <RadioGroup.Root asChild>
        <div className="flex flex-col lg:items-center lg:flex-row gap-3">
          <PaymentTypeButton value="credit">
            <CreditCard color="#21A756" />
            Credit Card
          </PaymentTypeButton>
          <PaymentTypeButton value="debit">
            <Bank color="#21A756" />
            Debit Card
          </PaymentTypeButton>
          <PaymentTypeButton value="money">
            <Money color="#21A756" />
            Money
          </PaymentTypeButton>
        </div>
      </RadioGroup.Root>
    </Form>
  </div>
)
