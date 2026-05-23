export default function CompanyCardSkeleton() {
  return (
    <div className="animate-pulse rounded-lg border bg-white p-6">

      <div className="mb-4 h-6 w-40 rounded bg-gray-200" />

      <div className="mb-3 h-4 w-28 rounded bg-gray-200" />

      <div className="mb-2 h-4 w-full rounded bg-gray-200" />

      <div className="mb-6 h-4 w-[80%] rounded bg-gray-200" />

      <div className="flex justify-between">

        <div className="h-4 w-16 rounded bg-gray-200" />

        <div className="h-4 w-20 rounded bg-gray-200" />

      </div>
    </div>
  );
}