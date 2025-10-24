"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { submitContactForm } from "@/lib/api.client";
import { fadeInUp } from "@/lib/motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    whatsapp: "",
    telegram: "",
    service: "",
    message: "",
    communicationMethod: "",
    preferredTime: "",
    privacyPolicy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const success = await submitContactForm(formData);
      if (success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          whatsapp: "",
          telegram: "",
          service: "",
          message: "",
          communicationMethod: "",
          preferredTime: "",
          privacyPolicy: false,
        });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="mt-2"
          />
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="mt-2"
          />
        </div>

        {/* Company */}
        <div>
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company"
            className="mt-2"
          />
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            className="mt-2"
          />
        </div>

        {/* WhatsApp */}
        <div>
          <Label htmlFor="whatsapp">WhatsApp (Optional)</Label>
          <Input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            className="mt-2"
          />
        </div>

        {/* Telegram */}
        <div>
          <Label htmlFor="telegram">Telegram (Optional)</Label>
          <Input
            id="telegram"
            name="telegram"
            type="text"
            value={formData.telegram}
            onChange={handleChange}
            placeholder="@username"
            className="mt-2"
          />
        </div>

        {/* Service */}
        <div>
          <Label htmlFor="service">Service Interested In *</Label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="mt-2 flex h-10 w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <option value="">Select a service</option>
            <option value="security-assessment-protection">Security Assessment & Protection</option>
            <option value="digital-investigation-cybercrime">Digital Investigation & Cybercrime</option>
            <option value="forensic-services">Forensic Services</option>
            <option value="managed-cybersecurity-services">Managed Cybersecurity Services</option>
            <option value="governance-risk-compliance">Governance, Risk & Compliance</option>
            <option value="training-awareness">Training & Awareness</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your security needs..."
            className="mt-2"
            rows={5}
          />
        </div>

        {/* Preferred Communication Method */}
        <div>
          <Label htmlFor="communicationMethod">Preferred Communication Method *</Label>
          <select
            id="communicationMethod"
            name="communicationMethod"
            required
            value={formData.communicationMethod}
            onChange={handleChange}
            className="mt-2 flex h-10 w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <option value="">Select preferred method</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="telegram">Telegram</option>
          </select>
        </div>

        {/* Preferred Time for Call */}
        <div>
          <Label htmlFor="preferredTime">Preferred Time for Call</Label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className="mt-2 flex h-10 w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <option value="">Select preferred time</option>
            <option value="morning">Morning (9 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
            <option value="evening">Evening (5 PM - 8 PM)</option>
            <option value="anytime">Anytime</option>
          </select>
        </div>

        {/* Privacy Policy Checkbox */}
        <div className="flex items-start gap-3">
          <input
            id="privacyPolicy"
            name="privacyPolicy"
            type="checkbox"
            required
            checked={formData.privacyPolicy}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary focus:ring-offset-2"
          />
          <Label htmlFor="privacyPolicy" className="text-sm text-foreground/70">
            I agree to the{" "}
            <a href="/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
            </a>{" "}
            and consent to the processing of my personal data. *
          </Label>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full group"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>

        {/* Status Messages */}
        <AnimatePresence>
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-md text-green-500"
            >
              <CheckCircle className="h-5 w-5" />
              <p>Thank you! We&apos;ll get back to you within 24 hours.</p>
            </motion.div>
          )}
          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-md text-red-500"
            >
              <AlertCircle className="h-5 w-5" />
              <p>Something went wrong. Please try again.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
}

