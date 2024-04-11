"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { axiosLoginPost } from "@/app/httpHelpers/axiosHelper"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string().min(2, {message: "Username must be at least 2 characters.",}),
  password: z.string().min(2).max(9, {message: "Password must be at least 2-8 characters.",}),
})

export default function LoginPage() {
  const { toast } = useToast();
  const router = useRouter();
  // ...
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    
    try {
      const results = await axiosLoginPost(values.username, values.password);
      toast({
        title: "Login Message",
        description: `${results}`,
      })
      router.push("/home")
      console.log(results);
      return results;
    } catch (error) {
      toast({
        title: "Login Error",
        description: "There was problem when you were logged in. Please try again."
      })
      console.error("There was a problem when user logged in " + error);
    }
  }

  return (
    <div className="p-2 m-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="BruceWayne" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="123456779" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}
