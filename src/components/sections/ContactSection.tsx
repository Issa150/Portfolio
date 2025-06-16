import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm as useFormspree, ValidationError } from "@formspree/react";
import * as yup from "yup";

// ---
// Defining the TypeScript interface for your form data.
interface FormData {
  name?: string;
  email: string;
  workType: string;
  priceRange?: string | null;
  message: string;
}
// ---

// Validation Schema using Yup
const schema: yup.ObjectSchema<FormData> = yup.object().shape({
  name: yup.string().optional(),
  email: yup.string().email("Email invalide").required("Email est requis"),
  workType: yup.string().required("Type de travail is required"), // Changed for consistency if you meant to apply here too
  priceRange: yup
    .string()
    .nullable()
    .when("workType", (workType, schema) =>
      (workType as string[])[0] === "single-work" ? schema.required("Veuillez choisir un budget") : schema
    ),
  message: yup.string().min(10, "Le message doit contenir au moins 10 caractères").required("Message requis"),
});

export default function ContactSection() {
  // Initialize Formspree's useForm hook with your form ID
  //@ts-ignore - This @ts-ignore is okay if you're sure about the type, but it's often a sign of underlying type mismatch.
  // In a clean setup, if FormData is consistent, you might not need this.
  const [formspreeState, formspreeHandleSubmit] = useFormspree("xqabqnjo");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      workType: "",
      name: "",
      priceRange: null,
      message: "",
      email: "",
    },
  });

  // Track work type selection for conditional price field
  const selectedWorkType = watch("workType");

  // ---
  // This function is called by react-hook-form's handleSubmit after client-side validation passes.
  // It MUST explicitly call Formspree's submission handler to send the data.
  const onClientSideValidatedSubmit = async (data: FormData) => {
    console.log("Form data valid (client-side):", data);

    // *** THIS IS THE MISSING/CRITICAL STEP: Explicitly call Formspree's submit handler ***
    await formspreeHandleSubmit(data as any); // This sends the data to https://formspree.io/f/xqabqnjo
    // ---
  };

  // ---
  // Use useEffect for side effects like resetting the form.
  // It runs when formspreeState.succeeded changes.
  useEffect(() => {
    if (formspreeState.succeeded) {
      console.log("Formspree submission SUCCEEDED! Resetting form...");
      setTimeout(() => {
        reset(); // Reset the form fields
      }, 100); // Small delay for better UX
    }
  }, [formspreeState.succeeded, reset]);
  // ---

  return (
    <section className="---mb-20">
      <h2 className="my-sm:text-7xl text-5xl font-bold mb-8">TRAVAILLONS <span className="text-green-600">ENSEMBLE</span></h2>

      <div className="max-w-lg p-6 bg-my-theme rounded-lg shadow-lg">
        {/* Display success message based on Formspree's state */}
        {formspreeState.succeeded && (
          <div className="alert alert-success mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Message envoyé avec succès !</span>
          </div>
        )}

        <form
          onSubmit={handleSubmit(onClientSideValidatedSubmit)}
          className="space-y-6"
        >
          {/* Form fields */}

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
              <ValidationError
                prefix="Email"
                field="email"
                errors={formspreeState.errors}
                className="text-red-500 text-sm"
              />
            </div>
          </div>

          {/* Work Type Selection */}
          <div className="form-control">
            <label className="label">Type de Travail</label>
            <select {...register("workType")} className="select select-primary w-full bg-my-theme-solid">
              <option value="">Choisir un type de travail</option>
              <option value="single-work">Travail unique</option>
              <option value="hire">Embauche</option>
              <option value="consulting">Conseil 💡</option>
              <option value="coaching">Tutorat / Coaching 🎓</option>
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
            <ValidationError
              prefix="Message"
              field="message"
              errors={formspreeState.errors}
              className="text-red-500 text-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={formspreeState.submitting}
          >
            Envoyer
          </button>
          <ValidationError errors={formspreeState.errors} className="text-red-500 text-sm" />
        </form>
      </div>
    </section>
  );
}