"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { createReview } from "@/services/review.service";

interface Props {
  companyId: string;
  onSuccess: () => void;
}

export default function AddReviewModal({
  companyId,
  onSuccess,
}: Props) {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    reviewText: "",
    rating: 5,
  });

  const handleSubmit = async () => {
    try {
      await createReview(companyId, formData);

      alert("Review Added");

      onSuccess();

      setFormData({
        fullName: "",
        subject: "",
        reviewText: "",
        rating: 5,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="rounded bg-purple-600 px-5 py-2 text-white">
          + Add Review
        </button>
      </DialogTrigger>

      <DialogContent>

        <DialogHeader>
          <DialogTitle>
            Add Review
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded border p-3"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({
                ...formData,
                fullName: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded border p-3"
            value={formData.subject}
            onChange={(e) =>
              setFormData({
                ...formData,
                subject: e.target.value,
              })
            }
          />

          <textarea
            rows={5}
            placeholder="Write review..."
            className="w-full rounded border p-3"
            value={formData.reviewText}
            onChange={(e) =>
              setFormData({
                ...formData,
                reviewText: e.target.value,
              })
            }
          />

          <select
            className="w-full rounded border p-3"
            value={formData.rating}
            onChange={(e) =>
              setFormData({
                ...formData,
                rating: Number(e.target.value),
              })
            }
          >
            <option value={5}>5 Star</option>
            <option value={4}>4 Star</option>
            <option value={3}>3 Star</option>
            <option value={2}>2 Star</option>
            <option value={1}>1 Star</option>
          </select>

          <button
            onClick={handleSubmit}
            className="w-full rounded bg-purple-600 py-3 text-white"
          >
            Submit Review
          </button>

        </div>
      </DialogContent>
    </Dialog>
  );
}