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

import Navbar from "@/components/layout/Navbar";
import AddCompanyModal from "@/components/company/AddCompanyModal";
import Link from "next/link";
import { useCompanies } from "@/hooks/useCompanies";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");

  const { data, isLoading } = useCompanies(
    search,
    sort
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
            <p>Loading...</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {data?.data?.map((company: any) => (
                <Link
                  href={`/company/${company._id}`}
                  key={company._id}
                >
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
              ))}

            </div>
          )}

        </div>
      </section>
    </main>
  );
}