import businessesss from "../data/data.json";

// --------------------
// Simple in-memory cache
// --------------------
const cache = new Map();

// --------------------
// Utility: artificial delay
// --------------------
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// --------------------
// Mock API
// --------------------
export async function fetchBusinesses({
  page = 1,
  limit = 6,
  search = "",
  category = "All",
  minRating = 0,
  priceLevel = null,
}) {
  // Create a cache key based on params
  const cacheKey = JSON.stringify({
    page,
    limit,
    search,
    category,
    minRating,
    priceLevel,
  });

  // Return cached response if exists
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  // Artificial latency (500–1200ms)
  const latency = 500 + Math.random() * 700;

  await delay(latency);

  // Random failure (~10%)
  if (Math.random() < 0.1) {
    throw new Error("Mock API error: Something went wrong");
  }

  let result = [...businessesss];

  // --------------------
  // Filtering
  // --------------------
  if (search) {
    result = result.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (category !== "All") {
    result = result.filter((item) => item.category === category);
  }

  if (minRating > 0) {
    result = result.filter((item) => item.rating >= minRating);
  }

  if (priceLevel !== null) {
    result = result.filter((item) => item.priceLevel === priceLevel);
  }

  // --------------------
  // Pagination
  // --------------------
  const total = result.length;
  const totalPages = Math.ceil(total / limit);
  const start = (page - 1) * limit;
  const end = start + limit;

  const paginatedData = result.slice(start, end);

  // --------------------
  // API-like response
  // --------------------
  const response = {
    data: paginatedData,
    meta: {
      page,
      limit,
      total,
      totalPages,
    },
  };

  console.log(response);
  // Cache the response
  cache.set(cacheKey, response);

  return response;
}
