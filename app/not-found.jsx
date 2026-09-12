import FuzzyText from "@/components/FuzzyText";
import Link from "next/link";
import React from 'react'

const notfound = () => {
  return (
    <div>
      <main className="min-h-screen bg-primary text-light-text flex items-center justify-center">
      <div className="text-center">

        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={0.5}
          enableHover
        >
          404
        </FuzzyText>

        <p className="mt-8 text-dark-text">
         page not found
        </p>
        <Link href={'/'}
        className="inline-block bg-blue-800 px-2 py-2 text-sm text-light-text
        mt-3 rounded-md"
        > Home page</Link>

      </div>
    </main>

    </div>
  )
}

export default notfound