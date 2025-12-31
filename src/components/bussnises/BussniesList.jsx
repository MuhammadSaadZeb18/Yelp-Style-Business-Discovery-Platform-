import React, { useEffect, useState } from "react";
import Bussnies from "./Bussnies";
import Loader from "../loader/Loader";
import Nobussnies from "./Nobussnies";
import useSearchStore from "../../store/useSearchStore";
import { fetchBusinesses } from "../../api/fetchBussniese";

const BussniesList = ({ data, setData }) => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const debouncedSearch = useSearchStore((s) => s.debouncedSearch);
  const category = useSearchStore((s) => s.category);
  const minRating = useSearchStore((s) => s.minRating);
  const sortBy = useSearchStore((s) => s.sortBy);

  // Fetch data whenever filters or page changes
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const res = await fetchBusinesses({
          page,
          pageSize: 6,
          search: debouncedSearch,
          category,
          minRating,
          sortBy,
        });
        setData(res.data);
        setTotal(res.total);
      } catch (err) {
        console.error(err);
        setData([]); // clear data on error
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [page, debouncedSearch, category, minRating, sortBy]);

  if (loading) return <Loader />;

  return (
    <div>
      {data.length === 0 ? (
        <div className="flex items-center justify-center my-10">
          <Nobussnies />
        </div>
      ) : (
        <div className="grid my-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((bus) => (
            <Bussnies key={Math.random() * 200} {...bus} img={bus.image} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {total > 6 && (
        <div className="flex justify-center gap-4 mt-6">
          <button
            disabled={page === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            onClick={() => setPage((p) => p - 1)}
          >
            Previous
          </button>
          <span className="px-4 py-2">
            Page {page} of {Math.ceil(total / 6)}
          </span>
          <button
            disabled={page * 6 >= total}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BussniesList;
