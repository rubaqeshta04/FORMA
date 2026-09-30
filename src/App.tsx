import { About } from '@/components/about/About'
import { Contact } from '@/components/contact/Contact'
import { Experience } from '@/components/experience/Experience'
import { Footer } from '@/components/footer/Footer'
import { Hero } from '@/components/hero/Hero'
import { Layout } from '@/components/layout/Layout'
import { Navbar } from '@/components/navbar/Navbar'
import { Projects } from '@/components/projects/Projects'
import { Services } from '@/components/services/Services'
import { Skills } from '@/components/skills/Skills'
import { siteConfig } from '@/data'
import { applySeo } from '@/lib/seo'
import { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    applySeo(siteConfig)
  }, [])

  return (
    <Layout>
      <Navbar />

      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </Layout>
  )
}
