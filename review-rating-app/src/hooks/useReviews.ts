"use client";

import { useQuery } from "@tanstack/react-query";

import { getReviews } from "@/services/review.service";

export const useReviews = (
  companyId: string,
  sort: string
) => {
  return useQuery({
    queryKey: ["reviews", companyId, sort],
    queryFn: () => getReviews(companyId, sort),
    enabled: !!companyId,
  });
};