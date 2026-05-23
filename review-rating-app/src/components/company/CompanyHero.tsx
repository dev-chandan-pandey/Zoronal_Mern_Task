import RatingStars from "../shared/RatingStars";

export default function CompanyHero() {
  return (
    <div className="flex flex-col gap-6 border-b border-gray-200 pb-6 md:flex-row md:items-start md:justify-between">
      
      <div className="flex gap-5">
        
        {/* Logo */}
        <div className="flex h-20 w-20 items-center justify-center rounded bg-[#111827] text-5xl font-bold text-white">
          G
        </div>

        {/* Details */}
        <div>
          <h2 className="text-[22px] font-semibold">
            Grafresfid Web and App Development
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            611, 6th Shikhar Central, Indore (M.P), Road Vijay, Palasia, Indore (M.P.)
          </p>

          <div className="mt-3 flex items-center gap-3">
            <RatingStars rating={4} />

            <span className="text-sm font-medium">
              41 Reviews
            </span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col items-start gap-4 md:items-end">
        
        <p className="text-xs text-gray-400">
          Founded on Feb - 2018
        </p>

        <button className="rounded bg-purple-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-purple-700">
          + Add Review
        </button>
      </div>
    </div>
  );
}