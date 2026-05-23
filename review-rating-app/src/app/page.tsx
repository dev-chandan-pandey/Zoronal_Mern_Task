// "use client";

// import { useState } from "react";

// import Navbar from "@/components/layout/Navbar";
// import AddCompanyModal from "@/components/company/AddCompanyModal";
// import Link from "next/link";
// import { useCompanies } from "@/hooks/useCompanies";

// export default function HomePage() {
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("latest");

//   const { data, isLoading } = useCompanies(
//     search,
//     sort
//   );

//   return (
//     <main>
//       <Navbar />

//       <section className="py-10">
//         <div className="container-wrapper">

//           <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

//             <div className="flex gap-4">

//               <input
//                 type="text"
//                 placeholder="Search companies..."
//                 className="rounded border px-4 py-2"
//                 value={search}
//                 onChange={(e) =>
//                   setSearch(e.target.value)
//                 }
//               />

//               <select
//                 className="rounded border px-4 py-2"
//                 value={sort}
//                 onChange={(e) =>
//                   setSort(e.target.value)
//                 }
//               >
//                 <option value="latest">
//                   Latest
//                 </option>

//                 <option value="rating">
//                   Rating
//                 </option>
//               </select>

//             </div>

//             <AddCompanyModal />
//           </div>

//           {isLoading ? (
//             <p>Loading...</p>
//           ) : (
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

//               {data?.data?.map((company: any) => (
//                 <div
//                   key={company._id}
//                   className="rounded-lg border bg-white p-6 shadow-sm"
//                 >
//                   <h2 className="mb-2 text-xl font-semibold">
//                     {company.name}
//                   </h2>

//                   <p className="mb-3 text-sm text-gray-500">
//                     {company.location}
//                   </p>

//                   <p className="mb-4 text-sm text-gray-700">
//                     {company.description}
//                   </p>

//                   <div className="flex items-center justify-between">

//                     <span className="text-sm font-medium">
//                       ⭐ {company.averageRating.toFixed(1)}
//                     </span>

//                     <span className="text-sm text-gray-500">
//                       {company.reviewCount} Reviews
//                     </span>

//                   </div>
//                 </div>
//               ))}

//             </div>
//           )}

//         </div>
//       </section>
//     </main>
//   );
// }
"use client";

import { useState } from "react";
import { useDebounce } from "use-debounce";
import Navbar from "@/components/layout/Navbar";
import AddCompanyModal from "@/components/company/AddCompanyModal";
import Link from "next/link";
import { useCompanies } from "@/hooks/useCompanies";
import CompanyCardSkeleton from "@/components/shared/CompanyCardSkeleton";
import { motion } from "framer-motion";

export default function HomePage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 500);
  const [sort, setSort] = useState("latest");
  // const { data, isLoading } = useCompanies(
  //   search,
  //   sort
  // );
  // const { data, isLoading } = useCompanies(debouncedSearch, sort);
  const { data, isLoading } =
    useCompanies(
      debouncedSearch,
      sort,
      page
    );
  return (
    <main>
      <Navbar />

      <section className="py-10">
        <div className="container-wrapper">

          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div className="flex gap-4">

              <input
                type="text"
                placeholder="Search companies..."
                className="rounded border px-4 py-2"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

              <select
                className="rounded border px-4 py-2"
                value={sort}
                onChange={(e) =>
                  setSort(e.target.value)
                }
              >
                <option value="latest">
                  Latest
                </option>

                <option value="rating">
                  Rating
                </option>
              </select>

            </div>

            <AddCompanyModal />
          </div>

          {isLoading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <CompanyCardSkeleton key={item} />
              ))}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {data?.data?.map((company: any) => (
                <motion.div
                  key={company._id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <Link href={`/company/${company._id}`}>
                    <div className="rounded-lg border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

                      <h2 className="mb-2 text-xl font-semibold">
                        {company.name}
                      </h2>

                      <p className="mb-3 text-sm text-gray-500">
                        {company.location}
                      </p>

                      <p className="mb-4 text-sm text-gray-700">
                        {company.description}
                      </p>

                      <div className="flex items-center justify-between">

                        <span className="text-sm font-medium">
                          ⭐ {company.averageRating.toFixed(1)}
                        </span>

                        <span className="text-sm text-gray-500">
                          {company.reviewCount} Reviews
                        </span>

                      </div>

                    </div>
                  </Link>
                </motion.div>
              ))}

            </div>

          )}
          <div className="mt-10 flex items-center justify-center gap-3">

            <button
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
              className="rounded border px-4 py-2 disabled:opacity-50"
            >
              Previous
            </button>

            <span className="text-sm font-medium">
              Page {page}
            </span>

            <button
              disabled={
                page === data?.totalPages
              }
              onClick={() => setPage((prev) => prev + 1)}
              className="rounded border px-4 py-2 disabled:opacity-50"
            >
              Next
            </button>

          </div>
        </div>
      </section>
    </main>
  );
}