import { MetadataRoute } from 'next'
import { JOURNEYS } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://himjabehl.com'

  const journeys = JOURNEYS.map((journey) => ({
    url: `${baseUrl}/journeys/${journey.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...journeys,
  ]
}
