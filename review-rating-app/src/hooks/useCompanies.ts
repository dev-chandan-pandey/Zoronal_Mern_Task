// "use client";

// import { useQuery } from "@tanstack/react-query";

// import { getCompanies } from "@/services/company.service";

// export const useCompanies = (
//   search: string,
//   sort: string
// ) => {
//   return useQuery({
//     queryKey: ["companies", search, sort],
//     queryFn: () => getCompanies(search, sort),
//   });
// };

"use client";

import { useQuery } from "@tanstack/react-query";

import { getCompanies } from "@/services/company.service";

export const useCompanies = (
  search: string,
  sort: string,
  page: number
) => {
  return useQuery({
    queryKey: ["companies", search, sort, page],

    queryFn: () =>
      getCompanies(search, sort, page),

    staleTime: 1000 * 60 * 5,
  });
};