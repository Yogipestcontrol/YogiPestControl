import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  name: string;
  slug: string;
  shortDesc: string;
  image: string;
  variant?: "standard" | "featured" | "minimal" | "horizontal";
  reversed?: boolean;
}

export function ServiceCard({
  name,
  slug,
  shortDesc,
  image,
  variant = "standard",
  reversed = false,
}: ServiceCardProps) {
  const href = `/services/${slug}`;

  if (variant === "featured") {
    return (
      <Link
        href={href}
        className={`group card-lift flex flex-col overflow-hidden rounded-2xl border border-border bg-surface lg:h-80 ${
          reversed ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div className="card-image-zoom relative h-64 w-full lg:h-auto lg:w-[55%]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
        </div>
        <div className="flex flex-1 flex-col justify-center p-8 lg:p-10">
          <span className="overline mb-3 text-accent">Featured Service</span>
          <h3 className="mb-3 font-[family-name:var(--font-display)] text-2xl font-bold text-foreground transition-colors group-hover:text-primary lg:text-3xl">
            {name}
          </h3>
          <p className="mb-6 text-base leading-relaxed text-muted">{shortDesc}</p>
          <span className="link-underline text-primary">
            Learn More <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    );
  }

  if (variant === "minimal") {
    return (
      <Link
        href={href}
        className="group flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition-all duration-300 hover:border-primary/30 hover:bg-surface-alt"
      >
        <span className="font-semibold text-foreground group-hover:text-primary">{name}</span>
        <ArrowRight className="h-4 w-4 text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
      </Link>
    );
  }

  if (variant === "horizontal") {
    return (
      <Link
        href={href}
        className="group card-lift flex overflow-hidden rounded-2xl border border-border bg-surface"
      >
        <div className="card-image-zoom relative h-auto w-[35%] min-h-[140px]">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div className="flex flex-1 flex-col justify-center p-5">
          <h3 className="mb-1 text-base font-bold text-foreground group-hover:text-primary">{name}</h3>
          <p className="mb-3 text-sm text-muted line-clamp-2">{shortDesc}</p>
          <span className="link-underline text-sm text-primary">
            Learn More <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
    );
  }

  // Standard variant
  return (
    <Link
      href={href}
      className="group card-lift card-image-zoom overflow-hidden rounded-2xl border border-border bg-surface"
    >
      <div className="relative h-48 w-full">
        <Image src={image} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <h3 className="absolute bottom-4 left-5 right-5 text-lg font-bold text-white">
          {name}
        </h3>
      </div>
      <div className="p-5">
        <p className="mb-3 text-sm text-muted">{shortDesc}</p>
        <span className="link-underline text-sm text-primary">
          Learn More <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
