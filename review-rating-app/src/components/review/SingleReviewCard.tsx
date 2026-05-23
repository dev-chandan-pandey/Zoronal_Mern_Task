// "use client";

// import { ThumbsUp } from "lucide-react";

// import RatingStars from "../shared/RatingStars";

// import { likeReview } from "@/services/review.service";

// interface Props {
//   review: any;
// }

// export default function SingleReviewCard({
//   review,
// }: Props) {
//   const handleLike = async () => {
//     try {
//       await likeReview(review._id);

//       window.location.reload();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="border-b border-gray-200 py-6">

//       <div className="flex items-start justify-between gap-4">

//         <div className="flex gap-4">

//           <div className="h-12 w-12 rounded-full bg-gray-300" />

//           <div>

//             <div className="mb-1 flex items-center gap-3">

//               <h3 className="font-semibold">
//                 {review.fullName}
//               </h3>

//               <span className="text-xs text-gray-400">
//                 {new Date(
//                   review.createdAt
//                 ).toLocaleDateString()}
//               </span>

//             </div>

//             <h4 className="mb-2 text-sm font-medium text-purple-600">
//               {review.subject}
//             </h4>

//             <p className="max-w-3xl text-sm leading-6 text-gray-700">
//               {review.reviewText}
//             </p>

//             <button
//               onClick={handleLike}
//               className="mt-4 flex items-center gap-2 text-sm text-gray-500 transition hover:text-purple-600"
//             >
//               <ThumbsUp size={16} />

//               {review.likes} Likes
//             </button>

//           </div>
//         </div>

//         <RatingStars rating={review.rating} />

//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";

import { ThumbsUp } from "lucide-react";

import RatingStars from "../shared/RatingStars";

import { likeReview } from "@/services/review.service";

interface Props {
  review: any;
}

export default function SingleReviewCard({
  review,
}: Props) {
  const [likes, setLikes] = useState(
    review.likes
  );

  const handleLike = async () => {
    try {
      setLikes((prev: number) => prev + 1);

      await likeReview(review._id);
    } catch (error) {
      setLikes(review.likes);
    }
  };

  return (
    <div className="border-b border-gray-200 py-6">

      <div className="flex items-start justify-between gap-4">

        <div className="flex gap-4">

          <div className="h-12 w-12 rounded-full bg-gray-300" />

          <div>

            <div className="mb-1 flex items-center gap-3">

              <h3 className="font-semibold">
                {review.fullName}
              </h3>

              <span className="text-xs text-gray-400">
                {new Date(
                  review.createdAt
                ).toLocaleDateString()}
              </span>

            </div>

            <h4 className="mb-2 text-sm font-medium text-purple-600">
              {review.subject}
            </h4>

            <p className="max-w-3xl text-sm leading-6 text-gray-700">
              {review.reviewText}
            </p>

            <button
              onClick={handleLike}
              className="mt-4 flex items-center gap-2 text-sm text-gray-500 transition hover:text-purple-600"
            >
              <ThumbsUp size={16} />

              {likes} Likes
            </button>

          </div>
        </div>

        <RatingStars rating={review.rating} />

      </div>
    </div>
  );
}