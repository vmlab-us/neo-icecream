# NEOICECREAM 30-Day SEO Plan

Status: implementation prepared on 2026-07-22. The 12 articles exist as complete static pages. Publishing cadence is editorial: deploy selected pages on the scheduled days or keep all pages live and use the calendar for distribution, review, and improvement. Do not change dates without a meaningful content update.

## Goals and guardrails

- Build helpful category education around better-for-you frozen dessert bars.
- Explain the product direction honestly while it remains in development.
- Create qualified discovery paths for consumers, investors, manufacturers, retailers, and partners.
- Never claim medical, therapeutic, digestive, immune, microbiome, or guaranteed culture benefits.
- Never state final nutrition values, retail availability, launch dates, or culture counts until validated.

## Keyword clusters

| Cluster | Primary topics | Search intent | Destination |
| --- | --- | --- | --- |
| Category | frozen dessert vs ice cream, frozen dairy dessert, ice cream alternative | Education | Articles 1 and 8 |
| Better-for-you | better-for-you frozen dessert, low-fat frozen dessert, lower-calorie frozen dessert, lighter indulgence | Education/comparison | Articles 2, 3, and 7 |
| Format and flavor | frozen dessert bars, frozen dessert flavor development | Product discovery | Articles 4 and 12 |
| Food science | live cultures frozen dessert, synbiotic-inspired frozen dessert, food science frozen dessert | Education | Articles 5, 6, and 9 |
| Startup and production | better-for-you food startup California, pilot production frozen dessert, frozen dessert manufacturing partner | B2B | Articles 10 and 11 |

## 30-day calendar

| Day | Work and deliverable |
| --- | --- |
| 1 | Run `node scripts/validate-seo.mjs`; audit builds, headings, titles, descriptions, canonicals, robots, images, and console output. |
| 2 | Review metadata and internal links on Home, Product, Flavors, FAQ, and Contact. |
| 3 | QA `/insights/` index, intro copy, cards, mobile wrapping, and navigation. |
| 4 | Review `content/article-template.md`, Article schema, and editorial approval process. |
| 5 | Confirm the internal-link map below on the five core pages. |
| 6 | Publish/promote Article 1: Frozen Dessert vs. Ice Cream. |
| 7 | Publish/promote Article 2: What Is a Better-for-You Frozen Dessert? |
| 8 | Publish/promote Article 3: Low-Fat Frozen Dessert Explained. |
| 9 | Review links, impressions, indexing status, and reader questions for Articles 1–3. |
| 10 | Publish/promote Article 4: Why Frozen Dessert Bars Are a Strong First Format. |
| 11 | Publish/promote Article 5: What Does Synbiotic-Inspired Frozen Dessert Mean? |
| 12 | Publish/promote Article 6: Live Cultures in Frozen Dessert. |
| 13 | Run the generator and validator; submit or re-check `sitemap.xml` in Search Console. |
| 14 | Add FAQ sections only where Search Console queries or real reader questions justify them. |
| 15 | Publish/promote Article 7: Why Lower-Calorie Frozen Desserts Are Getting More Attention. |
| 16 | Publish/promote Article 8: What Makes a Good Ice Cream Alternative? |
| 17 | Publish/promote Article 9: How Food Science Shapes Modern Frozen Desserts. |
| 18 | Check unique titles, descriptions, canonical URLs, OG previews, and structured data. |
| 19 | Audit descriptive alt text and add `loading="lazy"` to below-the-fold images where appropriate. |
| 20 | Publish/promote Article 10: Building a Better-for-You Frozen Dessert Startup in California. |
| 21 | Publish/promote Article 11: Why Pilot Production Matters for a Frozen Dessert Brand. |
| 22 | Publish/promote Article 12: Flavor Development for Better-for-You Frozen Dessert Bars. |
| 23 | Review related-article links and add links from articles receiving impressions to the most useful next page. |
| 24 | Validate FAQPage schema on `/faq/`; keep it only while the same Q&A is visible to users. |
| 25 | Validate Organization and WebSite schema on Home and Article/Breadcrumb schema on all Insights. |
| 26 | Run local server, link checker, `scripts/validate-seo.mjs`, and browser console review. |
| 27 | Manually test 320 px, 390 px, tablet, and desktop layouts; check keyboard navigation. |
| 28 | Verify both sitemaps, `robots.txt`, status codes, no accidental `noindex`, and canonical targets. |
| 29 | Record indexed pages, impressions, clicks, top queries, crawl issues, and conversions in the final SEO report. |
| 30 | Choose the next topics from real query data and the recommendations below. |

## Article and metadata inventory

The machine-readable inventory is `content/seo-articles.json`. Each entry includes title, slug, description, category, keywords, canonical, and date. The 12 complete pages are:

1. `/insights/frozen-dessert-vs-ice-cream/`
2. `/insights/what-is-better-for-you-frozen-dessert/`
3. `/insights/low-fat-frozen-dessert-explained/`
4. `/insights/frozen-dessert-bars/`
5. `/insights/synbiotic-inspired-frozen-dessert/`
6. `/insights/live-cultures-in-frozen-dessert/`
7. `/insights/lower-calorie-frozen-dessert/`
8. `/insights/ice-cream-alternative/`
9. `/insights/food-science-frozen-dessert/`
10. `/insights/better-for-you-food-startup-california/`
11. `/insights/pilot-production-frozen-dessert/`
12. `/insights/frozen-dessert-flavor-development/`

## Internal linking map

| Source | Required destinations and natural anchors |
| --- | --- |
| Home | Product (“explore the product concept”), Flavors (“see the flavor directions”), FAQ (“read the FAQ”), Contact, Insights |
| Product | Flavors, FAQ, Contact, Insights about bars, formulation, and food science |
| Flavors | Product, FAQ, Insights about flavor development and lighter indulgence |
| FAQ | Product, Flavors, Contact, relevant category and live-culture Insights |
| Contact | Product, FAQ, Insights about pilot production and the California startup path |
| Every article | Product, FAQ where relevant, and two related articles; Contact only for B2B/manufacturing context |

The global header/footer now exposes Insights from every canonical core page. Article-specific links are generated from the content configuration.

## Technical implementation

- `scripts/build-seo.mjs` generates all 12 pages, the Insights index, both sitemaps, and the metadata manifest.
- `scripts/validate-seo.mjs` checks one H1, title, description, canonical, social metadata, canonical uniqueness, sitemap inclusion, and prohibited claims on canonical route pages.
- `content/article-template.md` is the reusable editorial template.
- Each article contains Article and BreadcrumbList JSON-LD, canonical, OG tags, Twitter card tags, internal links, and explicit product-stage language.
- Two old thin Insight URLs remain as `noindex, follow` compatibility pages that point to the complete replacement article.

Run from the repository root:

```bash
node scripts/build-seo.mjs
node scripts/validate-seo.mjs
python3 -m http.server 8000
```

Then review `http://localhost:8000/` and the Insights pages in a browser. Re-run the generator after editing the article configuration inside `scripts/build-seo.mjs`.

## Final QA checklist

- [ ] All canonical routes return 200 and no internal link returns 4xx/5xx.
- [ ] Exactly one visible H1 per canonical page.
- [ ] Unique titles, meta descriptions, and canonical URLs.
- [ ] OG title/description/image and Twitter card render correctly.
- [ ] `sitemap.xml` contains every canonical public page and only real URLs.
- [ ] `robots.txt` permits crawling and declares both sitemaps.
- [ ] No accidental `noindex` except the two documented compatibility URLs.
- [ ] FAQPage, Organization, WebSite, Article, and Breadcrumb schema validate and match visible content.
- [ ] Images have useful alt text; decorative images have empty alt; below-fold images are lazy-loaded where appropriate.
- [ ] Mobile header, cards, article typography, footer, and forms remain usable.
- [ ] No browser console errors or mixed content.
- [ ] No unsupported availability, nutrition, launch, or market claims.
- [ ] No fake statistics, keyword stuffing, or changed dates without substantive updates.

## Prohibited-claims review

Before deployment, search case-insensitively for medical/therapeutic claims and promises involving gut health, digestion, immunity, disease, microbiome improvement, clinical probiotic benefits, and guaranteed culture counts. The validator covers the supplied phrase list, but editorial review must also catch close paraphrases. Safe framing includes “with live cultures,” “synbiotic-inspired,” “formulation direction,” “being developed,” “lighter indulgence,” and “no medical or therapeutic claims.”

## Next 30-day ideas

Prioritize these only after Search Console data identifies demand:

1. A sourced guide to reading frozen dessert labels and serving information.
2. A packaging and cold-chain explainer for frozen dessert bars.
3. A manufacturer-readiness checklist for emerging frozen brands.
4. A sensory-testing guide covering texture, melt, sweetness, and flavor clarity.
5. Individual flavor stories only when each page can add original formulation or consumer insight.
6. An updated FAQ based on real queries and partner questions.
7. Original founder/process photography and author/reviewer information to strengthen trust.
8. Search Console-based title/description improvements after enough impression data accumulates.

## Reporting template

At Day 29 record: deployed URLs, indexed URLs, pages excluded and why, impressions, clicks, CTR, average position, query/page winners, crawl or schema errors, leads from organic sessions, content changes made, and the next three evidence-based priorities. Avoid drawing conclusions from very small samples.
