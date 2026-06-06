import { z } from 'zod'

export const LoginSchema = z.object({
  username: z.string().min(3, 'نام کاربری باید حداقل ۳ کاراکتر باشد'),
  password: z.string().min(6, 'پسورد باید حداقل ۶ کاراکتر باشد'),
})

export type LoginSchemaType = z.infer<typeof LoginSchema>
