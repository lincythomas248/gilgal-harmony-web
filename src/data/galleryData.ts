import type { GalleryCollectionData } from "@/components/gallery/GalleryCollection";

/**
 * Gallery Collections Data
 * 
 * To add images, paste Firebase Storage URLs into the `src` field.
 * Each image requires:
 * - src: Full URL to the image (Firebase Storage URL)
 * - alt: Descriptive text for accessibility (mandatory)
 * - caption: Optional text shown below the image
 * 
 * Image format guidance:
 * - Use JPG for photographs (better compression)
 * - Use PNG only for graphics with transparency
 * - Recommended dimensions: 1200x675 (16:9 aspect ratio)
 */

export const galleryCollections: GalleryCollectionData[] = [
  {
    id: "christmas-service",
    title: "Christmas Service",
    description: "Worship, fellowship, and joyful moments celebrating the birth of our Savior.",
    images: [
      { src: "", alt: "Christmas worship service", caption: "" },
      { src: "", alt: "Christmas choir performance", caption: "" },
      { src: "", alt: "Christmas fellowship gathering", caption: "" },
      { src: "", alt: "Christmas decorations in sanctuary", caption: "" },
    ],
  },
  {
    id: "baptism",
    title: "Baptism",
    description: "Celebrating new life in Christ through the sacrament of baptism.",
    images: [
      { src: "", alt: "Baptism ceremony", caption: "" },
      { src: "", alt: "Baptism celebration", caption: "" },
      { src: "", alt: "Family at baptism", caption: "" },
    ],
  },
  {
    id: "youth",
    title: "Youth Fellowship",
    description: "Our youth growing together in faith, friendship, and service.",
    images: [
      { src: "", alt: "Youth fellowship meeting", caption: "" },
      { src: "", alt: "Youth worship session", caption: "" },
      { src: "", alt: "Youth community service", caption: "" },
      { src: "", alt: "Youth Bible study", caption: "" },
    ],
  },
  {
    id: "prayer-meeting",
    title: "Prayer Meeting",
    description: "Coming together in prayer and spiritual communion.",
    images: [
      { src: "", alt: "Prayer gathering", caption: "" },
      { src: "", alt: "Prayer circle", caption: "" },
    ],
  },
  {
    id: "scripture-school",
    title: "Scripture School",
    description: "Children learning God's Word through engaging lessons and activities.",
    images: [
      { src: "", alt: "Scripture School class", caption: "" },
      { src: "", alt: "Children's Bible activity", caption: "" },
      { src: "", alt: "Scripture School teachers", caption: "" },
    ],
  },
  {
    id: "special-events",
    title: "Special Events",
    description: "Memorable occasions and celebrations in our church family.",
    images: [
      { src: "", alt: "Church anniversary celebration", caption: "" },
      { src: "", alt: "Easter service", caption: "" },
      { src: "", alt: "Community outreach event", caption: "" },
    ],
  },
];
