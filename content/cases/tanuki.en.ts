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
  title: "Tanuki — customizing a dish",
  subtitle: "Ingredient customization for food delivery",
  facts: [
    { label: "Role", value: "Product designer" },
    { label: "Tools", value: "Figma, FigJam, Pathway, Claude Code" },
    { label: "Platform", value: "Mobile" },
  ],
  cover: alt(
    tanuki.cover,
    "Tanuki cover: three delivery app screens for customizing a roll, surrounded by rolls",
  ),
  stages: [
    {
      ...context,
      label: "Context & task",
      heading: "Customizing a dish",
      paragraphs: [
        "Tanuki is a delivery app for ordering from the Tanuki restaurant chain and its partners.",
        "One evening, while ordering rolls, I wanted to drop the sesame and tweak the ingredients a little. Most apps let you do that easily. I couldn't find the option here, and support confirmed it: the only way to change an order is to leave a delivery comment.",
        "**That became the idea for this case: design a dish customization feature for the Tanuki delivery app.**",
      ],
    },
    {
      ...research,
      label: "Research",
      heading: "Digging in",
      blocks: [
        {
          type: "paragraph",
          text: "Exploring the app, I found that you can indeed leave a comment that both the courier and the kitchen see. My hypothesis: **letting people customize a dish would take load off operators and cut down on mistakes in orders.**",
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
          text: "I surveyed 55 respondents: most people have taste preferences, and some have allergies. More than half had received their order unchanged after asking an operator or leaving a comment.",
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
            "A first-click heatmap of the cart and entry point options for editing a dish: “Could be like this”, “Like this” and “Or like this”",
          ),
          bordered: false,
        },
        {
          type: "paragraph",
          text: "**In the end, none of them won)**",
        },
        {
          type: "paragraph",
          text: "The interviews showed that people are used to simply tapping the line they want to change. So a separate button wasn't needed: **I made the whole dish row in the cart tappable.**",
        },
      ],
    },
  ],
  result: {
    ...tanuki.result!,
    heading: "Result",
    note: "Click a screenshot to see it full size",
    before: [
      {
        type: "paragraph",
        text: "Once I made the whole dish row in the cart the entry point, I ran a usability test of the whole flow with people I know (n=12). They rated **how easy it was to start the flow** at **6.6** on average, and **how easy the flow itself was** at **6.8** (SEQ scale, 1–7). The sample is small and comes from my own circle, so I treat the result as a rough signal.",
      },
    ],
    after: [
      {
        type: "paragraph",
        text: "**What's next?** The main open question is how the note about ingredients actually reaches the kitchen. Next steps:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Find out from the restaurant how the kitchen sees order comments today (on the receipt, in the POS system, on a screen).",
          "Check with the delivery POS team whether ingredient changes can be sent as a separate field rather than as text in the item name.",
          "Split comments for the kitchen and for the courier: ingredients and allergens go to the kitchen, address and delivery details go to the courier.",
        ],
      },
      {
        type: "paragraph",
        text: "Metrics: number of ingredient errors in orders, support requests about ingredients, share of orders with customized ingredients.",
      },
    ],
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
    title: "Bustime — public transport tracking",
    subtitle: "Tracking buses and more, anywhere in the world",
    href: "/en/cases/bustime",
  },
};
