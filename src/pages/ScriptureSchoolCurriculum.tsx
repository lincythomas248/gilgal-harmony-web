import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { BackToTop } from "@/components/ui/BackToTop";
import { BookOpen } from "lucide-react";

export default function ScriptureSchoolCurriculum() {
  return (
    <Layout>
      <BackToTop />
      <PageHeader
        title="Scripture School Curriculum"
        subtitle="A structured journey through biblical education from Beginners to Grade 12."
      />

      <section className="section-light page-section">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="card-warm text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-gold-soft rounded-xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4 font-serif">
                Full Curriculum Coming Soon
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                The complete curriculum map with detailed grade-wise syllabi and regional examination focus areas will be available here shortly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
