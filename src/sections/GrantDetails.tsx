import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import SeedPacketCard from '../components/SeedPacketCard'

const rows = [
  { label: 'Grant size', value: '$100 – $500' },
  { label: 'Who can apply', value: 'Ages 13–19, rural OK' },
  { label: 'Funds cover', value: 'Supplies, tools, fees' },
  { label: "Won't cover", value: 'Personal expenses' },
  { label: 'Decision time', value: '~2 weeks' },
  { label: 'Reporting', value: 'One short update' },
]

export default function GrantDetails() {
  return (
    <section className="border-b border-ink/10 bg-cream py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        <SectionHeading
          eyebrow="The grant, at a glance"
          title="Small money, real terms, no fine print"
          description="Every grant works the same way—read it like the back of a seed packet. If you're not sure whether your idea qualifies, apply anyway and we'll help you figure it out."
        />

        <SeedPacketCard
          variety="Micro-Grant"
          subtitle="Sprout Fund · Rural Oklahoma"
          rows={rows}
          footerNote="Plant anywhere in Oklahoma · Germinates in ~2 weeks"
        />
      </Container>
    </section>
  )
}
