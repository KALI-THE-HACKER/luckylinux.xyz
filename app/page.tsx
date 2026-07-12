import type { Metadata } from "next"
import HomeClient from "./home-client"

export const metadata: Metadata = {
  title: "Lucky Verma | Backend & Infrastructure Engineer Portfolio",
  description: "Personal portfolio and self-hosted showcase of Lucky Verma, a Computational and Data Science student at NITK Surathkal specializing in backend engineering, distributed systems, container orchestration, and automation.",
  keywords: [
    "Lucky Verma",
    "Luckylinux",
    "Backend Engineer",
    "Infrastructure Engineer",
    "NITK Surathkal",
    "Self-Hosted",
    "Systems Engineer",
    "Docker",
    "DevOps",
    "FastAPI",
    "n8n",
    "Plausible Analytics",
    "Nextcloud"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luckylinux.dev",
    siteName: "Luckylinux's Self-Hosted Universe",
    title: "Lucky Verma | Backend & Infrastructure Engineer Portfolio",
    description: "Explore the self-hosted services, automation pipelines, and engineering projects built by Lucky Verma.",
    images: [
      {
        url: "https://luckylinux.dev/profile_img.png",
        width: 800,
        height: 800,
        alt: "Lucky Verma Profile"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucky Verma | Backend & Infrastructure Engineer Portfolio",
    description: "Explore the self-hosted services, automation pipelines, and engineering projects built by Lucky Verma.",
    images: ["https://luckylinux.dev/profile_img.png"]
  }
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Lucky Verma",
    "alternateName": "Luckylinux",
    "url": "https://luckylinux.dev",
    "image": "https://luckylinux.dev/profile_img.png",
    "sameAs": [
      "https://github.com/KALI-THE-HACKER",
      "https://linkedin.com/in/luckylinux"
    ],
    "jobTitle": "Backend & Infrastructure Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Katha AI"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "National Institute of Technology Karnataka, Surathkal",
      "sameAs": "https://www.nitk.ac.in"
    },
    "knowsAbout": [
      "Backend Engineering",
      "Distributed Systems",
      "Cloud Infrastructure",
      "Linux Systems Administration",
      "Docker",
      "CI/CD",
      "FastAPI",
      "Django",
      "Python",
      "TypeScript",
      "React",
      "Nginx"
    ],
    "description": "Computational and Data Science student at NITK Surathkal specializing in backend engineering, distributed systems, container orchestration, and automation."
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  )
}
