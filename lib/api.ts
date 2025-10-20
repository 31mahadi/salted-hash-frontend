import { Service, Blog, CompanyInfo, Testimonial } from "@/types";

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Helper to read JSON file (server-side only)
async function readJsonFile<T>(filename: string): Promise<T> {
  const fs = await import("fs/promises");
  const path = await import("path");
  const { DATA_PATH } = await import("./constants");
  
  const filePath = path.join(process.cwd(), "public", DATA_PATH, filename);
  const fileContent = await fs.readFile(filePath, "utf-8");
  return JSON.parse(fileContent);
}

// Fetch services
export async function getServices(): Promise<Service[]> {
  await delay(100);
  return readJsonFile<Service[]>("services.json");
}

// Fetch single service by slug
export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const services = await getServices();
  return services.find((service) => service.slug === slug) || null;
}

// Fetch blogs
export async function getBlogs(): Promise<Blog[]> {
  await delay(100);
  return readJsonFile<Blog[]>("blogs.json");
}

// Fetch single blog by slug
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const blogs = await getBlogs();
  return blogs.find((blog) => blog.slug === slug) || null;
}

// Fetch company info
export async function getCompanyInfo(): Promise<CompanyInfo> {
  await delay(100);
  return readJsonFile<CompanyInfo>("company.json");
}

// Fetch testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  await delay(100);
  return readJsonFile<Testimonial[]>("testimonials.json");
}


