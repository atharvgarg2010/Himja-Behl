"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  who: z.string().min(1, "Please select who we are styling"),
  lookingFor: z.array(z.string()).min(1, "Please select at least one event"),
  styleDirection: z.string().min(1, "Please select a style direction"),
  date: z.string().min(1, "Please provide the wedding date"),
  location: z.string().min(1, "Please provide the location"),
  functions: z.string().min(1, "Please provide the number of functions"),
  colors: z.string().optional(),
  inspiration: z.string().optional(),
  additional: z.string().optional(),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
});

type FormData = z.infer<typeof formSchema>;

const STEPS = [
  { id: "who", title: "Who are we styling?" },
  { id: "what", title: "What are you looking for?" },
  { id: "style", title: "Style Direction" },
  { id: "details", title: "Wedding Details" },
  { id: "preferences", title: "Preferences" },
  { id: "contact", title: "Contact Details" },
];

export function EnquiryForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lookingFor: [],
    },
  });

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (currentStep === 0) fieldsToValidate = ["who"];
    if (currentStep === 1) fieldsToValidate = ["lookingFor"];
    if (currentStep === 2) fieldsToValidate = ["styleDirection"];
    if (currentStep === 3) fieldsToValidate = ["date", "location", "functions"];
    if (currentStep === 4) fieldsToValidate = ["colors", "inspiration", "additional"];
    
    const isStepValid = await trigger(fieldsToValidate as any);
    if (isStepValid) {
      setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // In Phase 9 this will be hooked up to an actual backend
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const currentWho = watch("who");
  const currentLookingFor = watch("lookingFor") || [];
  const currentStyle = watch("styleDirection");

  const toggleLookingFor = (value: string) => {
    const current = new Set(currentLookingFor);
    if (current.has(value)) {
      current.delete(value);
    } else {
      current.add(value);
    }
    setValue("lookingFor", Array.from(current), { shouldValidate: true });
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-24 flex flex-col items-center"
      >
        <div className="w-16 h-16 rounded-full bg-dust-gold/20 flex items-center justify-center mb-8">
          <CheckCircle2 className="w-8 h-8 text-dust-gold" />
        </div>
        <h3 className="font-display text-4xl mb-6">Your Edit is being prepared.</h3>
        <p className="font-sans text-warm-white/70 max-w-md mx-auto leading-relaxed">
          Thank you for sharing your vision. We will review your details and reach out shortly to begin your private styling consultation.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden min-h-[500px] flex flex-col">
      {/* Progress */}
      <div className="flex items-center justify-between mb-12">
        <span className="font-sans text-[10px] tracking-[0.2em] text-dust-gold uppercase">
          Step {currentStep + 1} of {STEPS.length}
        </span>
        <div className="flex gap-1">
          {STEPS.map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "h-[2px] transition-all duration-500",
                i === currentStep ? "w-8 bg-dust-gold" : "w-2 bg-white/20"
              )}
            />
          ))}
        </div>
      </div>

      {/* Form Area */}
      <div className="flex-grow relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <h3 className="font-display text-3xl md:text-4xl mb-10 text-warm-white tracking-wide">
              {STEPS[currentStep].title}
            </h3>

            {/* STEP 1: WHO */}
            {currentStep === 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Bride", "Groom", "Couple", "Family", "Multiple"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setValue("who", option, { shouldValidate: true })}
                    className={cn(
                      "py-6 px-4 border text-sm font-sans tracking-widest uppercase transition-all duration-300",
                      currentWho === option 
                        ? "border-dust-gold bg-dust-gold/10 text-dust-gold" 
                        : "border-white/10 hover:border-white/30 text-warm-white/70"
                    )}
                  >
                    {option}
                  </button>
                ))}
                {errors.who && <p className="text-red-400 text-xs mt-2 col-span-full">{errors.who.message}</p>}
              </div>
            )}

            {/* STEP 2: WHAT */}
            {currentStep === 1 && (
              <div className="grid grid-cols-2 gap-4">
                {["Wedding", "Reception", "Sangeet", "Mehendi", "Engagement", "Full Wedding Wardrobe", "Other"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggleLookingFor(option)}
                    className={cn(
                      "py-4 px-4 border text-xs font-sans tracking-widest uppercase transition-all duration-300 text-left",
                      currentLookingFor.includes(option)
                        ? "border-dust-gold bg-dust-gold/10 text-dust-gold" 
                        : "border-white/10 hover:border-white/30 text-warm-white/70"
                    )}
                  >
                    {option}
                  </button>
                ))}
                {errors.lookingFor && <p className="text-red-400 text-xs mt-2 col-span-full">{errors.lookingFor.message}</p>}
              </div>
            )}

            {/* STEP 3: STYLE */}
            {currentStep === 2 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Traditional", "Contemporary", "Fusion", "Minimal", "Regal", "Experimental"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setValue("styleDirection", option, { shouldValidate: true })}
                    className={cn(
                      "py-6 px-4 border text-xs font-sans tracking-widest uppercase transition-all duration-300",
                      currentStyle === option 
                        ? "border-dust-gold bg-dust-gold/10 text-dust-gold" 
                        : "border-white/10 hover:border-white/30 text-warm-white/70"
                    )}
                  >
                    {option}
                  </button>
                ))}
                {errors.styleDirection && <p className="text-red-400 text-xs mt-2 col-span-full">{errors.styleDirection.message}</p>}
              </div>
            )}

            {/* STEP 4: DETAILS */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <div className="flex flex-col">
                  <label className="text-[10px] tracking-[0.2em] text-warm-white/50 uppercase mb-2">Wedding Date / Timeline</label>
                  <input 
                    {...register("date")} 
                    className="bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-dust-gold font-sans transition-colors placeholder:text-white/20"
                    placeholder="e.g. December 2027"
                  />
                  {errors.date && <span className="text-red-400 text-xs mt-1">{errors.date.message}</span>}
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] tracking-[0.2em] text-warm-white/50 uppercase mb-2">Location / Venue</label>
                  <input 
                    {...register("location")} 
                    className="bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-dust-gold font-sans transition-colors placeholder:text-white/20"
                    placeholder="e.g. Lake Como, Italy"
                  />
                  {errors.location && <span className="text-red-400 text-xs mt-1">{errors.location.message}</span>}
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] tracking-[0.2em] text-warm-white/50 uppercase mb-2">Estimated Number of Functions</label>
                  <input 
                    {...register("functions")} 
                    className="bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-dust-gold font-sans transition-colors placeholder:text-white/20"
                    placeholder="e.g. 3 main events"
                  />
                  {errors.functions && <span className="text-red-400 text-xs mt-1">{errors.functions.message}</span>}
                </div>
              </div>
            )}

            {/* STEP 5: PREFERENCES */}
            {currentStep === 4 && (
              <div className="space-y-8">
                <div className="flex flex-col">
                  <label className="text-[10px] tracking-[0.2em] text-warm-white/50 uppercase mb-2">Preferred Colors (Optional)</label>
                  <input 
                    {...register("colors")} 
                    className="bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-dust-gold font-sans transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] tracking-[0.2em] text-warm-white/50 uppercase mb-2">Designers / Inspiration (Optional)</label>
                  <textarea 
                    {...register("inspiration")} 
                    rows={2}
                    className="bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-dust-gold font-sans transition-colors resize-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] tracking-[0.2em] text-warm-white/50 uppercase mb-2">Additional Requirements (Optional)</label>
                  <textarea 
                    {...register("additional")} 
                    rows={2}
                    className="bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-dust-gold font-sans transition-colors resize-none"
                  />
                </div>
              </div>
            )}

            {/* STEP 6: CONTACT */}
            {currentStep === 5 && (
              <div className="space-y-8">
                <div className="flex flex-col">
                  <label className="text-[10px] tracking-[0.2em] text-warm-white/50 uppercase mb-2">Full Name</label>
                  <input 
                    {...register("name")} 
                    className="bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-dust-gold font-sans transition-colors"
                  />
                  {errors.name && <span className="text-red-400 text-xs mt-1">{errors.name.message}</span>}
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] tracking-[0.2em] text-warm-white/50 uppercase mb-2">Email Address</label>
                  <input 
                    {...register("email")} 
                    type="email"
                    className="bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-dust-gold font-sans transition-colors"
                  />
                  {errors.email && <span className="text-red-400 text-xs mt-1">{errors.email.message}</span>}
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] tracking-[0.2em] text-warm-white/50 uppercase mb-2">Phone Number</label>
                  <input 
                    {...register("phone")} 
                    type="tel"
                    className="bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-dust-gold font-sans transition-colors"
                  />
                  {errors.phone && <span className="text-red-400 text-xs mt-1">{errors.phone.message}</span>}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-24 pt-8 border-t border-white/10">
        <button
          type="button"
          onClick={prevStep}
          className={cn(
            "flex items-center gap-3 text-xs tracking-widest font-sans uppercase transition-colors",
            currentStep === 0 ? "opacity-0 pointer-events-none" : "text-warm-white/50 hover:text-warm-white"
          )}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {currentStep < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={nextStep}
            className="flex items-center gap-3 text-xs tracking-widest font-sans uppercase text-dust-gold hover:text-white transition-colors"
          >
            Next Step
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
            className="flex items-center gap-3 text-xs tracking-widest font-sans uppercase bg-dust-gold text-[#1A0407] px-8 py-3 hover:bg-white transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
          </button>
        )}
      </div>
    </div>
  );
}
