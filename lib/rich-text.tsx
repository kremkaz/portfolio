import { Fragment, type ReactNode } from "react";

/**
 * Минимальный инлайн-разметчик для текстов кейсов: **bold** и _italic_.
 * Не полноценный markdown — ровно то, что нужно для акцентов в абзацах.
 */
export function renderRichText(text: string): ReactNode {
  const pattern = /\*\*(.+?)\*\*|_(.+?)_/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(<Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>);
    }
    if (match[1] !== undefined) {
      nodes.push(<strong key={key++}>{match[1]}</strong>);
    } else if (match[2] !== undefined) {
      nodes.push(<em key={key++}>{match[2]}</em>);
    }
    lastIndex = pattern.lastIndex;
  }
  if (lastIndex < text.length) {
    nodes.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);
  }
  return nodes;
}
