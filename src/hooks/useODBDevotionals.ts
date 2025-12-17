import { useState, useEffect } from 'react';

export interface ODBDevotional {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string | null;
  author: string;
  slug: string;
}

interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
  enclosure?: { link: string };
  author?: string;
}

const RSS_API_URL = 'https://api.rss2json.com/v1/api.json';
const ODB_RSS_FEED = 'https://ourdailybread.org/feed/';
const CACHE_KEY = 'odb_devotionals_cache';
const CACHE_DURATION = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

function extractSlug(link: string): string {
  try {
    const url = new URL(link);
    const pathParts = url.pathname.split('/').filter(Boolean);
    return pathParts[pathParts.length - 1] || 'devotional';
  } catch {
    return 'devotional';
  }
}

function stripHtml(html: string): string {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

function truncateWords(text: string, maxWords: number): string {
  const words = text.split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '...';
}

export function useODBDevotionals(limit: number = 7) {
  const [devotionals, setDevotionals] = useState<ODBDevotional[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDevotionals() {
      try {
        // Check cache first
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_DURATION) {
            setDevotionals(data.slice(0, limit));
            setLoading(false);
            return;
          }
        }

        const response = await fetch(
          `${RSS_API_URL}?rss_url=${encodeURIComponent(ODB_RSS_FEED)}&count=${limit}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch devotionals');
        }

        const json = await response.json();

        if (json.status !== 'ok') {
          throw new Error(json.message || 'RSS fetch failed');
        }

        const items: ODBDevotional[] = json.items.map((item: RSSItem) => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          description: stripHtml(item.description),
          thumbnail: item.thumbnail || item.enclosure?.link || null,
          author: item.author || 'Our Daily Bread',
          slug: extractSlug(item.link),
        }));

        // Cache the results
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data: items,
          timestamp: Date.now(),
        }));

        setDevotionals(items.slice(0, limit));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load devotionals');
      } finally {
        setLoading(false);
      }
    }

    fetchDevotionals();
  }, [limit]);

  return { devotionals, loading, error };
}

export function getExcerpt(text: string, maxWords: number = 120): string {
  return truncateWords(text, maxWords);
}
