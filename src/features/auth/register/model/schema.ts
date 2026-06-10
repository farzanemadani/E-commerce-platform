import { z } from 'zod'

export const RegisterSchema = z
  .object({
    username: z.string().min(3, 'نام کاربری باید حداقل ۳ کاراکتر باشد'),
    email: z.string().email('ایمیل نامعتبر است'),
    password: z.string().min(6, 'پسورد باید حداقل ۶ کاراکتر باشد'),
    confirmPassword: z.string().min(6, 'تکرار پسورد باید حداقل ۶ کاراکتر باشد'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'پسورد و تکرار پسورد باید یکسان باشند',
  })

export type RegisterSchemaType = z.infer<typeof RegisterSchema>
