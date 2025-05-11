import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//  Validation Schema using Yup
const schema = yup.object().shape({
  name: yup.string().optional(),
  email: yup.string().email("Email invalide").required("Email est requis"),
  workType: yup.string().required("Type de travail est requis"),
  priceRange: yup
    .string()
    .nullable()
    .when("workType", (workType, schema) =>
      workType[0] === "single-work" ? schema.required("Veuillez choisir un budget") : schema
    ),
  message: yup.string().min(10, "Le message doit contenir au moins 10 caractères").required("Message requis"),
});

export default function ContactSection() {
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      workType: "",
    },
  });

  // Track work type selection for conditional price field
  const selectedWorkType = watch("workType");

  const onSubmit = async (data: any) => {
    try {
      // Simulate a successful form submission (replace with your actual submission logic)
      console.log("Form data submitted:", data);
      setSubmissionSuccess(true);
      reset(); // Clear the form after successful submission

      // Optionally, you can set a timeout to hide the success message
      setTimeout(() => {
        setSubmissionSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Form submission failed:", error);
      // Optionally, set an error state and display an error message to the user
    }
  };

  return (
    <section className="mb-20">
      <h2 className="my-sm:text-7xl text-5xl font-bold mb-8">TRAVAILLONS <span className="text-green-600">ENSEMBLE</span></h2>

      <div className="max-w-lg p-6 bg-my-theme rounded-lg shadow-lg">
        {submissionSuccess && (
          <div className="alert alert-success mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Message envoyé avec succès !</span>
          </div>
        )}
        <form method="POST" action="/success" data-netlify="true" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name & Email */}
          <div className="grid grid-cols-1 my-sm:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">Nom</label>
              <input {...register("name")} type="text" className="input input-primary w-full bg-my-theme border-my-theme-border" />
              <p className="text-red-500 text-sm">{errors.name?.message}</p>
            </div>
            <div className="form-control">
              <label className="label">Email</label>
              <input {...register("email")} type="email" className="input input-primary w-full bg-my-theme border-my-theme-border" />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>
          </div>

          {/* Work Type Selection */}
          <div className="form-control">
            <label className="label">Type de Travail</label>
            <select {...register("workType")} className="select select-primary w-full bg-my-theme-solid">
              <option value="">Choisir un type de travail</option>
              <option value="single-work">Travail unique</option>
              <option value="hire">Embauche</option>
            </select>
            <p className="text-red-500 text-sm">{errors.workType?.message}</p>
          </div>

          {/* Price Selection (Conditional) */}
          {selectedWorkType === "single-work" && (
            <div className="form-control">
              <label className="label">Budget</label>
              <select {...register("priceRange")} className="select select-primary w-full bg-my-theme-solid">
                <option value="<2000">Moins de 2000€</option>
                <option value="2000-5000">2000€ - 5000€</option>
                <option value="5000-10000">5000€ - 10000€</option>
              </select>
              <p className="text-red-500 text-sm">{errors.priceRange?.message}</p>
            </div>
          )}

          {/* Message */}
          <div className="form-control">
            <label className="label">Message</label>
            <textarea {...register("message")} className="textarea textarea-primary w-full bg-my-theme border-my-theme-border" rows={4}></textarea>
            <p className="text-red-500 text-sm">{errors.message?.message}</p>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">Envoyer</button>
        </form>
      </div>
    </section>
  );
}