import type { CSSProperties } from "react";
import { asset } from "@/lib/asset";

/**
 * Иконка из SVG-файла, окрашенная цветом текста (currentColor). Файл служит только
 * формой (маской), а цвет задаётся классом text-* у иконки или родителя — так все
 * иконки следуют токенам (text-primary, hover:text-primary-hover), а не цвету в файле.
 */
export function Icon({ src, className = "" }: { src: string; className?: string }) {
  const url = `url("${asset(src)}")`;
  const style: CSSProperties = {
    maskImage: url,
    maskSize: "contain",
    maskRepeat: "no-repeat",
    maskPosition: "center",
    WebkitMaskImage: url,
    WebkitMaskSize: "contain",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
  };
  return <span aria-hidden className={`inline-block shrink-0 bg-current ${className}`} style={style} />;
}
