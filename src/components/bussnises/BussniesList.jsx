import React, { useEffect, useState, useCallback } from "react";
import useSearchStore from "../../store/useSearchStore";
import { fetchBusinesses } from "../../api/fetchBussniese";
import Loader from "../loader/Loader";
import Bussnies from "./Bussnies";
import Nobussnies from "./Nobussnies";

const BussniesList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  const search = useSearchStore(s => s.debouncedSearch);
  const category = useSearchStore(s => s.category);
  const minRating = useSearchStore(s => s.minRating);
  const sortBy = useSearchStore(s => s.sortBy);

  const loadData = useCallback(async (pageNum = 1, append = false) => {
    setLoading(true);
    try {
      const res = await fetchBusinesses({
        page: pageNum,
        limit: 6,
        search,
        category,
        minRating,
        sortBy,
      });

      if (append) setData(prev => [...prev, ...res.data]);
      else setData(res.data);

      setTotalPages(res.meta.totalPages);
    } catch (err) {
      console.error(err);
      if (!append) setData([]);
    } finally {
      setLoading(false);
      setIsFetching(false);
    }
  }, [search, category, minRating, sortBy]);

  // Load new filters
  useEffect(() => {
    setPage(1);
    loadData(1, false);
  }, [search, category, minRating, sortBy]);

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100 &&
          !loading && !isFetching && page < totalPages) {
        setIsFetching(true);
        setPage(prev => prev + 1);
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

  if (loading && page === 1) return <Loader />;

  return (
    <div className="my-[2rem]">
      {data.length === 0 ? <Nobussnies /> :
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map(b => <Bussnies key={b.id} {...b} img={b.image} />)}
        </div>}
      {isFetching && <Loader />}
    </div>
  );
};

export default BussniesList;
