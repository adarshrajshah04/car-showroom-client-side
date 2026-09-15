"use client";

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginPage = () => {
  return (
    <div className="min-h-screen w-full bg-primary flex items-center justify-center px-5 py-20">

      <div className="w-full max-w-md">

        {/* Header */}
        <div className="mb-8 text-center">
        

          <h1 className="mt-3 text-4xl font-bold text-light-text">
            Welcome back
          </h1>

          <p className="mt-3 text-mid-text/60">
            Sign in to continue your ARS experience.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-border/20 bg-card p-8">

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
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
                    className="w-full rounded-lg border border-border/30 bg-primary px-4 py-3 text-light-text placeholder:text-mid-text/30 outline-none transition focus:border-light-text"
                  />

                  {touched.email && errors.email && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="mb-2 block text-sm text-mid-text">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full rounded-lg border border-border/30 bg-primary px-4 py-3 text-light-text placeholder:text-mid-text/30 outline-none transition focus:border-light-text"
                  />

                  {touched.password && errors.password && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full rounded-full bg-light-text px-6 py-3 font-medium text-primary transition hover:scale-[1.02]"
                >
                  Sign in
                </button>

              </Form>
            )}
          </Formik>

          {/* Register */}
          <p className="mt-6 text-center text-sm text-mid-text/60">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-light-text hover:underline"
            >
              Create account
            </a>
          </p>

        </div>

      </div>
    </div>
  );
};

export default LoginPage;