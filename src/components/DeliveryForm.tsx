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
  const { register, formState, setValue } = useFormContext()

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
        <Input
          placeholder="CEP"
          error={formState.errors.cep?.message as string}
          {...register('cep')}
        />
        <Input
          placeholder="Address"
          className="w-full mt-4"
          error={formState.errors.address?.message as string}
          {...register('address')}
        />

        <div className="my-4 flex gap-4">
          <Input
            placeholder="Number"
            type="number"
            className="w-1/2 md:w-1/3"
            error={formState.errors.number?.message as string}
            {...register('number')}
          />
          <Input
            placeholder="Complement"
            className="w-full"
            error={formState.errors.complement?.message as string}
            {...register('complement')}
          />
        </div>

        <div className="my-4 flex flex-col md:flex-row gap-4">
          <Input
            placeholder="District"
            className="w-full md:w-1/2"
            error={formState.errors.district?.message as string}
            {...register('district')}
          />
          <Input
            placeholder="City"
            className="w-full"
            error={formState.errors.city?.message as string}
            {...register('city')}
          />
          <Input
            placeholder="State"
            className="w-full md:w-1/3"
            error={formState.errors.state?.message as string}
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
        <RadioGroup.Root
          asChild
          onValueChange={(value) => setValue('paymentType', value)}
        >
          <>
            <div className="flex flex-col lg:items-center lg:flex-row gap-3 mb-4">
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
            <span className="text-sm text-red-800">
              {formState.errors.paymentType?.message as string}
            </span>
          </>
        </RadioGroup.Root>
      </Form>
    </div>
  )
}
