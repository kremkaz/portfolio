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
  /** narrow — картинка по центру в узкой колонке (для высоких схем). */
  | { type: "image"; image: CaseImage; bordered?: boolean; narrow?: boolean }
  /** Несколько одинаковых плиток в ряд, по клику открываются на весь экран с листанием между ними. */
  | { type: "images"; images: CaseImage[]; bordered?: boolean; natural?: boolean }
  | { type: "stats"; items: CaseStat[] }
  | { type: "list"; items: CaseParagraph[]; ordered?: boolean };

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
  /** Текст перед скриншотами. */
  before?: CaseStageBlock[];
  /** Текст после скриншотов. */
  after?: CaseStageBlock[];
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
  /** Обложка под заголовком; у кейса без обложки (в процессе) блок не выводится. */
  cover?: CaseImage;
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
