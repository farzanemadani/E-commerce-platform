'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '@/shared/ui/button'
import { Field, FieldError, FieldGroup } from '@/shared/ui/field'
import { Input } from '@/shared/ui/input'

import { LoginSchema, LoginSchemaType } from '../model/schema'

export function LoginForm() {
  const { control, handleSubmit } = useForm<LoginSchemaType>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: zodResolver(LoginSchema),
  })

  const onSubmit = (data: LoginSchemaType) => {
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
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder="پسوورد"
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
    </form>
  )
}
