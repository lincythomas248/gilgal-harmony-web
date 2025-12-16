import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { BookOpen, Users } from "lucide-react";

const ministries = [
  {
    icon: BookOpen,
    title: "Scripture School",
    description:
      "Our Scripture School provides biblical education for children and youth, helping them build a strong foundation in faith through age-appropriate lessons and activities.",
    link: "/ministries/scripture-school",
  },
  {
    icon: Users,
    title: "PYPA (Pentecostal Young People's Association)",
    description:
      "PYPA is our youth ministry that provides a nurturing environment for young people to grow in their faith, develop leadership skills, and build meaningful friendships.",
    link: "/ministries/pypa",
  },
];

export default function Ministries() {
  return (
    <Layout>
      <PageHeader
        title="Ministries"
        subtitle="Explore our programs serving different age groups and needs."
      />

      <section className="page-section">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ministries.map((ministry, index) => (
                <Link
                  key={index}
                  to={ministry.link}
                  className="card-elevated group hover:border-primary/30 transition-colors"
                >
                  <div className="w-14 h-14 bg-olive-light rounded-lg flex items-center justify-center mb-4 group-hover:bg-olive/10 transition-colors">
                    <ministry.icon className="w-7 h-7 text-olive" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {ministry.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {ministry.description}
                  </p>
                  <p className="mt-4 text-primary font-medium text-sm">
                    Learn more →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
