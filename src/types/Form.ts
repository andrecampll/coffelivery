import * as zod from 'zod'

export const deliveryFormSchema = zod.object({
  cep: zod.string().min(1, 'Insert CEP'),
  address: zod.string().min(1, 'Insert Address'),
  number: zod.string().min(1, 'Insert CEP'),
  complement: zod.string().min(1, 'Insert Complement'),
  district: zod.string().min(1, 'Insert District'),
  city: zod.string().min(1, 'Insert City'),
  state: zod.string().min(1, 'Insert State'),
  paymentType: zod.string().min(1, 'Select payment type'),
})

export type DeliveryFormData = zod.infer<typeof deliveryFormSchema>
