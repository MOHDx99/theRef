"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { useForm, useFormState } from "react-hook-form"
import { useState } from "react"

const formSchema = z.object({
  value: z.string().min(1, {
    message: "Veillez taper au moins un caractére",
  }),
});


export const StoreModalSearch = () => {
    

const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
        value:''
    },
});


const onSubmit =async (value: z.infer<typeof formSchema>) => {
    console.log(value)
    
}



  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (  
            <FormItem>
              <FormLabel>Rechercher un produit</FormLabel>
              <FormControl>
                <Input placeholder="Recherche" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className=" hidden" type="submit">Submit</Button>
      </form>
      <div></div>
    </Form>
    
  )
}
