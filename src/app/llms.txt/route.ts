import { WORK } from "@/lib/work";
import { LINKS, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// A plain-text version of the site for AI assistants (llmstxt.org), built from the same
// data as the page, so a new project shows up here too
export function GET() {
  const work = WORK.map((project) =>
    [
      `### [${project.name}](${SITE_URL}/work/${project.slug})`,
      "",
      project.summary,
      "",
      `- Year: ${project.year}`,
      `- Type: ${project.kind}`,
      `- Role: ${project.role}`,
      `- Stack: ${project.stack}`,
      ...project.links.map((link) => `- ${link.label}: ${link.href}`),
      ...project.tiles.flatMap((tile) =>
        tile.type === "stat" ? [`- ${tile.value}: ${tile.label}`] : []
      ),
      "",
      "Notes:",
      "",
      ...project.notes.map((note) => `- ${note}`),
    ].join("\n")
  );

  const body = [
    "# Christian Lund",
    "",
    "> Software engineer based in Denmark. This is his portfolio: the projects he has built, his role on each, the stack, and the decisions behind them.",
    "",
    "## Work",
    "",
    work.join("\n\n"),
    "",
    "## Contact",
    "",
    ...LINKS.map((link) => `- ${link.label}: ${link.href.replace(/^mailto:/, "")}`),
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
