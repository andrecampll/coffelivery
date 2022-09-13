import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { useFormContext } from 'react-hook-form'

import { Form } from './Form'
import { Input } from './Input'
import { PaymentTypeButton } from './PaymentTypeButton'

export const DeliveryForm = () => {
  const { register, formState } = useFormContext()

  console.log(formState)

  return (
    <div>
      <h1 className="text-lg text-black-500 font-bold mb-4">
        Finish your order
      </h1>

      <Form
        title="Delivery Address"
        description="Enter the address where you want to receive your order"
        icon={<MapPinLine color="#C47F17" size={22} />}
      >
        <Input placeholder="CEP" {...register('cep')} />
        <Input
          placeholder="Address"
          className="w-full mt-4"
          {...register('address')}
        />

        <div className="my-4 flex gap-4">
          <Input
            placeholder="Number"
            type="number"
            className="w-1/2 md:w-1/3"
            {...register('number')}
          />
          <Input
            placeholder="Complement"
            className="w-full"
            {...register('complement')}
          />
        </div>

        <div className="my-4 flex flex-col md:flex-row gap-4">
          <Input
            placeholder="District"
            className="w-full md:w-1/2"
            {...register('district')}
          />
          <Input placeholder="City" className="w-full" {...register('city')} />
          <Input
            placeholder="State"
            className="w-full md:w-1/3"
            {...register('state')}
          />
        </div>
      </Form>

      <Form
        className="mt-3"
        title="Payment"
        description="Payment is made on delivery. Choose the way you want to pay"
        icon={<CurrencyDollar color="#21A756" size={22} />}
      >
        <RadioGroup.Root asChild {...register('paymentForm')}>
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
}
