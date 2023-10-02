import { z } from "zod";
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
export const personalInfoSchema = z.object({
  fullName: z.string().nonempty(),
  gender: z.enum(["male", "female"]),
  country: z.string().nonempty(),
  dateOfBirth: z.coerce.date().refine((date) => {
    return date > new Date("1930-01-01") && date < new Date();
  }),
  maritalStatus: z.enum(["single", "married"]),
});

export const contactInfoSchema = z.object({
  email: z.string().email(),
  countryCode: z.string().startsWith("+").max(3).min(2),
  address: z.string().nonempty(),
  phone: z.string().regex(phoneRegex, "Invalid Number!"),
});

export const educationSchema = z.object({
  degree: z.string().nonempty("Degree is required"),
  fieldOfStudy: z.string().nonempty("Field Of Study is required"),
  startYear: z.coerce.number().min(1990).max(new Date().getFullYear()),
  endYear: z.coerce.number().min(1990).max(new Date().getFullYear()),
});
//   .refine((education) => {
//     const { startYear, endYear } = education;
//     return startYear < endYear;
//   });

export const experienceSchema = z.array(
  z.object({
    company: z.string().nonempty(),
    position: z.string().nonempty(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
  })
  // .refine((experience) => {
  //   const { startDate, endDate } = experience;
  //   return startDate < endDate;
  // })
);
export const hobbiesSchema = z.array(z.string());

export const formSchema = z.object({
  personalInfo: personalInfoSchema,
  contactInfo: contactInfoSchema,
  education: educationSchema,
  experience: experienceSchema,
  hobbies: hobbiesSchema,
});
export const zodSchemasArr = [
  personalInfoSchema,
  contactInfoSchema,
  educationSchema,
  experienceSchema,
  hobbiesSchema,
] as const;

export type formType = z.infer<typeof formSchema>;
