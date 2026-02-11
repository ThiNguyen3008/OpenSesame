import { useEffect, useRef } from "react"
import together from "../assets/together.png"

const Strengths = () => {
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
        Strengths, Skills, and Perspectives I Bring to OpenSesame
        </h2>

        <p className="text-xl text-justify leading-relaxed">
        <strong className="font-bold">My greatest strengths are accountability, resourcefulness, and adaptability.</strong> Give me a task, and I’ll ensure it is completed on time. I approach challenges with resourcefulness, always seeking creative ways to overcome obstacles. My adaptability means I will willingly carry out tasks outside of my job description to add more value to the company in times of need.
        </p>
        <br></br>
        <p className="text-xl text-justify leading-relaxed">
        <strong className="font-bold">I also bring a combination of technical expertise, design sensibility, and collaborative experience. </strong> I’ve built responsive web applications using <strong className="font-bold">React, Next.js, TypeScript, Node.js, and MongoDB, </strong> as well as maintained and developed <strong className="font-bold">content-managed websites (CMS)</strong> using WordPress. I’ve deployed applications on <strong className="font-bold">AWS</strong> and Render, implemented <strong className="font-bold">CI/CD pipelines </strong> with automatic builds and deployments from GitHub, and <strong className="font-bold">integrated APIs, including an AI-powered chat assistant using the OpenAI API.</strong>  This experience has given me a strong understanding of both frontend usability and backend functionality.
        </p>
        <br></br>
        <p className="text-xl text-justify leading-relaxed">
        From a design perspective, I’m skilled at translating Figma wireframes into clean, maintainable code. My graphic design background helps me focus on branding, accessibility, and user experience — key factors for creating learning platforms where clarity and usability are essential.
        </p>
        <br></br>
        <p className="text-xl text-justify leading-relaxed">
        Additionally, I’ve worked closely with non-technical stakeholders, including small business owners and cross-functional teams, which has strengthened my teamwork and communication skills, as well as my ability to translate abstract ideas into practical solutions. I approach every challenge with curiosity, attention to detail, and a strong willingness to learn — qualities I believe are essential in a mission-driven and fast-evolving environment like OpenSesame.
        </p>
        <br></br>
        <div className="relative w-full flex justify-center">
          <img
            src={together}
            alt="bg"
            className="w-lg object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Strengths
