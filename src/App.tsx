import hero from "./assets/hero.png"
import Journey from "./components/Journey"
import Strengths from "./components/Strengths"
import AI from "./components/AI"
import Contact from "./components/Contact"
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fa8253] via-[#fb9155] to-[#fff6f0]">
        <section className="relative max-w-7xl mx-auto px-6 py-10 pt-10 z-10">
        <div className="relative w-full">
          <img
            src={hero}
            alt="bg"
            className="w-full object-cover rounded-xl brightness-105"
          />
        </div>
      </section>
      <Journey />
      <Strengths />
      <AI />
      <Contact />
    </div>
  )
}

export default App
