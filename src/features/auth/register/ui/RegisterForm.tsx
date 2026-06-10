'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '@/shared/ui/button'
import { Field, FieldError, FieldGroup } from '@/shared/ui/field'
import { Input } from '@/shared/ui/input'

import { RegisterSchema, RegisterSchemaType } from '../model/schema'

export function RegisterForm() {
  const { control, handleSubmit } = useForm<RegisterSchemaType>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(RegisterSchema),
  })

  const onSubmit = (data: RegisterSchemaType) => {
    console.log('data', data)
  }
  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="username"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder="نام کاربری"
                className="h-10"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder="ایمیل"
                className="h-10"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder="پسورد"
                className="h-10"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder="تکرار پسورد"
                className="h-10"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Button className="mt-4 h-10 w-full" type="submit">
        ادامه
      </Button>
      <p className="mx-auto mt-4 w-fit text-sm">
        حساب کاربری دارید؟{' '}
        <Link href="/login" className="text-blue-500 underline">
          ورود
        </Link>
      </p>
    </form>
  )
}
