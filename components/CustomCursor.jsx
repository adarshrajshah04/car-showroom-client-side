
"use client";

// React hooks
// useEffect -> browser events aur cursor logic run karne ke liye
// useRef -> DOM elements ko directly access karne ke liye
import { useEffect, useRef } from "react";

// GSAP animation library
import gsap from "gsap";

const CustomCursor = () => {
  // Outer cursor, inner dot aur cursor text ko access karne ke liye refs
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const textRef = useRef(null);

  // Component mount hone ke baad cursor ka saara logic yaha run hota hai
  useEffect(() => {
    // Refs se actual DOM elements nikal rahe hain
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const text = textRef.current;

    // Agar DOM elements nahi mile to code stop kar do
    if (!cursor || !dot || !text) return;

    // =====================================================
    // INITIAL POSITION
    // =====================================================

    // Cursor aur dot ko mouse ke center ke according set karta hai
    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
    });

    gsap.set(dot, {
      xPercent: -50,
      yPercent: -50,
    });

    // =====================================================
    // HANDLE MOUSE MOVE
    // =====================================================

    // Mouse move hone par outer cursor aur inner dot ko
    // mouse ki current position par move karta hai
    const handleMouseMove = (e) => {
      // Outer cursor ko smoothly mouse follow karwata hai
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power3.out",
      });

      // Inner dot ko outer cursor se faster mouse follow karwata hai
      // Isse cursor me smooth lag/inertia feel aati hai
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
        ease: "power2.out",
      });
    };

    // Browser me mouse move event ko handleMouseMove function se connect karta hai
    window.addEventListener("mousemove", handleMouseMove);

    // =====================================================
    // HANDLE CURSOR ENTER
    // =====================================================

    // data-cursor wale element par mouse enter hone par
    // cursor ko bada karta hai aur VIEW/DRAG text show karta hai
    const handleEnter = (e) => {
      // Element ke data-cursor attribute ki value nikalta hai
      // Example: data-cursor="DRAG" -> value = "DRAG"
      const value = e.currentTarget.dataset.cursor;

      // Hover hone par outer cursor ko bada karta hai
      gsap.to(cursor, {
        scale: 2,
        duration: 0.3,
        ease: "power3.out",
      });

      // Hover hone par inner dot ko hide karta hai
      gsap.to(dot, {
        scale: 0,
        duration: 0.2,
      });

      // Cursor ke andar data-cursor ki value set karta hai
      // Agar value empty hai to default "VIEW" show hoga
      text.textContent = value || "VIEW";

      // Cursor ke andar text ko animate karke show karta hai
      gsap.to(text, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
      });
    };

    // =====================================================
    // HANDLE CURSOR LEAVE
    // =====================================================

    // data-cursor wale element se mouse bahar jaane par
    // cursor ko normal state me wapas laata hai
    const handleLeave = () => {
      // Outer cursor ko normal size me wapas laata hai
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });

      // Inner dot ko wapas show karta hai
      gsap.to(dot, {
        scale: 1,
        duration: 0.2,
      });

      // Cursor ke andar ka VIEW/DRAG text hide karta hai
      gsap.to(text, {
        opacity: 0,
        scale: 0,
        duration: 0.2,
      });
    };

    // =====================================================
    // DATA-CURSOR ELEMENTS
    // =====================================================

    // Kisi bhi data-cursor element par events attach karne ke liye
    // reusable function
    const attachCursorEvents = (element) => {
      // Mouse enter -> cursor expand
      element.addEventListener("mouseenter", handleEnter);

      // Mouse leave -> cursor normal
      element.addEventListener("mouseleave", handleLeave);

      // Cleanup ke liye same functions save kar rahe hain
      element._cursorEnter = handleEnter;
      element._cursorLeave = handleLeave;
    };

    // Page par jo data-cursor elements already available hain
    // unke andar events attach kar do
    document
      .querySelectorAll("[data-cursor]")
      .forEach((element) => {
        attachCursorEvents(element);
      });

    // =====================================================
    // MAGNETIC ELEMENTS
    // =====================================================

    // Kisi bhi data-magnetic element par magnetic effect
    // attach karne ke liye reusable function
    const attachMagneticEvents = (element) => {
      // ===================================================
      // HANDLE MAGNETIC MOVE
      // ===================================================

      // Magnetic element ke andar mouse move hone par
      // element ko mouse ki taraf move karta hai
      const handleMagneticMove = (e) => {
        // Element ki current position aur size nikalta hai
        const rect = element.getBoundingClientRect();

        // Mouse aur element ke center ke beech X distance
        const x = e.clientX - (rect.left + rect.width / 2);

        // Mouse aur element ke center ke beech Y distance
        const y = e.clientY - (rect.top + rect.height / 2);

        // Element ko mouse ki direction me move karta hai
        // 0.2 = magnetic strength
        gsap.to(element, {
          x: x * 0.2,
          y: y * 0.2,
          duration: 0.3,
          ease: "power3.out",
        });
      };

      // ===================================================
      // HANDLE MAGNETIC LEAVE
      // ===================================================

      // Mouse magnetic element se bahar jaane par
      // element ko original position par wapas laata hai
      const handleMagneticLeave = () => {
        // Element ko original position par reset karta hai
        // elastic ease ki wajah se halka bounce effect aata hai
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.4)",
        });
      };

      // Magnetic element par mouse movement ko handle karta hai
      element.addEventListener(
        "mousemove",
        handleMagneticMove
      );

      // Magnetic element se mouse bahar jaane ko handle karta hai
      element.addEventListener(
        "mouseleave",
        handleMagneticLeave
      );

      // Cleanup ke liye functions save kar rahe hain
      element._magneticMove = handleMagneticMove;
      element._magneticLeave = handleMagneticLeave;
    };

    // Page par jo data-magnetic elements already available hain
    // unke andar events attach kar do
    document
      .querySelectorAll("[data-magnetic]")
      .forEach((element) => {
        attachMagneticEvents(element);
      });

    // =====================================================
    // MUTATION OBSERVER
    // =====================================================

    // Page par jab naye elements dynamically add honge
    // MutationObserver unhe detect karega
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          // Sirf HTML elements ko process karo
          if (node.nodeType !== 1) return;

          // ---------------------------------------------
          // DATA-CURSOR
          // ---------------------------------------------

          // Agar newly added element khud data-cursor hai
          if (node.matches("[data-cursor]")) {
            attachCursorEvents(node);
          }

          // Agar newly added element ke andar
          // data-cursor elements hain
          node
            .querySelectorAll?.("[data-cursor]")
            .forEach((element) => {
              attachCursorEvents(element);
            });

          // ---------------------------------------------
          // DATA-MAGNETIC
          // ---------------------------------------------

          // Agar newly added element khud data-magnetic hai
          if (node.matches("[data-magnetic]")) {
            attachMagneticEvents(node);
          }

          // Agar newly added element ke andar
          // data-magnetic elements hain
          node
            .querySelectorAll?.("[data-magnetic]")
            .forEach((element) => {
              attachMagneticEvents(element);
            });
        });
      });
    });

    // Body ke andar hone wale naye DOM changes observe karo
    // Isse page navigation aur API-rendered elements bhi detect honge
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // =====================================================
    // CLEANUP
    // =====================================================

    // Component unmount hone par saare event listeners remove karta hai
    // Isse duplicate events aur memory leaks se bach sakte hain
    return () => {
      // Window ka mousemove event remove karta hai
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      // MutationObserver ko stop karta hai
      observer.disconnect();

      // Saare cursor elements ke events remove karta hai
      document
        .querySelectorAll("[data-cursor]")
        .forEach((element) => {
          element.removeEventListener(
            "mouseenter",
            element._cursorEnter
          );

          element.removeEventListener(
            "mouseleave",
            element._cursorLeave
          );
        });

      // Saare magnetic elements ke events remove karta hai
      document
        .querySelectorAll("[data-magnetic]")
        .forEach((element) => {
          element.removeEventListener(
            "mousemove",
            element._magneticMove
          );

          element.removeEventListener(
            "mouseleave",
            element._magneticLeave
          );
        });
    };

    // Empty dependency array:
    // Ye useEffect component mount hone par ek baar run hota hai
  }, []);

  // =====================================================
  // CURSOR UI
  // =====================================================

  return (
    <>
      {/* Outer/main cursor */}
      <div
        ref={cursorRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[99999]
          flex
          h-0
          w-0
          px-4
          py-4
          items-center
          justify-center
          rounded-full
          border
          border-border/60
          bg-black/30
        "
        // backdrop-blur-xl bg blur karne ke liye
      >
        {/* Cursor ke andar VIEW / DRAG text */}
        <span
          ref={textRef}
          className="
            pointer-events-none
            text-[6px]
            font-medium
            tracking-[2px]
            text-light-text
            opacity-0
            inline-block
          "
        />
      </div>

      {/* Inner/small dot jo mouse ko fast follow karta hai */}
      <div
        ref={dotRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[100000]
          h-1.5
          w-1.5
          rounded-full
          bg-light-text
        "
      />
    </>
  );
};

// CustomCursor component ko export kar rahe hain
export default CustomCursor;