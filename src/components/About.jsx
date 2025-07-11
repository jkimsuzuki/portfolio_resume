/**
 * @copyright 2025 Joseph Yu Kim-Suzuki
 * @license Apache-2.0
 */


const aboutItems = [
    {
      label: 'Languages Spoken',
      number: '',
    },
  ];


const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
        <div className="container">

            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
              <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
               Welcome — it’s great to have you here! I’m passionate about blending creativity with efficiency, guided by a philosophy that balances professionalism, resilience, and respectful, open communication. I’ve learned over time that the best results don’t come from simply working hard — they come from working smart, with intention, empathy, and a genuine commitment to those around me.

My journey is a colorful mix of experiences: an artistic background that keeps my imagination sharp, athletic training that’s instilled discipline and teamwork, and international adventures that have expanded my adaptability and understanding of different perspectives. Together, these have taught me the immense value of leading with curiosity, embracing diverse ideas, and always thinking beyond the obvious.

What truly drives me is the thrill of building something larger than myself. Whether it’s collaborating on a project that breaks new ground or helping a team member shine, I thrive on tackling challenges before they arise and turning obstacles into opportunities. It’s this proactive mindset that keeps me energized and always looking for ways to grow — and help others do the same.

At the heart of it all, I pride myself on being a genuine team player. You can count on me to show up ready to support, collaborate, and uplift everyone around me, creating an environment where creativity, accountability, and shared success take the spotlight.

I’m excited about the possibility of bringing my unique blend of skills, perspective, and energy to your team. Let’s create something extraordinary together.

              </p>

              <div className="flex flex-wrap items-center gap-4 md:gap-7">
                {
                    aboutItems.map(({label, number}, key) => (
                        <div key={key}>
                          <div className="flex items-center md:mb-2">
                            <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                            <span className="text-sky-400 font-semibold md:text-2xl">English, 日本語, 한국어, Français</span>
                          </div> 


                          <p className="text-sm text-zinc-400">{label}</p>
                        </div>
                    ))
                }

                <img 
                  src="/images/logo.svg" 
                  alt="Logo"
                  width={30}
                  height={30} 
                  className="ml-auto md:w-[40px] md:h-[40px]" />
              </div>
            </div>

        </div>
    </section>
  )
}

export default About
