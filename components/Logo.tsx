"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  /**
   * Size variant for the logo
   */
  size?: "sm" | "md" | "lg" | "xl";
  
  /**
   * Whether to show text alongside the logo
   */
  showText?: boolean;
  
  /**
   * Whether to make the logo clickable (link to home)
   */
  clickable?: boolean;
  
  /**
   * Custom className for additional styling
   */
  className?: string;
  
  /**
   * Logo image source (optional - falls back to SaltedHash logo)
   */
  logoSrc?: string;
  
  /**
   * Use company name logo variant (SaltedHash-02.svg for text)
   */
  useCompanyNameLogo?: boolean;
  
  /**
   * Alt text for the logo image
   */
  alt?: string;
  
  /**
   * Custom company name (optional - defaults to "CyberArmor")
   */
  companyName?: string;
  
  /**
   * Variant for different contexts
   */
  variant?: "default" | "footer" | "minimal";
}

const sizeClasses = {
  sm: {
    icon: "h-9 w-9",
    text: "text-base",
  },
  md: {
    icon: "h-12 w-12",
    text: "text-lg",
  },
  lg: {
    icon: "h-18 w-18",
    text: "text-xl",
  },
  xl: {
    icon: "h-72 w-72",
    text: "text-3xl",
  },
};

  const variantClasses = {
  default: {
    icon: "text-primary transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg",
    text: "font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
    container: "group transition-all duration-300 hover:scale-105",
  },
  footer: {
    icon: "text-primary",
    text: "font-bold bg-gradient-to-r from-primary via-purple to-secondary bg-clip-text text-transparent",
    container: "group gap-2",
    wrapper: "",
  },
  minimal: {
    icon: "text-foreground",
    text: "font-semibold text-foreground",
    container: "",
  },
};

export default function Logo({
  size = "md",
  showText = true,
  clickable = true,
  className,
  logoSrc,
  useCompanyNameLogo = false,
  alt = "SaltedHash Logo",
  companyName = "SaltedHash",
  variant = "default",
}: LogoProps) {
  const sizeConfig = sizeClasses[size];
  const variantConfig = variantClasses[variant];
  
  const logoContent = (
    <div className={cn(
      "flex items-center animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-300 -space-x-2",
      variantConfig.container,
      className
    )}>
      {/* Logo Icon/Image */}
      <div className={cn(
        variant === "footer" ? (variantConfig as any).wrapper : "",
        "relative"
      )}>
        {logoSrc ? (
          <Image
            src={logoSrc}
            alt={alt}
            width={size === "sm" ? 36 : size === "md" ? 48 : size === "lg" ? 72 : 288}
            height={size === "sm" ? 36 : size === "md" ? 48 : size === "lg" ? 72 : 288}
            className={cn(
              sizeConfig.icon,
              variant === "footer" ? "" : variantConfig.icon
            )}
            priority
          />
        ) : (
          <>
            <Image
              src="/resource/SaltedHash-07.svg"
              alt={alt}
              width={size === "sm" ? 36 : size === "md" ? 48 : size === "lg" ? 72 : 288}
              height={size === "sm" ? 36 : size === "md" ? 48 : size === "lg" ? 72 : 288}
              className={cn(
                sizeConfig.icon,
                variant === "footer" ? "" : variantConfig.icon
              )}
              priority
            />
            {/* Fingerprint filling animation - fills from bottom to top */}
            <div 
              className="absolute inset-0 pointer-events-none rounded-full overflow-hidden"
              style={{
                WebkitMask: "url('/resource/SaltedHash-07.svg') no-repeat center",
                WebkitMaskSize: "contain",
                mask: "url('/resource/SaltedHash-07.svg') no-repeat center",
                maskSize: "contain",
              }}
            >
              <div 
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(90deg, #00FFFF 0%, #8B5CF6 50%, #FF0080 100%)",
                  animation: "fingerprint-fill-up 5s ease-in-out infinite",
                  transformOrigin: "bottom",
                  opacity: 0.9,
                }}
              />
            </div>
          </>
        )}
      </div>
      
      {/* Company Name */}
      {showText && (
        useCompanyNameLogo ? (
          <div className="relative inline-block">
            <Image
              src="/resource/SaltedHash-02.svg"
              alt={companyName}
              width={size === "sm" ? 120 : size === "md" ? 150 : size === "lg" ? 180 : 210}
              height={size === "sm" ? 39 : size === "md" ? 48 : size === "lg" ? 60 : 72}
              className="h-auto"
              priority
            />
            {/* Animated gradient mask - only affects SVG content */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(90deg, #00FFFF 0%, #8B5CF6 50%, #FF0080 100%)",
                backgroundSize: "200% auto",
                animation: "text-shimmer 5s ease-in-out infinite",
                WebkitMask: "url('/resource/SaltedHash-02.svg') no-repeat center",
                WebkitMaskSize: "contain",
                mask: "url('/resource/SaltedHash-02.svg') no-repeat center",
                maskSize: "contain",
                opacity: 1,
              }}
            />
          </div>
        ) : (
          <span className={cn(
            sizeConfig.text,
            variantConfig.text
          )}>
            {companyName}
          </span>
        )
      )}
    </div>
  );

  if (clickable) {
    return (
      <Link href="/" className="inline-block">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}

// Preset configurations for common use cases
export function LogoNavbar(props?: Partial<LogoProps>) {
  return (
    <Logo 
      size="lg" 
      showText={true} 
      clickable={true} 
      variant="default" 
      useCompanyNameLogo={true}
      {...props} 
    />
  );
}

export function LogoFooter(props?: Partial<LogoProps>) {
  return (
    <Logo 
      size="lg" 
      showText={true} 
      clickable={true} 
      variant="footer" 
      useCompanyNameLogo={true}
      {...props} 
    />
  );
}

export function LogoMinimal(props?: Partial<LogoProps>) {
  return (
    <Logo 
      size="sm" 
      showText={false} 
      clickable={false} 
      variant="minimal" 
      {...props} 
    />
  );
}

export function LogoLarge(props?: Partial<LogoProps>) {
  return (
    <Logo 
      size="xl" 
      showText={true} 
      clickable={true} 
      variant="default" 
      useCompanyNameLogo={true}
      {...props} 
    />
  );
}
