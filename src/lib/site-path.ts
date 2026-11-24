const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function sitePath(path: string) {
  return `${base}${path}`;
}

export function prefixProgramLinks(html: string) {
  return html.replace(/(\s(?:href|src)=)(["'])(\/(?!\/)[^"']*)\2/gi,
    (_, attr, quote, path) => attr + quote + sitePath(path) + quote,
  );
}
