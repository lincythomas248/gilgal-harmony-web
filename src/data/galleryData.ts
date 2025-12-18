import type { GalleryCollectionData } from "@/components/gallery/GalleryCollection";

/**
 * Gallery Collections Data
 *
 * IMPORTANT:
 * - Keep ONLY ONE `export const galleryCollections = [...]` in this file.
 * - Use `type: "video"` + `poster` for videos.
 */

export const galleryCollections: GalleryCollectionData[] = [
  {
    id: "christmas-service",
    title: "Christmas Service",
    description: "Worship, fellowship, and joyful moments celebrating the birth of our Savior.",
    images: [
      {
        src: "/placeholder.svg",
        alt: "Christmas worship service",
        subtitle: "Christmas Service – Worship & praise",
        type: "image",
      },
      {
        src: "/placeholder.svg",
        alt: "Christmas choir performance",
        subtitle: "Choir presentation during Christmas service",
        type: "image",
      },
      {
        src: "",
        alt: "Christmas service video highlight",
        subtitle: "Christmas Service – Video highlight",
        type: "video",
        poster: "/placeholder.svg",
      },
    ],
  },

  {
    id: "baptism",
    title: "Baptism",
    description: "Celebrating new life in Christ through the sacrament of baptism.",
    images: [
      {
        src: "/placeholder.svg",
        alt: "Baptism ceremony",
        subtitle: "Baptism service – New life in Christ",
        type: "image",
      },
      {
        src: "",
        alt: "Baptism video highlight",
        subtitle: "Baptism – Video highlight",
        type: "video",
        poster: "/placeholder.svg",
      },
    ],
  },

  {
    id: "youth",
    title: "Youth Fellowship",
    description: "Our youth growing together in faith, friendship, and service.",
    images: [
      {
        src: "/placeholder.svg",
        alt: "Youth fellowship meeting",
        subtitle: "Youth fellowship gathering",
        type: "image",
      },
      {
        src: "/placeholder.svg",
        alt: "Youth Bible study",
        subtitle: "Youth Bible study session",
        type: "image",
      },
      {
        src: "",
        alt: "Youth fellowship video highlight",
        subtitle: "Youth Fellowship – Video highlight",
        type: "video",
        poster: "/placeholder.svg",
      },
    ],
  },

  {
    id: "prayer-meeting",
    title: "Prayer Meeting",
    description: "Coming together in prayer and spiritual communion.",
    images: [
      {
        src: "/placeholder.svg",
        alt: "Prayer gathering",
        subtitle: "Congregation united in prayer",
        type: "image",
      },
      {
        src: "/placeholder.svg",
        alt: "Prayer circle",
        subtitle: "Prayer meeting in progress",
        type: "image",
      },
    ],
  },

  {
    id: "scripture-school",
    title: "Scripture School",
    description: "Children learning God's Word through engaging lessons and activities.",
    images: [
      {
        src: "/placeholder.svg",
        alt: "Scripture School class",
        subtitle: "Scripture School classroom session",
        type: "image",
      },
      {
        src: "/placeholder.svg",
        alt: "Children's Bible activity",
        subtitle: "Children engaging in Bible activities",
        type: "image",
      },
    ],
  },

  {
    id: "special-events",
    title: "Special Events",
    description: "Memorable occasions and celebrations in our church family.",
    images: [
      {
        src: "/placeholder.svg",
        alt: "Church anniversary celebration",
        subtitle: "Church anniversary celebration",
        type: "image",
      },
      {
        src: "/placeholder.svg",
        alt: "Easter service",
        subtitle: "Easter worship service",
        type: "image",
      },
      {
        src: "",
        alt: "Special event video highlight",
        subtitle: "Special Events – Video highlight",
        type: "video",
        poster: "/placeholder.svg",
      },
    ],
  },
];
