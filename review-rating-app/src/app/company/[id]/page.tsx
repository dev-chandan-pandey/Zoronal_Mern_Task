"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import CompanyHero from "@/components/company/CompanyHero";
import ReviewList from "@/components/review/ReviewList";
import AddReviewModal from "@/components/review/AddReviewModal";

import { useReviews } from "@/hooks/useReviews";

export default function CompanyDetailsPage() {
  const params = useParams();

  const companyId = params.id as string;

  const [sort, setSort] = useState("latest");

  const {
    data,
    isLoading,
    refetch,
  } = useReviews(companyId, sort);

  return (
    <main>
      <Navbar />

      <section className="py-12">
        <div className="container-wrapper">

          <div className="mx-auto max-w-5xl rounded-xl border bg-white p-8 shadow-sm">

            <CompanyHero />

            <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

              <p className="text-sm text-gray-500">
                Total Reviews: {data?.data?.length || 0}
              </p>

              <div className="flex gap-4">

                <select
                  value={sort}
                  onChange={(e) =>
                    setSort(e.target.value)
                  }
                  className="rounded border px-4 py-2"
                >
                  <option value="latest">
                    Latest
                  </option>

                  <option value="rating">
                    Rating
                  </option>

                </select>

                <AddReviewModal
                  companyId={companyId}
                  onSuccess={refetch}
                />

              </div>
            </div>

            <div className="mt-8">

              {isLoading ? (
                <p>Loading reviews...</p>
              ) : (
                <ReviewList
                  reviews={data?.data || []}
                />
              )}

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}