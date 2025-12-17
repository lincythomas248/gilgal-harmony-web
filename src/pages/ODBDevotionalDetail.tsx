import { useParams, useNavigate, Link } from 'react-router-dom';
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Calendar, User } from "lucide-react";
import { useODBDevotionals, getExcerpt } from "@/hooks/useODBDevotionals";
import { format } from "date-fns";

const ODBDevotionalDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { devotionals, loading, error } = useODBDevotionals(10);

  const devotional = devotionals.find(d => d.slug === slug);

  if (loading) {
    return (
      <Layout>
        <section className="page-section">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center py-20">
              <div className="animate-pulse">
                <div className="h-8 bg-muted rounded w-3/4 mx-auto mb-4" />
                <div className="h-4 bg-muted rounded w-1/2 mx-auto mb-8" />
                <div className="space-y-3">
                  <div className="h-4 bg-muted rounded" />
                  <div className="h-4 bg-muted rounded" />
                  <div className="h-4 bg-muted rounded w-5/6" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  if (error || !devotional) {
    return (
      <Layout>
        <section className="page-section">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center py-20">
              <h1 className="text-2xl font-semibold text-foreground mb-4">
                Devotional Not Found
              </h1>
              <p className="text-muted-foreground mb-6">
                {error || "We couldn't find this devotional. It may have been removed or the link is incorrect."}
              </p>
              <Button onClick={() => navigate('/resources/devotions')} variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Resources
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  const formattedDate = devotional.pubDate 
    ? format(new Date(devotional.pubDate), 'MMMM d, yyyy')
    : '';

  const excerpt = getExcerpt(devotional.description, 120);

  return (
    <Layout>
      <section className="page-section">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            {/* Back navigation */}
            <Link 
              to="/resources/devotions"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </Link>

            {/* Article header */}
            <article className="card-elevated p-6 sm:p-8 md:p-10">
              {devotional.thumbnail && (
                <div className="aspect-video rounded-lg overflow-hidden mb-6 -mx-2 sm:-mx-4">
                  <img
                    src={devotional.thumbnail}
                    alt={devotional.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">
                {devotional.title}
              </h1>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
                {formattedDate && (
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {formattedDate}
                  </span>
                )}
                {devotional.author && (
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    {devotional.author}
                  </span>
                )}
              </div>

              {/* Excerpt */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-foreground/80 leading-relaxed">
                  {excerpt}
                </p>
              </div>

              {/* CTA to full article */}
              <div className="bg-cream/50 rounded-xl p-6 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Continue reading the full devotional on Our Daily Bread
                </p>
                <Button asChild className="gap-2">
                  <a
                    href={devotional.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Full Devotional
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ODBDevotionalDetail;
