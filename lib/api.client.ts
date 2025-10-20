"use client";

import { User, ContactFormData } from "@/types";

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock authentication (client-side)
export async function loginUser(email: string, password: string): Promise<User | null> {
  await delay(500);
  
  // In a real app, this would be an API call:
  // const response = await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
  
  // For demo purposes, check against hardcoded credentials
  const demoUsers: User[] = [
    {
      id: "1",
      email: "demo@cyberarmor.com",
      password: "Demo@123",
      name: "Demo User",
      role: "client",
    },
    {
      id: "2",
      email: "admin@cyberarmor.com",
      password: "Admin@123",
      name: "Admin User",
      role: "admin",
    },
  ];
  
  const user = demoUsers.find((u) => u.email === email && u.password === password);
  
  if (user) {
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword as User;
  }
  
  return null;
}

// Mock registration (client-side)
export async function registerUser(email: string, password: string, name: string): Promise<boolean> {
  await delay(500);
  
  // In a real app, this would be an API call:
  // const response = await fetch('/api/auth/register', { method: 'POST', body: JSON.stringify({ email, password, name }) });
  
  // For now, just simulate success
  console.log("User registered:", { email, name });
  return true;
}

// Mock contact form submission (client-side)
export async function submitContactForm(data: ContactFormData): Promise<boolean> {
  await delay(1000);
  
  // In a real app, this would be an API call:
  // const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
  
  console.log("Contact form submitted:", data);
  return true;
}

