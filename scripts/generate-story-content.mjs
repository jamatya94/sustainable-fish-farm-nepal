import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const projectRoot = process.cwd();
const legacyStoryDir = path.join(projectRoot, "public", "stories");
const normalizedStoryDir = path.join(projectRoot, "public", "content", "stories");
const storyImageRoot = path.join(projectRoot, "public", "images", "stories");
const outputFile = path.join(projectRoot, "data", "storyArticles.ts");

const STORY_CONFIG = [
  {
    slug: "sumnima-chitwan",
    normalizedDocxName: "sumnima-chitwan.docx",
    sourceFileName: "Farmer Story - II.docx",
    category: "Farmer story",
    date: "August 2025",
    title: "Her Farm, Her Strength: How Sumnima is building a more secure future in Chitwan",
    description:
      "Through a project in Chitwan, SFFI trained 250 farmers and provided microfinance grants to women farmers, helping expand both skills and opportunity. For Sumnima, 28, that support is now helping transform fish farming into a more reliable livelihood and a stronger foundation for her family’s future.",
    imageAlts: [
      "Sumnima holds a basket of fish on a riverbank in Chitwan, Nepal.",
    ],
  },
  {
    slug: "gender-insights-impact",
    normalizedDocxName: "gender-insights.docx",
    sourceFileName: "From data to impact_ How gender insights help farmers prosper.docx",
    category: "Research",
    date: "May 2025",
    title: "From data to impact: How gender insights help farmers prosper",
    description:
      "Gender-responsive learning helped SFFI see where women were still facing barriers in fish farming and how better-targeted support could improve outcomes. In Nepal, this approach strengthened the connection between technical training, women-centered finance, stronger livelihoods, and more secure households.",
    imageAlts: [
      "A woman crouches on a wooden boat while pulling a fish from a net.",
    ],
  },
  {
    slug: "dhading-fish-farming",
    normalizedDocxName: "dhading-fish-farming.docx",
    sourceFileName: "Field Update Report.docx",
    category: "Field update",
    date: "April 2024",
    title: "Fish Farming in Dhading Is Strengthening Rural Livelihoods",
    description:
      "In Baseri Village, Dhading, SFFI delivered 20 technical trainings reaching 500 farmers, helping rural households strengthen fish farming as a pathway to improved nutrition, more stable income, and greater resilience. Rooted in practical, community-based learning, the project equipped farmers with the skills to improve productivity and reduce risk. For women like Mandira, a single mother of five, that support helped launch a new livelihood and increase household income by 90%.",
    imageAlts: [
      "Mandira stands beside a fish pond in Baseri Village, Dhading.",
    ],
  },
  {
    slug: "sdg-innovation-award",
    normalizedDocxName: "sdg-award.docx",
    sourceFileName: "Cultivating Change_ SFFI’s SDG Innovation Award for Sustainable Aquaculture.docx",
    category: "Award feature",
    date: "August 2024",
    title: "Cultivating Change: SFFI’s SDG Innovation Award for Sustainable Aquaculture",
    description:
      "SFFI’s SDG Innovation Award for Sustainable Aquaculture was created to honor grassroots innovators shaping a more sustainable, inclusive, and resilient future for aquaculture in Nepal. By recognizing community-rooted leadership, the award helped amplify ideas that were advancing food systems, livelihoods, and youth-led innovation.",
    imageAlts: [
      "Award recipients and supporters pose with SDG Innovation Award checks and certificates.",
      "Rita Shrestha Bhadra holds an SDG Innovation Award check and certificate for Aquaponics Nepal.",
      "Ashok Adhikari holds an SDG Innovation Award check and certificate.",
      "Om Thapa and Tara Thapa hold an SDG Innovation Award check and framed certificate for Galyang Aquaponics Farm.",
    ],
  },
];

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function decodeXml(text) {
  return text
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&");
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function stripTags(html) {
  return html.replace(/<[^>]+>/g, "");
}

function readZipEntry(zipPath, entryPath) {
  return execFileSync("unzip", ["-p", zipPath, entryPath], {
    cwd: projectRoot,
    encoding: "utf8",
  });
}

function parseRelationships(relsXml) {
  const relationships = {};

  for (const match of relsXml.matchAll(/<Relationship\b[^>]*Id="([^"]+)"[^>]*Target="([^"]+)"/g)) {
    relationships[match[1]] = match[2];
  }

  return relationships;
}

function parseRunHtml(runXml) {
  const isBold = /<w:b(?:\s|\/|>)/.test(runXml);
  const isItalic = /<w:i(?:\s|\/|>)/.test(runXml);
  let html = "";
  const tokenPattern = /<w:t(?: [^>]*)?>([\s\S]*?)<\/w:t>|<w:tab(?: [^>]*)?\/>|<w:br(?: [^>]*)?\/>/g;

  for (const match of runXml.matchAll(tokenPattern)) {
    if (match[0].startsWith("<w:br")) {
      html += "<br />";
      continue;
    }

    if (match[0].startsWith("<w:tab")) {
      html += " ";
      continue;
    }

    const text = escapeHtml(decodeXml(match[1] ?? ""));

    if (!text) {
      continue;
    }

    let wrapped = text;

    if (isItalic) {
      wrapped = `<em>${wrapped}</em>`;
    }

    if (isBold) {
      wrapped = `<strong>${wrapped}</strong>`;
    }

    html += wrapped;
  }

  return html;
}

function parseTextBlock(style, isListItem, html) {
  const plainText = stripTags(html).replace(/\s+/g, " ").trim();

  if (isListItem) {
    return {
      type: "list-item",
      html,
    };
  }

  if (style === "Heading3" && plainText.length > 110) {
    return {
      type: "paragraph",
      html,
    };
  }

  if (style === "Heading2" || style === "Heading3" || style === "Heading1") {
    return {
      type: "heading",
      level: style === "Heading3" ? 3 : 2,
      html,
    };
  }

  return {
    type: "paragraph",
    html,
  };
}

function parseParagraph(paragraphXml, relationships) {
  const style = paragraphXml.match(/<w:pStyle\b[^>]*w:val="([^"]+)"/)?.[1] ?? null;
  const isListItem = /<w:numPr>/.test(paragraphXml);
  const imageTargets = [
    ...paragraphXml.matchAll(/<a:blip\b[^>]*r:embed="([^"]+)"/g),
  ]
    .map((match) => relationships[match[1]])
    .filter(Boolean);

  const html = [...paragraphXml.matchAll(/<w:r\b[\s\S]*?<\/w:r>/g)]
    .map((match) => parseRunHtml(match[0]))
    .join("")
    .replace(/(?:<br \/>)+$/g, "");

  const text = stripTags(html).replace(/\s+/g, " ").trim();

  if (!text && imageTargets.length === 0) {
    return null;
  }

  if (!text) {
    return [
      {
        type: "image",
        targets: imageTargets,
      },
    ];
  }

  const blocks = [parseTextBlock(style, isListItem, html)];

  if (imageTargets.length > 0) {
    blocks.push({
      type: "image",
      targets: imageTargets,
    });
  }

  return blocks;
}

