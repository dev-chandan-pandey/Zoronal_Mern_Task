import SingleReviewCard from "./SingleReviewCard";

interface Props {
  reviews: any[];
}

export default function ReviewList({
  reviews,
}: Props) {
  if (!reviews.length) {
    return (
      <div className="rounded-lg border border-dashed py-16 text-center">
        <p className="text-gray-500">
          No Reviews Yet
        </p>
      </div>
    );
  }

  return (
    <div>
      {reviews.map((review) => (
        <SingleReviewCard
          key={review._id}
          review={review}
        />
      ))}
    </div>
  );
}