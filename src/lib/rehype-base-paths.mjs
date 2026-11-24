export function rehypeBasePaths({ base }) {
  const prefix = base.replace(/\/$/, "");

  function visit(node) {
    for (const attribute of ["href", "src"]) {
      const value = node.properties?.[attribute];
      if (typeof value === "string" && /^\/(?!\/)/.test(value)) {
        node.properties[attribute] = prefix + value;
      }
    }
    for (const child of node.children ?? []) visit(child);
  }

  return visit;
}
