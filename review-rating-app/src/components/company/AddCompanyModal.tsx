// "use client";

// import { useState } from "react";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// import { createCompany } from "@/services/company.service";

// export default function AddCompanyModal() {
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     city: "",
//     foundedOn: "",
//     description: "",
//   });

//   const handleSubmit = async () => {
//     try {
//       await createCompany(formData);

//       alert("Company Added");

//       setFormData({
//         name: "",
//         location: "",
//         city: "",
//         foundedOn: "",
//         description: "",
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <button className="rounded bg-purple-600 px-5 py-2 text-white">
//           Add Company
//         </button>
//       </DialogTrigger>

//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Add Company</DialogTitle>
//         </DialogHeader>

//         <div className="space-y-4">

//           <input
//             placeholder="Company Name"
//             className="w-full rounded border p-3"
//             value={formData.name}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 name: e.target.value,
//               })
//             }
//           />

//           <input
//             placeholder="Location"
//             className="w-full rounded border p-3"
//             value={formData.location}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 location: e.target.value,
//               })
//             }
//           />

//           <input
//             placeholder="City"
//             className="w-full rounded border p-3"
//             value={formData.city}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 city: e.target.value,
//               })
//             }
//           />

//           <input
//             type="date"
//             className="w-full rounded border p-3"
//             value={formData.foundedOn}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 foundedOn: e.target.value,
//               })
//             }
//           />

//           <textarea
//             placeholder="Description"
//             className="w-full rounded border p-3"
//             rows={4}
//             value={formData.description}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 description: e.target.value,
//               })
//             }
//           />

//           <button
//             onClick={handleSubmit}
//             className="w-full rounded bg-purple-600 py-3 text-white"
//           >
//             Submit
//           </button>

//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { createCompany } from "@/services/company.service";

import { companySchema } from "@/validators/company.schema";

type FormDataType = {
  name: string;
  location: string;
  city: string;
  foundedOn: string;
  description: string;  
};

export default function AddCompanyModal() {
  const [open, setOpen] = useState(false);

  const [logo, setLogo] =
    useState<File | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormDataType>({
    resolver: zodResolver(companySchema),

    defaultValues: {
      name: "",
      location: "",
      city: "",
      foundedOn: "",
      description: "",
    },
  });

  const onSubmit = async (
    data: FormDataType
  ) => {
    try {
      const formData = new FormData();

      formData.append("name", data.name);

      formData.append(
        "location",
        data.location
      );

      formData.append("city", data.city);

      formData.append(
        "foundedOn",
        data.foundedOn
      );

      formData.append(
        "description",
        data.description
      );

      if (logo) {
        formData.append("logo", logo);
      }

      console.log(
        "Submitting FormData..."
      );

      await createCompany(formData);

      toast.success(
        "Company Added Successfully"
      );

      reset();

      setLogo(null);

      setOpen(false);
    } catch (error: any) {
      console.log(error);

      toast.error(
        error?.response?.data?.message ||
          "Failed to create company"
      );
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <button className="rounded bg-purple-600 px-5 py-2 text-white">
          Add Company
        </button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Add Company
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <div>
            <input
              placeholder="Company Name"
              className="w-full rounded border p-3"
              {...register("name")}
            />

            {errors.name && (
              <p className="text-sm text-red-500">
                Company name required
              </p>
            )}
          </div>

          <div>
            <input
              placeholder="Location"
              className="w-full rounded border p-3"
              {...register("location")}
            />
          </div>

          <div>
            <input
              placeholder="City"
              className="w-full rounded border p-3"
              {...register("city")}
            />
          </div>

          <div>
            <input
              type="date"
              className="w-full rounded border p-3"
              {...register("foundedOn")}
            />
          </div>

          <div>
            <textarea
              rows={4}
              placeholder="Description"
              className="w-full rounded border p-3"
              {...register(
                "description"
              )}
            />
          </div>

          <div>
            <input
              type="file"
              accept="image/*"
              className="w-full rounded border p-3"
              onChange={(e) => {
                if (
                  e.target.files &&
                  e.target.files[0]
                ) {
                  setLogo(
                    e.target.files[0]
                  );
                }
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded bg-purple-600 py-3 text-white disabled:opacity-50"
          >
            {isSubmitting
              ? "Submitting..."
              : "Submit"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}