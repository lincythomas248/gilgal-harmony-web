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
        caption: "Christmas Service – Worship & praise",
        type: "image",
      },
      {
        src: "/placeholder.svg",
        alt: "Christmas choir performance",
        caption: "Choir presentation during Christmas service",
        type: "image",
      },
      {
        src: "",
        alt: "Christmas service video highlight",
        caption: "Christmas Service – Video highlight",
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
        caption: "Baptism service – New life in Christ",
        type: "image",
      },
      {
        src: "",
        alt: "Baptism video highlight",
        caption: "Baptism – Video highlight",
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
        caption: "Youth fellowship gathering",
        type: "image",
      },
      {
        src: "/placeholder.svg",
        alt: "Youth Bible study",
        caption: "Youth Bible study session",
        type: "image",
      },
      {
        src: "",
        alt: "Youth fellowship video highlight",
        caption: "Youth Fellowship – Video highlight",
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
        caption: "Congregation united in prayer",
        type: "image",
      },
      {
        src: "/placeholder.svg",
        alt: "Prayer circle",
        caption: "Prayer meeting in progress",
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
        caption: "Scripture School classroom session",
        type: "image",
      },
      {
        src: "/placeholder.svg",
        alt: "Children's Bible activity",
        caption: "Children engaging in Bible activities",
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
        caption: "Church anniversary celebration",
        type: "image",
      },
      {
        src: "/placeholder.svg",
        alt: "Easter service",
        caption: "Easter worship service",
        type: "image",
      },
      {
        src: "",
        alt: "Special event video highlight",
        caption: "Special Events – Video highlight",
        type: "video",
        poster: "/placeholder.svg",
      },
    ],
  },
];
