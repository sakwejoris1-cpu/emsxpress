// Built-in registry of coordinates for major logistics hubs, gateways, and global cities.
// This guarantees instant, reliable geocoding even without external network access.
const KNOWN_CITIES = {
  // United States & North America
  'new york': { latitude: 40.7128, longitude: -74.006, displayName: 'New York, NY, USA' },
  'jersey city': { latitude: 40.7178, longitude: -74.0431, displayName: 'Jersey City, NJ, USA' },
  'newark': { latitude: 40.7357, longitude: -74.1724, displayName: 'Newark, NJ, USA' },
  'los angeles': { latitude: 34.0522, longitude: -118.2437, displayName: 'Los Angeles, CA, USA' },
  'chicago': { latitude: 41.8781, longitude: -87.6298, displayName: 'Chicago, IL, USA' },
  'houston': { latitude: 29.7604, longitude: -95.3698, displayName: 'Houston, TX, USA' },
  'phoenix': { latitude: 33.4484, longitude: -112.074, displayName: 'Phoenix, AZ, USA' },
  'philadelphia': { latitude: 39.9526, longitude: -75.1652, displayName: 'Philadelphia, PA, USA' },
  'san antonio': { latitude: 29.4241, longitude: -98.4936, displayName: 'San Antonio, TX, USA' },
  'san diego': { latitude: 32.7157, longitude: -117.1611, displayName: 'San Diego, CA, USA' },
  'dallas': { latitude: 32.7767, longitude: -96.797, displayName: 'Dallas, TX, USA' },
  'austin': { latitude: 30.2672, longitude: -97.7431, displayName: 'Austin, TX, USA' },
  'san jose': { latitude: 37.3382, longitude: -121.8863, displayName: 'San Jose, CA, USA' },
  'san francisco': { latitude: 37.7749, longitude: -122.4194, displayName: 'San Francisco, CA, USA' },
  'seattle': { latitude: 47.6062, longitude: -122.3321, displayName: 'Seattle, WA, USA' },
  'denver': { latitude: 39.7392, longitude: -104.9903, displayName: 'Denver, CO, USA' },
  'washington': { latitude: 38.9072, longitude: -77.0369, displayName: 'Washington, DC, USA' },
  'washington dc': { latitude: 38.9072, longitude: -77.0369, displayName: 'Washington, DC, USA' },
  'boston': { latitude: 42.3601, longitude: -71.0589, displayName: 'Boston, MA, USA' },
  'miami': { latitude: 25.7617, longitude: -80.1918, displayName: 'Miami, FL, USA' },
  'atlanta': { latitude: 33.749, longitude: -84.388, displayName: 'Atlanta, GA, USA' },
  'memphis': { latitude: 35.1495, longitude: -90.049, displayName: 'Memphis, TN, USA' },
  'louisville': { latitude: 38.2527, longitude: -85.7585, displayName: 'Louisville, KY, USA' },
  'detroit': { latitude: 42.3314, longitude: -83.0458, displayName: 'Detroit, MI, USA' },
  'minneapolis': { latitude: 44.9778, longitude: -93.265, displayName: 'Minneapolis, MN, USA' },
  'toronto': { latitude: 43.6532, longitude: -79.3832, displayName: 'Toronto, ON, Canada' },
  'montreal': { latitude: 45.5017, longitude: -73.5673, displayName: 'Montreal, QC, Canada' },
  'vancouver': { latitude: 49.2827, longitude: -123.1207, displayName: 'Vancouver, BC, Canada' },
  'calgary': { latitude: 51.0447, longitude: -114.0719, displayName: 'Calgary, AB, Canada' },
  'mexico city': { latitude: 19.4326, longitude: -99.1332, displayName: 'Mexico City, Mexico' },
  'guadalajara': { latitude: 20.6597, longitude: -103.3496, displayName: 'Guadalajara, Mexico' },

  // United Kingdom & Ireland
  'london': { latitude: 51.5074, longitude: -0.1278, displayName: 'London, United Kingdom' },
  'heathrow': { latitude: 51.47, longitude: -0.4543, displayName: 'Heathrow Airport, London, UK' },
  'manchester': { latitude: 53.4808, longitude: -2.2426, displayName: 'Manchester, United Kingdom' },
  'birmingham': { latitude: 52.4862, longitude: -1.8904, displayName: 'Birmingham, United Kingdom' },
  'leeds': { latitude: 53.8008, longitude: -1.5491, displayName: 'Leeds, United Kingdom' },
  'glasgow': { latitude: 55.8642, longitude: -4.2518, displayName: 'Glasgow, United Kingdom' },
  'edinburgh': { latitude: 55.9533, longitude: -3.1883, displayName: 'Edinburgh, United Kingdom' },
  'dublin': { latitude: 53.3498, longitude: -6.2603, displayName: 'Dublin, Ireland' },

  // Europe
  'paris': { latitude: 48.8566, longitude: 2.3522, displayName: 'Paris, France' },
  'roissy': { latitude: 49.0097, longitude: 2.5479, displayName: 'Paris Charles de Gaulle, France' },
  'marseille': { latitude: 43.2965, longitude: 5.3698, displayName: 'Marseille, France' },
  'frankfurt': { latitude: 50.1109, longitude: 8.6821, displayName: 'Frankfurt, Germany' },
  'berlin': { latitude: 52.52, longitude: 13.405, displayName: 'Berlin, Germany' },
  'munich': { latitude: 48.1351, longitude: 11.582, displayName: 'Munich, Germany' },
  'hamburg': { latitude: 53.5511, longitude: 9.9937, displayName: 'Hamburg, Germany' },
  'cologne': { latitude: 50.9375, longitude: 6.9603, displayName: 'Cologne, Germany' },
  'amsterdam': { latitude: 52.3676, longitude: 4.9041, displayName: 'Amsterdam, Netherlands' },
  'rotterdam': { latitude: 51.9244, longitude: 4.4777, displayName: 'Rotterdam, Netherlands' },
  'brussels': { latitude: 50.8503, longitude: 4.3517, displayName: 'Brussels, Belgium' },
  'antwerp': { latitude: 51.2194, longitude: 4.4025, displayName: 'Antwerp, Belgium' },
  'madrid': { latitude: 40.4168, longitude: -3.7038, displayName: 'Madrid, Spain' },
  'barcelona': { latitude: 41.3879, longitude: 2.1699, displayName: 'Barcelona, Spain' },
  'rome': { latitude: 41.9028, longitude: 12.4964, displayName: 'Rome, Italy' },
  'milan': { latitude: 45.4642, longitude: 9.19, displayName: 'Milan, Italy' },
  'zurich': { latitude: 47.3769, longitude: 8.5417, displayName: 'Zurich, Switzerland' },
  'geneva': { latitude: 46.2044, longitude: 6.1432, displayName: 'Geneva, Switzerland' },
  'vienna': { latitude: 48.2082, longitude: 16.3738, displayName: 'Vienna, Austria' },
  'warsaw': { latitude: 52.2297, longitude: 21.0122, displayName: 'Warsaw, Poland' },
  'prague': { latitude: 50.0755, longitude: 14.4378, displayName: 'Prague, Czech Republic' },
  'lisbon': { latitude: 38.7223, longitude: -9.1393, displayName: 'Lisbon, Portugal' },
  'stockholm': { latitude: 59.3293, longitude: 18.0686, displayName: 'Stockholm, Sweden' },
  'copenhagen': { latitude: 55.6761, longitude: 12.5683, displayName: 'Copenhagen, Denmark' },
  'athens': { latitude: 37.9838, longitude: 23.7275, displayName: 'Athens, Greece' },

  // Middle East & Africa
  'dubai': { latitude: 25.2048, longitude: 55.2708, displayName: 'Dubai, United Arab Emirates' },
  'abu dhabi': { latitude: 24.4539, longitude: 54.3773, displayName: 'Abu Dhabi, United Arab Emirates' },
  'doha': { latitude: 25.2854, longitude: 51.531, displayName: 'Doha, Qatar' },
  'riyadh': { latitude: 24.7136, longitude: 46.6753, displayName: 'Riyadh, Saudi Arabia' },
  'jeddah': { latitude: 21.4858, longitude: 39.1925, displayName: 'Jeddah, Saudi Arabia' },
  'istanbul': { latitude: 41.0082, longitude: 28.9784, displayName: 'Istanbul, Turkey' },
  'cairo': { latitude: 30.0444, longitude: 31.2357, displayName: 'Cairo, Egypt' },
  'lagos': { latitude: 6.5244, longitude: 3.3792, displayName: 'Lagos, Nigeria' },
  'abuja': { latitude: 9.0765, longitude: 7.3986, displayName: 'Abuja, Nigeria' },
  'douala': { latitude: 4.0511, longitude: 9.7679, displayName: 'Douala, Cameroon' },
  'yaounde': { latitude: 3.848, longitude: 11.5021, displayName: 'Yaounde, Cameroon' },
  'accra': { latitude: 5.6037, longitude: -0.187, displayName: 'Accra, Ghana' },
  'nairobi': { latitude: -1.2921, longitude: 36.8219, displayName: 'Nairobi, Kenya' },
  'johannesburg': { latitude: -26.2041, longitude: 28.0473, displayName: 'Johannesburg, South Africa' },
  'cape town': { latitude: -33.9249, longitude: 18.4241, displayName: 'Cape Town, South Africa' },
  'addis ababa': { latitude: 9.03, longitude: 38.74, displayName: 'Addis Ababa, Ethiopia' },
  'casablanca': { latitude: 33.5731, longitude: -7.5898, displayName: 'Casablanca, Morocco' },

  // Asia & Oceania
  'tokyo': { latitude: 35.6762, longitude: 139.6503, displayName: 'Tokyo, Japan' },
  'narita': { latitude: 35.772, longitude: 140.3929, displayName: 'Narita, Japan' },
  'osaka': { latitude: 34.6937, longitude: 135.5023, displayName: 'Osaka, Japan' },
  'beijing': { latitude: 39.9042, longitude: 116.4074, displayName: 'Beijing, China' },
  'shanghai': { latitude: 31.2304, longitude: 121.4737, displayName: 'Shanghai, China' },
  'guangzhou': { latitude: 23.1291, longitude: 113.2644, displayName: 'Guangzhou, China' },
  'shenzhen': { latitude: 22.5431, longitude: 114.0579, displayName: 'Shenzhen, China' },
  'hong kong': { latitude: 22.3193, longitude: 114.1694, displayName: 'Hong Kong' },
  'taipei': { latitude: 25.033, longitude: 121.5654, displayName: 'Taipei, Taiwan' },
  'seoul': { latitude: 37.5665, longitude: 126.978, displayName: 'Seoul, South Korea' },
  'incheon': { latitude: 37.4563, longitude: 126.7052, displayName: 'Incheon, South Korea' },
  'singapore': { latitude: 1.3521, longitude: 103.8198, displayName: 'Singapore' },
  'kuala lumpur': { latitude: 3.139, longitude: 101.6869, displayName: 'Kuala Lumpur, Malaysia' },
  'bangkok': { latitude: 13.7563, longitude: 100.5018, displayName: 'Bangkok, Thailand' },
  'jakarta': { latitude: -6.2088, longitude: 106.8456, displayName: 'Jakarta, Indonesia' },
  'manila': { latitude: 14.5995, longitude: 120.9842, displayName: 'Manila, Philippines' },
  'sydney': { latitude: -33.8688, longitude: 151.2093, displayName: 'Sydney, Australia' },
  'melbourne': { latitude: -37.8136, longitude: 144.9631, displayName: 'Melbourne, Australia' },
  'auckland': { latitude: -36.8485, longitude: 174.7633, displayName: 'Auckland, New Zealand' },
  'mumbai': { latitude: 19.076, longitude: 72.8777, displayName: 'Mumbai, India' },
  'delhi': { latitude: 28.6139, longitude: 77.209, displayName: 'Delhi, India' },
}

