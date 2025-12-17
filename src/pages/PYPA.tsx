import { Layout } from "@/components/layout/Layout";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { Users, Heart, BookOpen, Music, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const activities = [
  {
    icon: BookOpen,
    title: "Bible Study",
    description: "Regular study of Scripture to deepen understanding and application of God's Word.",
  },
  {
    icon: Heart,
    title: "Fellowship",
    description: "Building meaningful friendships and supporting one another in faith.",
  },
  {
    icon: Music,
    title: "Worship",
    description: "Opportunities to participate in praise and worship through music and prayer.",
  },
  {
    icon: Users,
    title: "Service",
    description: "Engaging in various church activities and community service initiatives.",
  },
];

export default function PYPA() {
  return (
    <Layout>
      <HeroBanner
        title="PYPA"
        subtitle="Pentecostal Young People's Association"
        primaryCta={{ text: "Join PYPA", link: "/contact" }}
      />

      <section className="page-section">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-12">
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                PYPA (Pentecostal Young People's Association) is the youth ministry of IPC Gilgal Church. We provide a welcoming space for young people to grow spiritually, develop their gifts, and connect with peers who share their faith.
              </p>
            </div>

            {/* Mission */}
            <div className="card-elevated mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                PYPA exists to nurture the spiritual growth of young people, equipping them with a strong foundation of faith. We create opportunities for youth to discover their purpose, develop leadership qualities, and build lasting friendships within the church community.
              </p>
            </div>

            {/* Activities Grid */}
            <h2 className="text-xl font-semibold text-foreground mb-6">What We Do</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {activities.map((activity, index) => (
                <div key={index} className="card-elevated">
                  <div className="w-12 h-12 bg-olive-light rounded-lg flex items-center justify-center mb-4">
                    <activity.icon className="w-6 h-6 text-olive" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{activity.title}</h3>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </div>
              ))}
            </div>

            {/* Join Us */}
            <div className="card-elevated bg-dove-light border-none text-center">
              <h2 className="text-xl font-semibold text-foreground mb-3">Join PYPA</h2>
              <p className="text-muted-foreground">
                Young people of all backgrounds are welcome to participate in PYPA activities. Connect with us through the church to learn more about upcoming youth gatherings and programs.
              </p>
            </div>

            {/* Resources & Devotions */}
            <Link
              to="/resources/devotions"
              className="group card-elevated block mt-8 p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.01] cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-foreground mb-2">Resources & Devotions</h2>
                  <p className="text-muted-foreground text-sm">
                    Weekly devotionals, Bible reading, and youth-friendly resources to grow in faith.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-primary ml-4">
                  <span className="text-sm font-medium hidden sm:inline">Explore</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
