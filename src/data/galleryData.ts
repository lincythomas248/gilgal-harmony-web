import type { GalleryCollectionData } from "@/components/gallery/GalleryCollection";

/**
 * Paste Firebase Storage / Drive / CDN URLs into `src`.
 * For videos:
 * - set type: "video"
 * - use MP4
 * - add a poster image URL for best UX
 */

export const galleryCollections: GalleryCollectionData[] = [
  {
    id: "christmas-service",
    title: "Christmas Service",
    description: "Worship, fellowship, and joyful moments celebrating the birth of our Savior.",
    images: [
      {
        src: "",
        alt: "Christmas worship service",
        subtitle: "Christmas Service – Worship & praise",
        type: "image",
      },
      {
        src: "",
        alt: "Christmas choir performance",
        subtitle: "Choir presentation during Christmas service",
        type: "image",
      },
      {
        // ✅ Example video slot
        src: "",
        alt: "Christmas service video",
        subtitle: "Christmas Service – Short video highlight",
        type: "video",
        poster: "",
      },
    ],
  },

  {
    id: "baptism",
    title: "Baptism",
    description: "Celebrating new life in Christ through the sacrament of baptism.",
    images: [
      {
        src: "",
        alt: "Baptism ceremony",
        subtitle: "Baptism service – New life in Christ",
        type: "image",
      },
      {
        // ✅ Example video slot
        src: "",
        alt: "Baptism video highlight",
        subtitle: "Baptism – Video highlight",
        type: "video",
        poster: "",
      },
    ],
  },

  {
    id: "youth",
    title: "Youth Fellowship",
    description: "Our youth growing together in faith, friendship, and service.",
    images: [
      {
        src: "",
        alt: "Youth fellowship meeting",
        subtitle: "Youth fellowship gathering",
        type: "image",
      },
      {
        src: "",
        alt: "Youth worship session",
        subtitle: "Youth worship and praise",
        type: "image",
      },
      {
        // ✅ Example video slot
        src: "",
        alt: "Youth fellowship video",
        subtitle: "Youth Fellowship – Video highlight",
        type: "video",
        poster: "",
      },
    ],
  },

  {
    id: "prayer-meeting",
    title: "Prayer Meeting",
    description: "Coming together in prayer and spiritual communion.",
    images: [
      {
        src: "",
        alt: "Prayer gathering",
        subtitle: "Congregation united in prayer",
        type: "image",
      },
      {
        src: "",
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
        src: "",
        alt: "Scripture School class",
        subtitle: "Scripture School classroom session",
        type: "image",
      },
      {
        src: "",
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
        src: "",
        alt: "Church anniversary celebration",
        subtitle: "Church anniversary celebration",
        type: "image",
      },
      {
        src: "",
        alt: "Easter service",
        subtitle: "Easter worship service",
        type: "image",
      },
      {
        // ✅ Example video slot
        src: "",
        alt: "Special event video highlight",
        subtitle: "Special Events – Video highlight",
        type: "video",
        poster: "",
      },
    ],
  },
];
