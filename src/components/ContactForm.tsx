"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { siteConfig } from "@/lib/siteConfig";
import React from "react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please include a bit more detail"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm(): React.JSX.Element {
  const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { service: siteConfig.services[0]?.key ?? "web" },
  });

  async function onSubmit(values: FormValues): Promise<void> {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success("Message sent! We'll get back to you soon.");
      reset();
    } catch (_err) {
      toast.error("Failed to send. Please try again.", {
        action: {
          label: "Email us",
          onClick: () => {
            window.location.href = `mailto:${siteConfig.contactEmail}`;
          },
        },
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Your name" aria-invalid={!!errors.name} {...register("name")} />
        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@company.com" aria-invalid={!!errors.email} {...register("email")} />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <Label>Service</Label>
        <Select defaultValue={(siteConfig.services[0]?.title ?? "Website Development").toLowerCase().replace(/\s+/g, "-")} onValueChange={(v) => setValue("service", v)}>
          <SelectTrigger>
            <SelectValue placeholder="Choose a service" />
          </SelectTrigger>
          <SelectContent>
            {siteConfig.services.map((s, idx) => {
              const value = (s.title ?? `service-${idx}`).toLowerCase().replace(/\s+/g, "-");
              return (
                <SelectItem key={value} value={value}>{s.title}</SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Tell us about your project..." rows={5} aria-invalid={!!errors.message} {...register("message")} />
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full">{isSubmitting ? "Sending..." : "Send Message"}</Button>
    </form>
  );
}


