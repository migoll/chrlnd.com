import { CommandOutput as CommandOutputType } from "@/lib/terminal/command-registry";

interface CommandOutputProps {
  output: CommandOutputType;
}

export function CommandOutput({ output }: CommandOutputProps) {
  const content = Array.isArray(output.content)
    ? output.content
    : [output.content];

  if (output.type === "clear") {
    return null;
  }

  if (output.type === "error") {
    return (
      <div className="text-red-400 font-mono text-sm leading-relaxed">
        {content.map((line, i) => (
          <div key={i} className="mb-1">{line}</div>
        ))}
      </div>
    );
  }

  if (output.type === "success") {
    return (
      <div className="text-green-400 font-mono text-sm leading-relaxed">
        {content.map((line, i) => (
          <div key={i} className="mb-1">{line}</div>
        ))}
      </div>
    );
  }

  if (output.type === "link" && output.links) {
    return (
      <div className="text-[#f0f0f0] font-mono text-sm leading-relaxed">
        {content.map((line, i) => (
          <div key={i} className="mb-1">{line}</div>
        ))}
        <div className="mt-3 space-y-1">
          {output.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline inline-block transition-colors"
            >
              → {link.text}
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="text-[#f0f0f0] font-mono text-sm whitespace-pre-wrap leading-relaxed">
      {content.map((line, i) => (
        <div key={i} className="mb-1">{line}</div>
      ))}
      {output.links && output.links.length > 0 && (
        <div className="mt-3 space-y-1">
          {output.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline inline-block transition-colors"
            >
              → {link.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