function parseDocumentBlocks(docXml, relationships) {
  const bodyXml = docXml.match(/<w:body>([\s\S]*?)<w:sectPr[\s\S]*?<\/w:body>/)?.[1] ?? "";
  const paragraphMatches = bodyXml.match(/<w:p\b[\s\S]*?<\/w:p>/g) ?? [];
  const blocks = [];

  for (const paragraphXml of paragraphMatches) {
    const paragraphBlocks = parseParagraph(paragraphXml, relationships);

    if (!paragraphBlocks) {
      continue;
    }

    blocks.push(...paragraphBlocks);
  }

  const groupedBlocks = [];

  for (const block of blocks) {
    if (block.type === "list-item") {
      const previous = groupedBlocks[groupedBlocks.length - 1];

      if (previous?.type === "list") {
        previous.items.push(block.html);
      } else {
        groupedBlocks.push({
          type: "list",
          items: [block.html],
        });
      }

      continue;
    }

    groupedBlocks.push(block);
  }

  return groupedBlocks;
}

function getImageSize(imagePath) {
  const output = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", imagePath], {
    cwd: projectRoot,
    encoding: "utf8",
  });

  const width = Number(output.match(/pixelWidth:\s+(\d+)/)?.[1] ?? 0);
  const height = Number(output.match(/pixelHeight:\s+(\d+)/)?.[1] ?? 0);

  return { width, height };
}

function writeImage(sourcePath, destinationPath) {
  ensureDir(path.dirname(destinationPath));

  if (sourcePath.toLowerCase().endsWith(".png")) {
    execFileSync("sips", ["-s", "format", "jpeg", sourcePath, "--out", destinationPath], {
      cwd: projectRoot,
      stdio: "ignore",
    });
    return;
  }

  fs.copyFileSync(sourcePath, destinationPath);
}

function normalizeLeadingBlocks(storyConfig, blocks) {
  const result = [...blocks];

  const dropIfMatches = (predicate) => {
    while (result.length > 0 && predicate(result[0])) {
      result.shift();
    }
  };

  if (storyConfig.slug === "sumnima-chitwan") {
    dropIfMatches((block) => block.type === "heading" && stripTags(block.html).trim() === "Farmer Story");
    dropIfMatches((block) => block.type === "heading" && stripTags(block.html).trim() === storyConfig.title);
  }

  if (storyConfig.slug === "gender-insights-impact") {
    dropIfMatches((block) => block.type === "heading" && stripTags(block.html).trim() === storyConfig.title);
  }

  if (storyConfig.slug === "dhading-fish-farming") {
    dropIfMatches((block) =>
      block.type === "heading" &&
      stripTags(block.html).includes("Fish Farming in Dhading Is Strengthening Rural Livelihoods"),
    );
    dropIfMatches((block) =>
      block.type === "paragraph" &&
      stripTags(block.html).includes("August 20, 2025"),
    );
  }

  if (storyConfig.slug === "sdg-innovation-award") {
    dropIfMatches((block) => block.type === "heading" && stripTags(block.html).trim() === storyConfig.title);
  }

  while (result.length > 0) {
    const first = result[0];

    if (first.type === "paragraph" && stripTags(first.html).trim().length === 0) {
      result.shift();
      continue;
    }

    break;
  }

  return result;
}

