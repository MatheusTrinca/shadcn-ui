'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { PopoverTrigger, Popover, PopoverContent } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ACCOUNT_TYPES, signupSchema } from '@/schemas/signupSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon, PersonStandingIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import Link from 'next/link';
import { Controller, useForm, useWatch } from 'react-hook-form';
import * as z from 'zod';
// import { toast } from "sonner"

type SignUpForm = z.infer<typeof signupSchema>;

export default function SignUp() {
  const form = useForm<SignUpForm>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      accountType: 'personal',
      companyName: '',
      numberOfEmployees: 0,
      dateOfBirth: new Date(),
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
  });

  function handleSubmit(data: SignUpForm) {
    console.log(data);
  }

  const accountType = useWatch({ control: form.control, name: 'accountType' });

  return (
    <>
      <PersonStandingIcon size={50} />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>Sign up for a new SupportMe account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(handleSubmit)} id="signup-form">
            <FieldGroup>
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <FieldDescription>This is the email address you signed up to SupportMe with</FieldDescription>
                    <Input
                      {...field}
                      id="email"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter your email address"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Controller
                name="accountType"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-signup-accountType">Account Type</FieldLabel>
                    <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger id="form-signup-accountType" aria-invalid={fieldState.invalid}>
                        <SelectValue placeholder="Select an account type" />
                      </SelectTrigger>
                      <SelectContent>
                        {ACCOUNT_TYPES.map(type => (
                          <SelectItem value={type.value} key={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              {accountType === 'personal' && (
                <Controller
                  name="dateOfBirth"
                  control={form.control}
                  render={({ field, fieldState }) => {
                    const dbFromDate = new Date();
                    dbFromDate.setFullYear(dbFromDate.getFullYear() - 120);

                    return (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="dateOfBirth">Date of Birth</FieldLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              id="dateOfBirth"
                              className="flex justify-between font-normal w-full"
                            >
                              {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                              <CalendarIcon className="mr-2 h-4 w-4" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              captionLayout="dropdown"
                              selected={field.value}
                              onSelect={field.onChange}
                              defaultMonth={field.value}
                              startMonth={dbFromDate}
                              disabled={(date: Date) => date > new Date() || date < dbFromDate}
                              fixedWeeks
                            />
                          </PopoverContent>
                        </Popover>
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    );
                  }}
                />
              )}

              {accountType === 'company' && (
                <>
                  <Controller
                    name="companyName"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="companyName">Company Name</FieldLabel>
                        <Input {...field} aria-invalid={fieldState.invalid} placeholder="Enter your company name" />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />

                  <Controller
                    name="numberOfEmployees"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="numberOfEmployees">Employees</FieldLabel>
                        <Input
                          {...field}
                          type="number"
                          min={0}
                          id="numberOfEmployees"
                          aria-invalid={fieldState.invalid}
                          placeholder="Enter your number of employees"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                </>
              )}

              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="companyName">Password</FieldLabel>
                    <Input
                      {...field}
                      type="password"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter your password"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Controller
                name="confirmPassword"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="companyName">Confirm Password</FieldLabel>
                    <Input
                      {...field}
                      type="password"
                      aria-invalid={fieldState.invalid}
                      placeholder="Confirm your password"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Controller
                name="acceptTerms"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field orientation="horizontal" data-invalid={fieldState.invalid}>
                    <Checkbox
                      id="terms-checkbox"
                      aria-invalid={fieldState.invalid}
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <FieldContent>
                      <FieldLabel htmlFor="terms-checkbox">Accept terms and conditions</FieldLabel>
                      <FieldDescription>
                        By clicking this checkbox, you agree to the terms and conditions.
                      </FieldDescription>
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </FieldContent>
                  </Field>
                )}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter className="border-t flex flex-col gap-6">
          <Field>
            <Button type="submit" form="signup-form">
              Sign up
            </Button>
          </Field>
          <div className="flex justify-between items-center w-full">
            <small>Already have an account?</small>
            <Button asChild variant="outline" size="sm">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
