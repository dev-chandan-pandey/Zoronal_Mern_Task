import axiosInstance from "@/lib/axios";

export const getReviews = async (
  companyId: string,
  sort = "latest"
) => {
  const response = await axiosInstance.get(
    `/reviews/${companyId}?sort=${sort}`
  );

  return response.data;
};

export const createReview = async (
  companyId: string,
  data: any
) => {
  const response = await axiosInstance.post(
    `/reviews/${companyId}`,
    data
  );

  return response.data;
};

export const likeReview = async (
  reviewId: string
) => {
  const response = await axiosInstance.patch(
    `/reviews/like/${reviewId}`
  );

  return response.data;
};