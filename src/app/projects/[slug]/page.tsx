import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, FolderGit2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-2xl shadow-black/30">
          <div className={`relative isolate overflow-hidden bg-gradient-to-br ${project.accent.from} ${project.accent.via} ${project.accent.to} px-6 py-10 sm:px-8 lg:px-10`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_24rem)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50" />
            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl space-y-5">
                <span className="inline-flex rounded-full border border-white/20 bg-black/25 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/90">
                  {project.category}
                </span>
                <h1 className="font-display text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
                <p className="max-w-3xl text-base leading-8 text-white/85 sm:text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="rounded-full border border-white/15 bg-black/20 px-4 py-2 text-white/90">
                    {project.status}
                  </span>
                  <span className="rounded-full border border-white/15 bg-black/20 px-4 py-2 text-white/90">
                    {project.role}
                  </span>
                  <span className="rounded-full border border-white/15 bg-black/20 px-4 py-2 text-white/90">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black/30"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Projects
                </Link>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950/85 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-950"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                ) : null}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950/85 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-950"
                >
                  <FolderGit2 className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 sm:p-8">
              <SectionHeading
                eyebrow="Overview"
                title="What the project is solving."
                description={project.fullDescription}
              />
              <div className="mt-8 space-y-4">
                {project.overview.map((item) => (
                  <p key={item} className="text-sm leading-8 text-slate-300 sm:text-base">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 sm:p-8">
              <SectionHeading
                eyebrow="Features"
                title="Capabilities that make the build useful."
                description="These are the parts that make IntelliGrocer feel like a connected product instead of a collection of unrelated screens."
              />
              <div className="mt-8 grid gap-4">
                {project.features.map((feature) => (
                  <div key={feature} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm leading-7 text-slate-200">
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 sm:p-8">
              <SectionHeading
                eyebrow="Architecture"
                title="How the system is structured."
                description="A simple breakdown of the data and workflow path that gives the project technical credibility."
              />
              <div className="mt-8 grid gap-4">
                {project.architecture.map((layer, index) => (
                  <div key={layer} className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/10 text-sm font-semibold text-cyan-300">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-7 text-slate-200">{layer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <SectionHeading
                eyebrow="Tech Stack"
                title="Tools used"
                description="The stack reflects the actual repo and the workflow problems the project is trying to solve."
              />
              <div className="mt-6 flex flex-wrap gap-2">
                {project.techStack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <SectionHeading
                eyebrow="Preview"
                title="Interface snapshots"
                description="These panels stand in for the shopper, employee, and manager experiences and keep the case study visually scannable."
              />
              <div className="mt-6 grid gap-4">
                {project.previews.map((preview, index) => (
                  <div
                    key={preview.title}
                    className={`overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${project.accent.from} ${project.accent.via} ${project.accent.to} p-5`}
                  >
                    <div className="rounded-[1.2rem] border border-white/15 bg-slate-950/45 p-5 backdrop-blur-sm">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200/90">
                        View {index + 1}
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                        {preview.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-200">{preview.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <SectionHeading
                eyebrow="Challenges"
                title="Key engineering lessons"
                description="The hardest parts of the build were mostly about coordination, state consistency, and keeping the system believable."
              />
              <div className="mt-6 space-y-4">
                {project.challenges.map((challenge) => (
                  <p key={challenge} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm leading-7 text-slate-200">
                    {challenge}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
