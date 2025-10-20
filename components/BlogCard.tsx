"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Blog } from "@/types";
import { formatDate } from "@/lib/utils";
import { scaleIn } from "@/lib/motion";

interface BlogCardProps {
  blog: Blog;
  index?: number;
}

export default function BlogCard({ blog, index = 0 }: BlogCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scaleIn}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <Card className="h-full hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]">
        <CardHeader>
          <div className="flex items-center gap-4 text-sm text-foreground/60 mb-2">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(blog.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{blog.readTime}</span>
            </div>
          </div>
          <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base line-clamp-3">
            {blog.excerpt}
          </CardDescription>
          <div className="mt-4 flex flex-wrap gap-2">
            {blog.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Link href={`/blog/${blog.slug}`} className="w-full">
            <Button variant="ghost" className="w-full group">
              Read Article
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

