import RatingStars from "../shared/RatingStars";

interface Props {
  name: string;
  review: string;
  rating: number;
  date: string;
}

export default function ReviewCard({
  name,
  review,
  rating,
  date,
}: Props) {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="flex items-start justify-between gap-4">

        <div className="flex gap-3">
          <div className="h-10 w-10 rounded-full bg-gray-300" />

          <div>
            <h3 className="font-semibold text-[15px]">
              {name}
            </h3>

            <p className="mb-2 text-xs text-gray-500">
              {date}
            </p>

            <p className="max-w-[700px] text-sm leading-6 text-gray-700">
              {review}
            </p>
          </div>
        </div>

        <RatingStars rating={rating} />
      </div>
    </div>
  );
}