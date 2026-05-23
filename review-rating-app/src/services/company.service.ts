import axiosInstance from "@/lib/axios";

export const getCompanies = async (
  search = "",
  sort = "latest"
) => {
  const response = await axiosInstance.get(
    `/companies?search=${search}&sort=${sort}`
  );

  return response.data;
};

export const createCompany = async (data: any) => {
  const response = await axiosInstance.post(
    "/companies",
    data
  );

  return response.data;
};

export const getCompanyById = async (id: string) => {
  const response = await axiosInstance.get(
    `/companies/${id}`
  );

  return response.data;
};