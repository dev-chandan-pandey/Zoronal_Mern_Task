import axiosInstance from "@/lib/axios";

// export const getCompanies = async (
//   search = "",
//   sort = "latest"
// ) => {
//   const response = await axiosInstance.get(
//     `/companies?search=${search}&sort=${sort}`
//   );

//   return response.data;
// };

export const getCompanies = async (
  search = "",
  sort = "latest",
  page = 1
) => {
  const response = await axiosInstance.get(
    `/companies?search=${search}&sort=${sort}&page=${page}&limit=6`
  );

  return response.data;
};

export const createCompany = async (data: any) => {
  const response = await axiosInstance.post(
    "/companies",
    data,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return response.data;
};

export const getCompanyById = async (id: string) => {
  const response = await axiosInstance.get(
    `/companies/${id}`
  );

  return response.data;
};