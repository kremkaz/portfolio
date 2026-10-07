export type CaseParagraph = string;

export type CaseImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CaseStat = {
  value: string;
  label: string;
};

/** Произвольная последовательность блоков внутри этапа — для кейсов со свободной структурой. */
export type CaseStageBlock =
  | { type: "subheading"; text: string }
  | { type: "paragraph"; text: CaseParagraph }
  | { type: "image"; image: CaseImage; bordered?: boolean }
  | { type: "stats"; items: CaseStat[] };

export type CaseStage = {
  number: string;
  label: string;
  heading: string;
  paragraphs: CaseParagraph[];
  blocks?: CaseStageBlock[];
  aside?: string;
  image?: CaseImage;
  images?: CaseImage[];
};

export type CaseResult = {
  /** landscape — десктопные экраны 16:9, portrait — вертикальные экраны телефона. */
  orientation?: "landscape" | "portrait";
  heading: string;
  note: string;
  /** Основной флоу — несколько состояний одного экрана, показываются вместе. */
  flow: CaseImage[];
  /** Полноразмерные самостоятельные экраны. */
  screens: CaseImage[];
};

export type CaseStudy = {
  slug: string;
  backLabel: string;
  backHref: string;
  title: string;
  subtitle: string;
  cover: CaseImage;
  /** Короткие факты о проекте списком под обложкой («Роль: …», «Платформа: …»). */
  facts?: { label: string; value: string }[];
  stages: CaseStage[];
  result?: CaseResult;
  nextCase: {
    title: string;
    subtitle: string;
    href: string;
  };
};
