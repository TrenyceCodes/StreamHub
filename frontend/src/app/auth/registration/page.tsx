"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { fetchRegisterPost } from "@/app/httpHelpers/fetchHelper";
  
  const formSchema = z.object({
    username: z.string().min(2, {message: "Username must be at least 2 characters.",}),
    emailaddress: z.string().email({message: "Email must be valid"}).min(2),
    password: z.string().min(2).max(9, {message: "Password must be at least 2-8 characters.",}),
  });
  
  export default function RegistrationPage() {
    const { toast } = useToast();
    const router = useRouter();
    // ...
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        emailaddress: "",
        password: "",
      },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
      try {
        const results = await fetchRegisterPost(values.username, values.emailaddress, values.password);
        toast({
          title: "Registration Message",
          description: `${results}`
        })
        router.push("/auth/login");
      } catch (error) {
        toast({
          title: "Registration Error Error",
          description: "There was a problem when you registered. Please try again."
        })
        console.error("There was a problem when user registered. " + error);
      }
    }
  
    return (
     <div className="p-2 m-5">
      <h1>Registration Page</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-2 space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="JohnDoe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="emailaddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>EmailAddress</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe@gmail.com" {...field} />
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
  