"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { createCompany } from "@/services/company.service";

export default function AddCompanyModal() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    city: "",
    foundedOn: "",
    description: "",
  });

  const handleSubmit = async () => {
    try {
      await createCompany(formData);

      alert("Company Added");

      setFormData({
        name: "",
        location: "",
        city: "",
        foundedOn: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="rounded bg-purple-600 px-5 py-2 text-white">
          Add Company
        </button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Company</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">

          <input
            placeholder="Company Name"
            className="w-full rounded border p-3"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />

          <input
            placeholder="Location"
            className="w-full rounded border p-3"
            value={formData.location}
            onChange={(e) =>
              setFormData({
                ...formData,
                location: e.target.value,
              })
            }
          />

          <input
            placeholder="City"
            className="w-full rounded border p-3"
            value={formData.city}
            onChange={(e) =>
              setFormData({
                ...formData,
                city: e.target.value,
              })
            }
          />

          <input
            type="date"
            className="w-full rounded border p-3"
            value={formData.foundedOn}
            onChange={(e) =>
              setFormData({
                ...formData,
                foundedOn: e.target.value,
              })
            }
          />

          <textarea
            placeholder="Description"
            className="w-full rounded border p-3"
            rows={4}
            value={formData.description}
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value,
              })
            }
          />

          <button
            onClick={handleSubmit}
            className="w-full rounded bg-purple-600 py-3 text-white"
          >
            Submit
          </button>

        </div>
      </DialogContent>
    </Dialog>
  );
}