import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Clock, Users, BookOpen, Heart } from "lucide-react";

const gatherings = [
  {
    icon: Clock,
    title: "Weekly Worship Services",
    description:
      "Our congregation gathers regularly for worship, prayer, and teaching from the Scriptures.",
  },
  {
    icon: Users,
    title: "Fellowship Meetings",
    description:
      "Times of fellowship where members connect, share, and encourage one another in faith.",
  },
  {
    icon: BookOpen,
    title: "Bible Study",
    description:
      "Opportunities to study the Bible together and grow in understanding of Scripture.",
  },
  {
    icon: Heart,
    title: "Prayer Gatherings",
    description:
      "Dedicated times of corporate prayer for the church, community, and personal needs.",
  },
];

export default function PrayerFellowship() {
  return (
    <Layout>
      <PageHeader
        title="Prayer & Fellowship"
        subtitle="Opportunities to worship, pray, and connect with our community."
      />

      <section className="page-section">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              At IPC Gilgal Church, prayer and fellowship are at the heart of our community life. We gather regularly for worship, mutual encouragement, and spiritual growth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gatherings.map((gathering, index) => (
                <div key={index} className="card-elevated">
                  <div className="w-12 h-12 bg-olive-light rounded-lg flex items-center justify-center mb-4">
                    <gathering.icon className="w-6 h-6 text-olive" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {gathering.title}
                  </h3>
                  <p className="text-muted-foreground">{gathering.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 card-elevated bg-cream border-none text-center">
              <h2 className="text-xl font-semibold text-foreground mb-3">All Are Welcome</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Whether you are new to our church or a long-time member, you are always welcome to join us for worship and fellowship. Contact us for information about service times and locations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
