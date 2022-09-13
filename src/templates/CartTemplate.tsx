import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { DeliveryFormData, deliveryFormSchema } from '../types'

import { Cart, DeliveryForm } from '../components'

export const CartTemplate = () => {
  const { push } = useRouter()

  const cartForm = useForm<DeliveryFormData>({
    resolver: zodResolver(deliveryFormSchema),
  })

  const { handleSubmit } = cartForm

  const handleSubmitCart = useCallback(
    (data: DeliveryFormData) => {
      console.log(data)
      push('/order-confirmed')
    },
    [push],
  )

  return (
    <form
      className="flex mb-8 gap-8 flex-col lg:flex-row"
      onSubmit={handleSubmit(handleSubmitCart)}
    >
      <FormProvider {...cartForm}>
        <DeliveryForm />
        <Cart />
      </FormProvider>
    </form>
  )
}
