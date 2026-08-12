export function render404Page(template: string, rawBasePath: string | undefined): string;
export function generate404Page(options: {
  rawBasePath: string | undefined;
  templatePath: string;
  outputPath: string;
}): void;
