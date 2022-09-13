import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { DeliveryFormData, deliveryFormSchema } from '../types'

import { Cart, DeliveryForm } from '../components'
import { useCallback } from 'react'

export const CartTemplate = () => {
  const cartForm = useForm<DeliveryFormData>({
    resolver: zodResolver(deliveryFormSchema),
  })

  const { handleSubmit } = cartForm

  const handleSubmitCart = useCallback((data: DeliveryFormData) => {
    console.log(data)
  }, [])

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
