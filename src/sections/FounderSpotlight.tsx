import Container from '../components/Container'
import PhotoSlot from '../components/PhotoSlot'
import SectionHeading from '../components/SectionHeading'

export default function FounderSpotlight() {
  return (
    <section id="stories" className="bg-paper py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <PhotoSlot
          src="/images/founder-spotlight.png"
          alt="A smiling teen looking toward the camera outdoors"
          label="founder-spotlight.png — funded teen founder portrait, 4:5"
          className="aspect-[4/5] w-full rounded-2xl object-cover"
        />

        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Founder stories"
            title="Our first cohort is getting to work"
            description="We're funding our very first round of teen founders across rural Oklahoma right now. Their stories—what they built, what they learned, what they'd tell the next applicant—will live here soon."
          />
          <div className="rounded-xl border border-dashed border-red/40 bg-red-50 px-5 py-4">
            <p className="text-sm leading-relaxed text-ink/75">
              <span className="font-semibold text-red">Already a Sprout Fund founder?</span> We&rsquo;d
              love to feature your business. Reply to your grant email or reach out through the{' '}
              <a href="#donate" className="font-semibold text-red underline underline-offset-2">
                contact form below
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
