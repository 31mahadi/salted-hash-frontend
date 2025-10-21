import { Service, Blog, CompanyInfo, Testimonial } from "@/types";

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Client-side data fetching functions
export async function getServices(): Promise<Service[]> {
  await delay(100);
  const response = await fetch('/data/services.json');
  if (!response.ok) {
    throw new Error('Failed to fetch services');
  }
  return response.json();
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const services = await getServices();
  return services.find((service) => service.slug === slug) || null;
}

export async function getBlogs(): Promise<Blog[]> {
  await delay(100);
  const response = await fetch('/data/blogs.json');
  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }
  return response.json();
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const blogs = await getBlogs();
  return blogs.find((blog) => blog.slug === slug) || null;
}

export async function getCompanyInfo(): Promise<CompanyInfo> {
  await delay(100);
  const response = await fetch('/data/company.json');
  if (!response.ok) {
    throw new Error('Failed to fetch company info');
  }
  return response.json();
}

export async function getTestimonials(): Promise<Testimonial[]> {
  await delay(100);
  const response = await fetch('/data/testimonials.json');
  if (!response.ok) {
    throw new Error('Failed to fetch testimonials');
  }
  return response.json();
}

// Auth functions (mock implementations)
export async function loginUser(email: string, password: string): Promise<any> {
  await delay(500);
  // Mock login - in real app, this would call your auth API
  if (email && password) {
    return { id: 1, email, name: "User" };
  }
  return null;
}

export async function registerUser(userData: any): Promise<any> {
  await delay(500);
  // Mock registration - in real app, this would call your auth API
  if (userData.email && userData.password) {
    return { id: 1, ...userData };
  }
  return null;
}

export async function submitContactForm(formData: any): Promise<boolean> {
  await delay(1000);
  // Mock form submission - in real app, this would call your API
  console.log('Contact form submitted:', formData);
  return true;
}