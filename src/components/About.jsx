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
               Welcome — it’s great to have you here! I’m passionate about blending creativity with efficiency to deliver smart, thoughtful solutions that truly make an impact. My approach is grounded in professionalism, open communication, and a genuine commitment to collaboration.

With a unique mix of artistic creativity, athletic discipline, and international experience, I bring adaptability, curiosity, and fresh perspectives to every project. I thrive on tackling challenges proactively and enjoy building something greater than myself through teamwork and innovation.

As a dependable team player, I’m dedicated to supporting and uplifting those around me, fostering an environment where creativity and accountability lead the way.

I’m excited to bring my skills, energy, and perspective to your next project. Let’s create something extraordinary together.



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
