import { useEffect, useRef } from "react"
import ai from "../assets/ai.png"

const AI = () => {
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
        Why AI Excites Me and Its Impact on Learning and Work
        </h2>

        <p className="text-xl text-justify leading-relaxed">
        What excites me most about AI is <strong className="font-bold">its ability to make learning personalized and scalable in ways that weren’t possible before. </strong> In my Personal Portfolio Website project (<a href="https://www.kristen-nguyen.com" className="text-black hover:text-blue-600 transition-colors duration-300">
      https://www.kristen-nguyen.com
    </a>), I built an AI-powered chat assistant to help visitors quickly explore my background and projects. That experience showed me how AI can reduce friction, provide real-time answers, and adapt to individual needs. In a learning context, this could translate into personalized course recommendations, adaptive feedback, or intelligent support systems that keep learners engaged.
        </p>
        <br></br>
        <p className="text-xl text-justify leading-relaxed">
        I believe <strong className="font-bold">AI can turn standard workplace training into learning that fits each person. </strong> It can help identify skill gaps, suggest targeted learning paths, and support employees exactly when they need it. At the same time, thoughtful design and human-centered implementation are essential. AI should enhance learning, not overwhelm it.
        </p>
        <br></br>
        <p className="text-xl text-justify leading-relaxed">
        The opportunity to work with AI at OpenSesame excites me because it combines technical innovation with meaningful impact, helping people continuously grow and adapt in a rapidly evolving workforce.
        </p>
        <div className="relative w-full flex justify-center">
          <img
            src={ai}
            alt="bg"
            className="w-md object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  )
}

export default AI
