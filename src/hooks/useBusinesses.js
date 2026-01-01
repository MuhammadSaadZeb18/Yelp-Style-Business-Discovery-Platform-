import { useState, useEffect, useCallback } from "react";
import useSearchStore from "../store/useSearchStore";
import { fetchBusinesses } from "../api/fetchBussniese";

export const useBusinesses = (limit = 6) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  const search = useSearchStore((s) => s.debouncedSearch);
  const category = useSearchStore((s) => s.category);
  const minRating = useSearchStore((s) => s.minRating);
  const sortBy = useSearchStore((s) => s.sortBy);

  const loadData = useCallback(
    async (pageNum = 1, append = false) => {
      setLoading(true);
      try {
        const res = await fetchBusinesses({
          page: pageNum,
          limit,
          search,
          category,
          minRating,
          sortBy,
        });

        setData((prev) => (append ? [...prev, ...res.data] : res.data));
        setTotalPages(res.meta.totalPages);
      } catch (err) {
        console.error(err);
        if (!append) setData([]);
      } finally {
        setLoading(false);
        setIsFetching(false);
      }
    },
    [search, category, minRating, sortBy, limit]
  );

  // Reload when filters change
  useEffect(() => {
    setPage(1);
    loadData(1, false);
  }, [search, category, minRating, sortBy]);

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 100 &&
        !loading &&
        !isFetching &&
        page < totalPages
      ) {
        setIsFetching(true);
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, isFetching, page, totalPages]);

  // Fetch next page
  useEffect(() => {
    if (page === 1) return;
    loadData(page, true);
  }, [page]);

  return { data, loading, isFetching };
};
