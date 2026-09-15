"use client";

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),

  phone: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number")
    .required("Phone number is required"),

  date: Yup.date()
    .required("Please select a date"),

  time: Yup.string()
    .required("Please select a time"),

  message: Yup.string()
    .max(500, "Message cannot exceed 500 characters"),
});

const PrivateViewForm = ({ id }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-5 py-20 bg-primary">
      <div className="w-full max-w-2xl rounded-2xl border border-border/30 bg-card p-8">

        <div className="mb-8">
          <p className="text-sm text-mid-text/60">
            Private Viewing
          </p>

          <h1 className="mt-2 text-3xl font-bold text-light-text">
            Request a private viewing
          </h1>

          <p className="mt-3 text-mid-text/60">
            Reserve a convenient date and time to experience this car
            in person.
          </p>
        </div>

        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {

            const bookingData = {
              carId: id,
              ...values,
            };

            console.log(bookingData);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
          }) => (
            <Form className="space-y-6">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm text-mid-text">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full rounded-lg border border-border/30 bg-primary px-4 py-3 text-light-text outline-none focus:border-light-text"
                />

                {touched.name && errors.name && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>


              {/* Email */}
              <div>
                <label className="mb-2 block text-sm text-mid-text">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full rounded-lg border border-border/30 bg-primary px-4 py-3 text-light-text outline-none focus:border-light-text"
                />

                {touched.email && errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>


              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm text-mid-text">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full rounded-lg border border-border/30 bg-primary px-4 py-3 text-light-text outline-none focus:border-light-text"
                />

                {touched.phone && errors.phone && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>


              {/* Date + Time */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                {/* Date */}
                <div>
                  <label className="mb-2 block text-sm text-mid-text">
                    Preferred Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full rounded-lg border border-border/30 bg-primary px-4 py-3 text-light-text outline-none focus:border-light-text"
                  />

                  {touched.date && errors.date && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.date}
                    </p>
                  )}
                </div>


                {/* Time */}
                <div>
                  <label className="mb-2 block text-sm text-mid-text">
                    Preferred Time
                  </label>

                  <input
                    type="time"
                    name="time"
                    value={values.time}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full rounded-lg border border-border/30 bg-primary px-4 py-3 text-light-text outline-none focus:border-light-text"
                  />

                  {touched.time && errors.time && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.time}
                    </p>
                  )}
                </div>

              </div>


              {/* Message */}
              <div>
                <label className="mb-2 block text-sm text-mid-text">
                  Message
                  <span className="ml-1 text-mid-text/40">
                    (Optional)
                  </span>
                </label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Any special request?"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full resize-none rounded-lg border border-border/30 bg-primary px-4 py-3 text-light-text outline-none focus:border-light-text"
                />

                {touched.message && errors.message && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>


              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-full bg-light-text px-6 py-3 font-medium text-primary transition hover:scale-[1.02]"
              >
                Request a private viewing
              </button>

            </Form>
          )}
        </Formik>

      </div>
    </div>
  );
};

export default PrivateViewForm;