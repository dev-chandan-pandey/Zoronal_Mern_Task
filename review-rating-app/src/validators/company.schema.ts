import { LogOut } from "lucide-react";
import { z } from "zod";

export const companySchema = z.object({
  logo: z.string().optional(),  
  
  name: z.string().min(2),

  location: z.string().min(2),

  city: z.string().min(2),

  foundedOn: z.string(),

  description: z.string().min(10),
});