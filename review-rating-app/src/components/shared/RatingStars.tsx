import { Star } from "lucide-react";

interface Props {
  rating: number;
}

export default function RatingStars({ rating }: Props) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((item) => (
        <Star
          key={item}
          size={14}
          className={
            item <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300"
          }
        />
      ))}
    </div>
  );
}