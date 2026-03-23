import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";

export function FeaturedProjects() {
  return (
    <section id="featured" className="space-y-10">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Public work that shows real systems thinking."
        description="I’m only showing projects that are actually public on GitHub. Right now IntelliGrocer is the flagship build, and more case studies will be added as new public projects are shipped."
      />

      <div className="grid gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