/**
 * Normalizes input location text for matching.
 */
function cleanQuery(query) {
  if (!query || typeof query !== 'string') return ''
  return query
    .toLowerCase()
    .replace(/[,\-_/]/g, ' ')
    .replace(/\b(airport|gateway|hub|depot|service center|center|facility|station|port|intl|international)\b/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Searches the internal registry for matching city names.
 */
export function findKnownCityCoordinates(query) {
  if (!query || typeof query !== 'string') return null
  const cleaned = cleanQuery(query)
  if (!cleaned) return null

  // 1. Direct match on clean query
  if (KNOWN_CITIES[cleaned]) {
    return KNOWN_CITIES[cleaned]
  }

  // 2. Match against parts of the location string (e.g. "Chicago, IL" -> "chicago")
  const words = cleaned.split(' ')
  for (const [key, value] of Object.entries(KNOWN_CITIES)) {
    // If the known city name appears as a substring or one of the segments
    if (cleaned === key || cleaned.startsWith(`${key} `) || cleaned.endsWith(` ${key}`) || cleaned.includes(` ${key} `)) {
      return value
    }
    // Check first word match
    if (words[0] === key) {
      return value
    }
  }

  return null
}

/**
 * Geocodes an arbitrary city, address, or location query into { latitude, longitude, displayName }.
 * First checks the instant local registry. If not found, falls back to OpenStreetMap Nominatim.
 * Safe and non-throwing: returns null on network failures or unrecognized queries.
 */
export async function geocodeLocation(query) {
  if (!query || typeof query !== 'string') return null
  const trimmed = query.trim()
  if (!trimmed) return null

  // 1. Instant dictionary lookup
  const known = findKnownCityCoordinates(trimmed)
  if (known) return known

  // 2. Fallback to OpenStreetMap Nominatim API
  if (typeof fetch !== 'function') return null

  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 3500)
    const encoded = encodeURIComponent(trimmed)
    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encoded}&format=json&limit=1`, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'EMSXpress-Shipment-Routing/1.0 (support@emsxpress.com)',
        Accept: 'application/json',
      },
    })
    clearTimeout(timer)

    if (!response.ok) return null
    const results = await response.json()
    if (Array.isArray(results) && results.length > 0) {
      const first = results[0]
      const lat = parseFloat(first.lat)
      const lon = parseFloat(first.lon)
      if (!Number.isNaN(lat) && !Number.isNaN(lon)) {
        return {
          latitude: lat,
          longitude: lon,
          displayName: first.display_name || trimmed,
        }
      }
    }
  } catch {
    // Ignore network timeouts or DNS resolution issues silently
  }

  return null
}