function buildStoryArticle(storyConfig) {
  const sourceDocPath = path.join(legacyStoryDir, storyConfig.sourceFileName);

  if (!fs.existsSync(sourceDocPath)) {
    throw new Error(`Missing source story file: ${storyConfig.sourceFileName}`);
  }

  ensureDir(normalizedStoryDir);

  const normalizedDocPath = path.join(normalizedStoryDir, storyConfig.normalizedDocxName);
  fs.copyFileSync(sourceDocPath, normalizedDocPath);

  const documentXml = readZipEntry(normalizedDocPath, "word/document.xml");
  const relationshipsXml = readZipEntry(normalizedDocPath, "word/_rels/document.xml.rels");
  const relationships = parseRelationships(relationshipsXml);
  const rawBlocks = parseDocumentBlocks(documentXml, relationships);
  const blocks = normalizeLeadingBlocks(storyConfig, rawBlocks);
  const imageTargets = blocks.flatMap((block) => (block.type === "image" ? block.targets : []));

  if (imageTargets.length !== storyConfig.imageAlts.length) {
    throw new Error(
      `Image alt text count mismatch for ${storyConfig.slug}: expected ${imageTargets.length}, got ${storyConfig.imageAlts.length}`,
    );
  }

  const imageDirectory = path.join(storyImageRoot, storyConfig.slug);
  fs.rmSync(imageDirectory, { recursive: true, force: true });
  ensureDir(imageDirectory);

  const imageRecords = imageTargets.map((target, index) => {
    const fileName = index === 0 ? "hero.jpg" : `image-${index}.jpg`;
    const relativePath = `/images/stories/${storyConfig.slug}/${fileName}`;
    const destinationPath = path.join(imageDirectory, fileName);

    execFileSync("unzip", ["-j", normalizedDocPath, `word/${target}`, "-d", imageDirectory], {
      cwd: projectRoot,
      stdio: "ignore",
    });

    const extractedPath = path.join(imageDirectory, path.basename(target));
    writeImage(extractedPath, destinationPath);

    if (extractedPath !== destinationPath && fs.existsSync(extractedPath)) {
      fs.rmSync(extractedPath, { force: true });
    }

    const size = getImageSize(destinationPath);

    return {
      src: relativePath,
      alt: storyConfig.imageAlts[index],
      ...size,
    };
  });

  let imageIndex = 0;
  const normalizedBlocks = blocks.flatMap((block) => {
    if (block.type !== "image") {
      return [block];
    }

    return block.targets.map(() => {
      const image = imageRecords[imageIndex];
      imageIndex += 1;

      return {
        type: "image",
        ...image,
      };
    });
  });

  return {
    slug: storyConfig.slug,
    category: storyConfig.category,
    date: storyConfig.date,
    title: storyConfig.title,
    description: storyConfig.description,
    sourceDoc: `/content/stories/${storyConfig.normalizedDocxName}`,
    blocks: normalizedBlocks,
  };
}

function buildOutputFile(stories) {
  const slugs = stories.map((story) => story.slug);
  const json = JSON.stringify(
    Object.fromEntries(stories.map((story) => [story.slug, story])),
    null,
    2,
  );

  return `// This file is generated by scripts/generate-story-content.mjs

export type StorySlug = ${slugs.map((slug) => `"${slug}"`).join(" | ")};

export type StoryBlock =
  | {
      type: "heading";
      level: 2 | 3;
      html: string;
    }
  | {
      type: "paragraph";
      html: string;
    }
  | {
      type: "list";
      items: ReadonlyArray<string>;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
    };

export type StoryArticle = {
  slug: StorySlug;
  category: string;
  date: string;
  title: string;
  description: string;
  sourceDoc: string;
  blocks: ReadonlyArray<StoryBlock>;
};

export const storyArticles = ${json} as const satisfies Record<StorySlug, StoryArticle>;

export const storyArticleSlugs = Object.keys(storyArticles) as StorySlug[];
`;
}

function main() {
  ensureDir(path.dirname(outputFile));
  ensureDir(normalizedStoryDir);
  ensureDir(storyImageRoot);

  const stories = STORY_CONFIG.map((storyConfig) => buildStoryArticle(storyConfig));
  fs.writeFileSync(outputFile, buildOutputFile(stories));
}

main();
