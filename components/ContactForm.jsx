"use client";
import * as yup from "yup";
import { Formik } from "formik";

export const contactSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters")
    .max(50, "Full name must not exceed 50 characters"),

  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Please enter a valid email address"),

  phone: yup
    .string()
    .trim()
    .nullable()
    .notRequired()
    .matches(/^[0-9]{10}$/, {
      message: "Phone number must be 10 digits",
      excludeEmptyString: true,
    }),

  message: yup
    .string()
    .trim()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must not exceed 500 characters"),
});

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ fullName: "", email: "", phone: "", message: "" }}
      validationSchema={contactSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}
        className="flex  flex-col gap-6  p-10"
        >
          <div>
            <label htmlFor="name" className="text-xs  text-mid-text/50">
              Full Name
            </label>
            <input
              className="w-full px-6 py-3 border border-border/50 rounded-xl  bg-primary"
              type="text"
              name="fullName"
              id="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.fullName}
            />
            <p className='text-red-600 text-xs mt-1 ml-2' > {errors.fullName && touched.fullName && errors.fullName}</p>
          </div>

          <div>
            <label htmlFor="email" className="text-xs  text-mid-text/50">
              Email
            </label>

            <input
              className="w-full  px-6 py-3 border border-border/50 rounded-xl  bg-primary"
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <p className='text-red-600 text-xs mt-1 ml-2' > {errors.email && touched.email && errors.email}</p>
          </div>

          <div>
            <label htmlFor="number" className="text-xs  text-mid-text/50">
              Contact Number (optional)
            </label>

            <input
              className="w-full px-6 py-3 border border-border/50 rounded-xl  bg-primary"
              type="text"
              name="phone"
              id="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            <p className='text-red-600 text-xs mt-1 ml-2' > {errors.phone && touched.phone && errors.phone}</p>
          </div>
          <div>
            <label htmlFor="message" className="text-xs  text-mid-text/50">
              Message
            </label>
            <textarea
              className="w-full h-20 px-6 py-3 border border-border/50 rounded-xl  bg-primary"
              name="message"
              id="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            ></textarea>
            <p className='text-red-600 text-xs  ml-2' > {errors.message && touched.message && errors.message}</p>
          </div>
          <button type="submit" disabled={isSubmitting} 
          className="w-full bg-light-text text-primary py-2 rounded-full"
          > 
            Send Enquiries
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
