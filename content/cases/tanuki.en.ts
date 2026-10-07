import type { CaseImage, CaseStageBlock, CaseStudy } from "./types";
import { tanuki } from "./tanuki";

const alt = (image: CaseImage | undefined, text: string): CaseImage => ({ ...image!, alt: text });

/** Картинка из русского этапа — первая по порядку блок-картинка. */
function stageImage(stageIndex: number): CaseImage {
  const block = tanuki.stages[stageIndex].blocks?.find(
    (b): b is Extract<CaseStageBlock, { type: "image" }> => b.type === "image",
  );
  return block!.image;
}

const [context, research, architecture, entryPoints] = tanuki.stages;
const shots = tanuki.result!.flow;

/** Английская версия кейса Tanuki: картинки те же, тексты свои. */
export const tanukiEn: CaseStudy = {
  ...tanuki,
  backLabel: "Back to case studies",
  backHref: "/en#cases",
  title: "Tanuki delivery — customize a dish",
  subtitle: "A feature for changing what goes into a dish",
  facts: [
    { label: "Role", value: "Product designer" },
    { label: "Tools", value: "Figma, FigJam, Pathway, Claude Code" },
    { label: "Platform", value: "Mobile" },
  ],
  meta: {
    role: "Product designer (personal project)",
    duration: "4 weeks",
    type: "B2C",
    tools: ["Figma", "Pathway", "Google Form", "Miro"],
  },
  cover: alt(
    tanuki.cover,
    "Tanuki cover: three delivery app screens for customizing a roll, surrounded by rolls",
  ),
  stages: [
    {
      ...context,
      label: "Context & task",
      heading: "Taking the load off delivery operators",
      paragraphs: [
        "Tanuki is a delivery app for ordering from the Tanuki restaurant chain and its partners.",
        "One evening, while ordering rolls, I wanted to drop the sesame and tweak the ingredients a little. Most apps let you do that easily. I couldn't find the option here, and support confirmed it didn't exist.",
        "**That became the idea for this case: design a dish customization feature for the Tanuki delivery app**",
      ],
    },
    {
      ...research,
      label: "Research",
      heading: "Digging in",
      blocks: [
        {
          type: "paragraph",
          text: "Exploring the app, I found that you can leave a comment that both the courier and the kitchen see. My hypothesis: **letting people customize a dish would take load off operators and cut down on mistakes in orders.**",
        },
        {
          type: "image",
          image: alt(
            stageImage(1),
            "The order comment field in the app and a receipt where the comment ended up in the item name",
          ),
          bordered: false,
        },
        { type: "subheading", text: "Is this a real problem?" },
        {
          type: "paragraph",
          text: "I ran a survey: most people have taste preferences, and some have allergies. More than half had received their order unchanged after asking an operator or leaving a comment.",
        },
        {
          type: "stats",
          items: [
            { value: "61.8%", label: "are picky eaters" },
            { value: "18.2%", label: "have food allergies" },
            { value: "52.9%", label: "got their order unchanged" },
          ],
        },
      ],
    },
    {
      ...architecture,
      label: "Information architecture",
      heading: "Entities and number of actions",
      blocks: [
        {
          type: "paragraph",
          text: "At first I planned three blocks on the screen: **add, replace and remove**. That would have invited a lot of errors: removing sesame would mean disabling it in the add block and taking it out of the replacement options — too many trade-offs. After exploring workable options, I **merged removal into the replace block.**",
        },
        {
          type: "paragraph",
          text: "**Along the way I talked to people with allergies:** if they can't exclude an allergen themselves and mark it as their allergy, they won't order through the app, and their trust in the restaurant drops sharply. **That's how the allergies block came about.**",
        },
        {
          type: "paragraph",
          text: "**The outcome: an add block, a replace block with built-in removal, and an allergies block.**",
        },
        {
          type: "image",
          image: alt(
            stageImage(2),
            "Three blocks of the dish customization screen: add, change and allergens",
          ),
          bordered: false,
        },
      ],
    },
    {
      ...entryPoints,
      label: "Entry points",
      heading: "Entry point from the cart: where exactly?",
      blocks: [
        {
          type: "paragraph",
          text: "Just when I thought the work was nearly done, I hit a problem: the final first-click test of the entry points was disappointing — more than 30% of participants got it wrong.",
        },
        {
          type: "paragraph",
          text: "I made a few more versions and ran interviews with the prototypes.",
        },
        {
          type: "image",
          image: alt(
            stageImage(3),
            "Entry point options for editing a dish from the cart: “Could be like this”, “Like this” and “Or like this”",
          ),
          bordered: false,
        },
        {
          type: "paragraph",
          text: "**In the end, none of them won)**",
        },
        {
          type: "paragraph",
          text: "The interviews showed that people are used to simply tapping the line they want to change. It's a behavior that doesn't need its own element in the interface.",
        },
      ],
    },
  ],
  result: {
    ...tanuki.result!,
    heading: "Result",
    note: "Click a screenshot to see it full size",
    flow: [
      alt(shots[0], "Roll card with the “Change ingredients” button"),
      alt(shots[1], "Customization screen: add-ons, ingredient swaps and an automatically removed allergen"),
      alt(shots[2], "Customization screen: the “Any allergies?” block"),
      alt(shots[3], "Cart: the customized roll marked “Modified”"),
      alt(shots[4], "Adding the customized roll again: choosing between the modified and the original"),
      alt(shots[5], "Cart: a second roll with the same changes added"),
      alt(shots[6], "Cart: an original roll without changes added"),
      alt(shots[7], "Customization screen: add-ons, ingredient swaps and an automatically removed allergen"),
    ],
  },
  nextCase: {
    title: "BusTime — public transport tracking",
    subtitle: "Reworking the navigation, plus a little visual polish",
    href: "/en/cases/bustime",
  },
};
