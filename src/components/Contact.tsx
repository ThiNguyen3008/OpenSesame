import { useEffect, useRef } from "react"

const Contact = () => {
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
        Thank you for reading, and I hope you enjoy exploring my project!
        </h2>

        <p className="text-xl leading-relaxed text-center">
        I look forward to your feedback!
        </p>
        <br></br>
        <div className="flex flex-col items-start space-y-3 text-left">
        <p className="text-xl tracking-wide leading-loose">
        <strong className="font-bold">Website:</strong> <a href="https://www.kristen-nguyen.com" className="text-black hover:text-blue-600 transition-colors duration-300">
      https://www.kristen-nguyen.com
    </a>
  </p>
  <p className="text-xl tracking-wide leading-loose">
  <strong className="font-bold">LinkedIn:</strong> <a href="https://www.linkedin.com/in/kristen-nguyen-96100a252/" className="text-black hover:text-blue-600 transition-colors duration-300">
      https://www.linkedin.com/in/kristen-nguyen-96100a252/
    </a>
  </p>
  <p className="text-xl tracking-wide leading-loose">
  <strong className="font-bold">Email: </strong><a href="mailto:krisnguyen3095@gmail.com" className="text-black hover:text-blue-600 transition-colors duration-300">
      krisnguyen3095@gmail.com
    </a>
  </p>

  

  <p className="text-xl tracking-wide leading-loose">
  <strong className="font-bold">GitHub: </strong><a href="https://github.com/ThiNguyen3008" className="text-black hover:text-blue-600 transition-colors duration-300">
      https://github.com/ThiNguyen3008
    </a>
  </p>

  
</div>

      </div>
    </section>
  )
}

export default Contact
