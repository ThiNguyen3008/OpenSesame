import { useEffect, useRef } from "react"

const Journey = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 z-10">
      <div
        ref={ref}
        className="reveal bg-white backdrop-blur-lg rounded-2xl p-20 text-black shadow-xl"
      >
        <h2 className="font-bold mb-6 text-5xl text-[#E15C29] text-center leading-snug">
          How OpenSesame Fits My Career Journey or Long-Term Goals
        </h2>

        <p className="text-xl text-justify leading-relaxed">
        OpenSesame aligns perfectly with my long-term goal of <strong className="font-bold">building technology products that meet real needs for both users and businesses.</strong> I’m especially excited about OpenSesame because the company develops products that support corporate training, helping employees build the skills they need to grow and succeed. As a Computer Science student with experience in web development and user-centered design, I’m excited about creating intuitive, scalable solutions that make learning more accessible and engaging.
        </p>
        <br></br>
        <p className="text-xl text-justify leading-relaxed">
        Through my internships and freelance projects, I’ve designed websites and digital tools that help customers easily explore and interact with a business’s products and services. These experiences showed me that building effective digital solutions isn’t just about writing code, it’s about understanding the user, translating business goals into practical designs, and creating platforms that truly improve efficiency and accessibility.
        </p>
        <br></br>
        <p className="text-xl text-justify leading-relaxed">
        OpenSesame’s mission to help organizations develop skills at scale resonates with my goal of building products that make a tangible impact. In the long run, I aim to grow as a full-stack engineer who not only delivers features, but also contributes to thoughtful product decisions that enhance learning and professional growth. Being part of a learning-focused company like OpenSesame would give me the opportunity to sharpen both my technical and product design skills while creating solutions that empower people and organizations to thrive in a fast-changing, AI-driven world.
        </p>
      </div>
    </section>
  )
}

export default Journey
