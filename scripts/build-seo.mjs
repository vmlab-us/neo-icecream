import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const site = 'https://neo-icecream.com';
const published = '2026-07-22';
const imageBySlug = ['vanilla','mango','pistachio','raspberry','chocolate','strawberry'];

const articles = [
  {
    slug:'frozen-dessert-vs-ice-cream', category:'Category education',
    title:'Frozen Dessert vs. Ice Cream: What’s the Difference?',
    description:'Learn the difference between frozen dessert and traditional ice cream, including formulation, milkfat, positioning, and why NEOICECREAM uses frozen dessert language.',
    keywords:['frozen dessert vs ice cream','frozen dairy dessert','ice cream alternative','low-fat frozen dessert'],
    intro:'“Frozen dessert” and “ice cream” may look similar in a freezer, but the words are not interchangeable. They can reflect different formulation choices, standards of identity, and ways of explaining a product to shoppers.',
    sections:[
      ['The short answer','Ice cream is a familiar product name with a specific regulatory meaning in the United States. Frozen dessert is a broader consumer-facing description used for products that do not fit—or are not presented under—the traditional ice cream standard. The exact legal name for any commercial package depends on its final formula, ingredients, manufacturing process, and labeling review.'],
      ['Why milkfat and formulation matter','Traditional ice cream is built around defined compositional requirements, including milkfat and total milk solids. A frozen dairy dessert can use a different balance of dairy ingredients, fat, sweeteners, stabilizing ingredients, air, and water. Those decisions change how the product freezes, melts, and feels on the spoon or in a bar. Lower fat is therefore not simply a subtraction exercise: the whole formula has to work together.'],
      ['Does frozen dessert mean dairy-free?','No. “Frozen dessert” does not automatically mean vegan, non-dairy, low-calorie, or better-for-you. It describes a broad category. Shoppers should read the product name, ingredient statement, allergen declaration, and Nutrition Facts panel on the finished package rather than infer details from one phrase.'],
      ['Why NEOICECREAM uses frozen dessert language','NEOICECREAM is being developed with a low-fat, lower-calorie direction and a primary bar format. The brand therefore leads with frozen dessert language instead of presenting the concept as traditional high-fat ice cream. This keeps the public story aligned with the current product direction while final commercial labeling remains subject to validation and review.'],
      ['What matters to the eating experience','Category language matters, but a frozen treat still has to deliver. Flavor clarity, sweetness, creaminess, bite, melt behavior, and portion size shape whether a consumer wants it again. NEOICECREAM treats formulation as the supporting system and dessert enjoyment as the main experience.']
    ], links:[['/product/','explore the product concept'],['/faq/','read the FAQ'],['/flavors/','see the flavor directions']]
  },
  {
    slug:'what-is-better-for-you-frozen-dessert', category:'Better-for-you',
    title:'What Is a Better-for-You Frozen Dessert?',
    description:'A simple explanation of better-for-you frozen dessert and how NEOICECREAM approaches lighter indulgence, low-fat formulation, and modern frozen treat expectations.',
    keywords:['better-for-you frozen dessert','lighter indulgence','low-fat frozen dessert','lower-calorie frozen dessert'],
    intro:'Better-for-you is a positioning idea, not a medical promise. In frozen desserts, it usually describes a more deliberate set of choices around formulation, portion, and the role a treat plays in everyday life.',
    sections:[
      ['A practical definition','A better-for-you frozen dessert should give people a clear reason for choosing it while remaining recognizably dessert. That reason might involve a lower-fat direction, calorie-conscious portions, familiar ingredients, or another carefully explained product attribute. The phrase only becomes useful when the finished label gives shoppers specific, verifiable information.'],
      ['Dessert still comes first','A lighter product that disappoints on flavor or texture is unlikely to become a repeat purchase. Better-for-you development therefore begins with the eating experience: recognizable flavor, balanced sweetness, a pleasing frozen bite, and a satisfying finish. Nutrition direction and product enjoyment have to be developed together.'],
      ['What the phrase does not mean','Better-for-you does not mean therapeutic, clinically proven, or appropriate for every diet. It does not imply that a dessert treats a condition or produces guaranteed health outcomes. Consumers still need to consider serving size, ingredients, allergens, and their individual needs.'],
      ['The NEOICECREAM approach','NEOICECREAM is being developed as a frozen dessert bar with a low-fat and lower-calorie direction, live cultures, and synbiotic-inspired formulation logic. Those elements describe a development path. Final nutrition values, culture details, claims, and package language depend on production validation and regulatory review.'],
      ['How to evaluate a product','Look for clear serving information, specific nutrient values, understandable claims, and language that matches the evidence. A responsible brand should separate a product concept from verified facts and should never rely on vague wellness language in place of a transparent label.']
    ], links:[['/','visit NEOICECREAM'],['/product/','explore the product concept'],['/faq/','read the FAQ']]
  },
  {
    slug:'low-fat-frozen-dessert-explained', category:'Formulation', title:'Low-Fat Frozen Dessert Explained',
    description:'Learn what low-fat frozen dessert means, why fat level matters in frozen desserts, and how NEOICECREAM approaches lighter indulgence.',
    keywords:['low-fat frozen dessert','lower-calorie frozen dessert','better-for-you frozen dessert','frozen dessert bars'],
    intro:'Fat helps create richness, body, and a slower melt in many frozen desserts. Developing a lower-fat option means rebuilding that experience through the complete formulation rather than merely removing one ingredient.',
    sections:[
      ['What “low-fat” should communicate','In the United States, nutrient-content claims are regulated and must be supported by the finished product and serving size. Until a commercial formula is validated, “low-fat” is best understood here as a development direction—not a final Nutrition Facts statement or package claim.'],
      ['Why fat changes texture','Fat influences lubrication, flavor release, structure, and the perception of creaminess. Reducing it can make a frozen product feel harder, icier, thinner, or quicker to melt. Recipe balance, processing, freezing rate, and storage conditions all become important tools for restoring a satisfying experience.'],
      ['Lower fat and calories are related, not identical','Fat is energy-dense, so changing fat levels can affect calories. But total calories also depend on sugars, proteins, other carbohydrates, serving weight, and every ingredient in the formula. A lower-fat direction should not be treated as proof of a particular calorie result.'],
      ['Why the bar format helps','A bar provides a defined unit and a consistent consumer experience. It can make portion size easier to understand and lets developers tune the coating, body, bite, and melt for one format. Final serving and nutrition information still need to come from the validated commercial product.'],
      ['NEOICECREAM’s development language','NEOICECREAM is being developed toward lighter indulgence with taste at the center. Public wording uses “direction,” “concept,” and “being developed” because formulation, pilot production, shelf-life work, and labeling review still determine the final product facts.']
    ], links:[['/product/','explore the product concept'],['/faq/','read the FAQ']]
  },
  {
    slug:'frozen-dessert-bars', category:'Format', title:'Why Frozen Dessert Bars Are a Strong First Format',
    description:'NEOICECREAM is focused on frozen dessert bars because they offer convenience, portion control, freezer compatibility, and a clear consumer experience.',
    keywords:['frozen dessert bars','better-for-you frozen dessert bars','frozen treat bars','modern frozen dessert'],
    intro:'A new frozen dessert needs a format that consumers understand immediately and that a production partner can make consistently. Bars create that clarity from the first glance.',
    sections:[
      ['A clear portion','Each bar is a defined unit. That makes the serving experience more predictable than scooping from a tub and gives shoppers an intuitive way to understand the product. Exact serving weight and nutrition values still depend on the final commercial specification.'],
      ['Convenience from freezer to first bite','Bars need no bowl or scoop and can work for an individual occasion. The wrapper can protect the product and carry essential labeling, while a multipack can provide the larger retail story. Packaging choices must also account for seals, moisture, temperature changes, and physical damage.'],
      ['Strong flavor identity','One bar can communicate one flavor clearly. Vanilla, mango, pistachio, raspberry, chocolate, and strawberry each have an immediate visual and sensory role in the NEOICECREAM line. A disciplined flavor set is easier for consumers and production teams to understand.'],
      ['Retail freezer compatibility','The format can be planned for common novelty sections and straightforward shelf organization. Commercial success still depends on case dimensions, pack count, merchandising, cold-chain performance, and retailer requirements—not format alone.'],
      ['A practical scale-up path','A bar creates concrete questions for pilot production: deposit weight, stick placement, freezing time, release, coating or finish, wrapping, and line speed. Resolving those questions early helps turn a kitchen concept into a repeatable manufacturing brief.']
    ], links:[['/product/','explore the frozen dessert bar concept'],['/flavors/','see the flavor directions'],['/contact/','start a strategic conversation']]
  },
  {
    slug:'synbiotic-inspired-frozen-dessert', category:'Food science', title:'What Does Synbiotic-Inspired Frozen Dessert Mean?',
    description:'Learn what synbiotic-inspired means in the context of NEOICECREAM, live cultures, food science logic, and frozen dessert formulation without medical claims.',
    keywords:['synbiotic-inspired frozen dessert','synbiotic frozen dessert','live cultures frozen dessert','food science'],
    intro:'For NEOICECREAM, “synbiotic-inspired” describes a formulation idea. It does not turn dessert into medicine and it does not promise a health outcome.',
    sections:[
      ['The concept in plain language','In food science, synbiotic discussions generally bring together live microorganisms and substrates used by microorganisms. “Inspired” is the key word for this developing dessert concept: it signals a design reference rather than a validated therapeutic or clinical claim.'],
      ['A supporting formulation layer','The consumer experience begins with flavor, texture, and a convenient bar. Live cultures and related ingredient logic sit behind that experience as a supporting layer. They should not overwhelm the simple truth that the product is intended to be enjoyed as frozen dessert.'],
      ['Why freezing and processing matter','Culture selection alone does not establish what remains in a finished product. Mixing, temperature, oxygen exposure, freezing, storage time, and distribution conditions can all matter. Production trials and suitable testing are necessary before quantitative statements can be made.'],
      ['What NEOICECREAM does not claim','The concept is not presented as treating digestion, improving the microbiome, supporting immunity, curing disease, or providing guaranteed culture counts. Those claims would require evidence and regulatory analysis that a general development story cannot substitute for.'],
      ['What final communication requires','A commercial package needs an accurate ingredient list, allergen information, Nutrition Facts, product naming, and only those claims that are supported. NEOICECREAM will need final formulation validation and regulatory review before moving from development language to package-specific facts.']
    ], links:[['/product/','explore the product concept'],['/faq/','read the FAQ']]
  },
  {
    slug:'live-cultures-in-frozen-dessert', category:'Food science', title:'Live Cultures in Frozen Dessert: A Simple Explanation',
    description:'Learn how live cultures fit into the NEOICECREAM frozen dessert concept and why formulation, freezing, and validation matter.',
    keywords:['live cultures frozen dessert','frozen dessert with live cultures','synbiotic-inspired','functional frozen dessert'],
    intro:'Live cultures can be part of a frozen dessert formula, but their presence raises practical questions about ingredients, processing, storage, measurement, and responsible communication.',
    sections:[
      ['What “live cultures” means here','The phrase refers generally to selected microorganisms incorporated into the product direction. It does not by itself state a quantity, survival level at the end of shelf life, or health effect. Those are separate questions that require specifications and evidence.'],
      ['The frozen environment','Freezing slows biological activity and can stress cells. Results can vary by strain, formula, freezing profile, storage temperature, and time. A culture that is present when mixed may not remain at the same level through production and distribution.'],
      ['Formulation is a complete system','Acidity, water, sugars, proteins, fat, solids, and other ingredients affect both dessert quality and the environment around cultures. Developers also need to protect texture, flavor, food safety, and manufacturability. No single ingredient can be evaluated in isolation.'],
      ['Validation before numbers','Any statement about counts or stability should be tied to defined methods, production samples, storage conditions, and a specific point in shelf life. NEOICECREAM does not publish guaranteed culture counts because final product validation has not been completed.'],
      ['Dessert-first communication','Consumers should be able to understand the product without decoding a science lecture. NEOICECREAM leads with a taste-led frozen dessert bar and describes live cultures carefully as part of the development direction, without medical or therapeutic claims.']
    ], links:[['/product/','explore the product concept'],['/faq/','read answers about live cultures']]
  },
  {
    slug:'lower-calorie-frozen-dessert', category:'Consumer perspective', title:'Why Lower-Calorie Frozen Desserts Are Getting More Attention',
    description:'Consumers still want dessert, but many are looking for lighter frozen options. Learn how lower-calorie frozen dessert fits modern eating habits.',
    keywords:['lower-calorie frozen dessert','low-calorie frozen dessert','lighter indulgence','ice cream alternative'],
    intro:'Many people want dessert to remain enjoyable while fitting more comfortably into an ordinary day. That creates room for frozen options built around lighter portions and thoughtful formulation.',
    sections:[
      ['The appeal of everyday flexibility','A calorie-conscious dessert can offer a different occasion from a large, rich serving. The goal is not to label indulgence as bad; it is to give shoppers another clearly explained option when they want something lighter.'],
      ['Portion and formulation work together','Calories per serving depend on both the formula and the amount eaten. A bar establishes a unit, while ingredient choices shape its energy, taste, and texture. Responsible comparison requires the final serving weight and verified Nutrition Facts—not assumptions from appearance.'],
      ['Lower-calorie should still taste like dessert','Consumers notice flavor balance, creaminess, bite, aftertaste, and melt before they analyze a positioning statement. Product development must protect those sensory qualities or the nutritional direction will not create a compelling repeat experience.'],
      ['No universal definition of “better”','A product can be a useful alternative for one shopper and irrelevant to another. Allergens, dietary preferences, ingredients, serving size, and personal goals differ. Clear labels help people decide; broad promises do not.'],
      ['Where NEOICECREAM fits','NEOICECREAM is being developed in a lower-calorie and low-fat direction with bars as the lead format. The language remains directional until a commercial formula, serving size, process, and label have been validated.']
    ], links:[['/product/','explore the product direction'],['/flavors/','see the flavor directions']]
  },
  {
    slug:'ice-cream-alternative', category:'Category education', title:'What Makes a Good Ice Cream Alternative?',
    description:'A good ice cream alternative should still feel like dessert. Learn how taste, texture, portion size, and formulation shape modern frozen dessert concepts.',
    keywords:['ice cream alternative','frozen dessert alternative','better-for-you frozen dessert','low-fat frozen dessert'],
    intro:'The best alternative is not defined by what it removes. It earns a place in the freezer by offering a clear, enjoyable experience of its own.',
    sections:[
      ['Taste must lead','A product may have an appealing nutrition story, but dessert begins with flavor. Familiar profiles make a new format easier to understand, while balanced sweetness and a clean finish help it feel intentional rather than compromised.'],
      ['Texture creates credibility','Creaminess, iciness, density, bite, and melt are all part of the promise. A lower-fat formulation may need a different balance of solids, sweeteners, stabilizing ingredients, processing, and freezing to produce the desired texture.'],
      ['The format should make sense','A bar offers a clear portion and a simple use occasion. It also demands consistency: each unit should release, hold, wrap, ship, and survive normal freezer handling. Good design connects the consumer experience to manufacturing reality.'],
      ['Clear language beats diet punishment','An alternative should not frame dessert as a failure or suggest that enjoyment requires a penalty. NEOICECREAM uses “lighter indulgence” to describe direction while keeping taste and familiar flavors at the center. It is not positioned as a medical or therapeutic product.'],
      ['Evidence belongs on the final label','Specific claims require a validated formula and appropriate review. Until then, development language should remain honest about what is planned, what is being tested, and what has not yet been confirmed.']
    ], links:[['/product/','explore the product concept'],['/flavors/','see the flavor directions'],['/faq/','read the FAQ']]
  },
  {
    slug:'food-science-frozen-dessert', category:'Food science', title:'How Food Science Shapes Modern Frozen Desserts',
    description:'Modern frozen desserts depend on formulation, texture, freezing behavior, flavor balance, and consumer expectations. Learn how NEOICECREAM thinks about product development.',
    keywords:['food science frozen dessert','frozen dessert formulation','modern frozen dessert','synbiotic-inspired formulation'],
    intro:'A frozen dessert is a system: ingredients, air, ice, temperature, process, packaging, and time interact to create the product a consumer actually experiences.',
    sections:[
      ['Managing ice','Ice crystal size strongly affects smoothness. Mix composition, freezing speed, agitation, hardening, temperature stability, and storage time all influence crystal growth. A good formula can still suffer if the cold chain is inconsistent.'],
      ['Building body and texture','Fat, proteins, sugars, other solids, stabilizing ingredients, and air contribute in different ways. Reducing one component changes the job expected of the others. Development is an exercise in balance, not a search for a single magic ingredient.'],
      ['Balancing sweetness and freezing','Sweeteners affect taste and the temperature at which water freezes. Too little or too much can change hardness and melt. Developers must consider sensory goals and physical behavior together, then confirm performance on the intended equipment.'],
      ['Adding live cultures carefully','Culture choice has to be considered alongside mixing, acidity, oxygen, freezing, storage, and measurement. The presence of cultures does not establish a benefit or guarantee a count. Those questions require product-specific validation.'],
      ['Designing for the bar format','Bars add geometry, stick placement, demolding or release, possible coatings, wrapping, and handling to the formulation problem. Pilot work connects bench samples to equipment constraints and commercial repeatability.'],
      ['From concept to responsible claim','Final ingredient declarations, Nutrition Facts, product names, and voluntary claims must match the commercial formula. NEOICECREAM describes its current work as a product direction while those facts are developed and reviewed.']
    ], links:[['/product/','explore the product concept'],['/faq/','read the FAQ'],['/contact/','contact NEOICECREAM about development']]
  },
  {
    slug:'better-for-you-food-startup-california', category:'Company building', title:'Building a Better-for-You Frozen Dessert Startup in California',
    description:'NEOICECREAM is developing a better-for-you frozen dessert bar concept with a California launch focus, pilot production planning, and strategic partnership opportunities.',
    keywords:['better-for-you food startup California','frozen dessert startup','California frozen dessert startup','food innovation startup'],
    intro:'Building a food brand means turning a promising product direction into a validated formula, repeatable process, compliant package, workable economics, and credible route to market.',
    sections:[
      ['Starting with a focused proposition','NEOICECREAM is developing a better-for-you frozen dessert bar concept built around lighter indulgence, familiar flavors, live cultures, and synbiotic-inspired formulation logic. The bar is the lead format so development and commercial conversations begin with a concrete product.'],
      ['Why a California focus can be useful','A defined geographic focus helps a startup narrow retailer research, distributor conversations, sampling, logistics, and launch planning. California is a key launch area in the current strategy, but no retail availability or launch date is confirmed.'],
      ['The pilot-production bridge','Pilot runs test whether the formula and process work beyond the bench. They can expose questions about ingredient handling, freezing, line compatibility, unit weight, wrapping, yields, quality checks, and storage that must be resolved before commercial scale.'],
      ['Partners need clear evidence','Manufacturers, investors, retailers, and distributors evaluate different risks. Useful conversations require an honest development stage, product specification, testing plan, cost assumptions, packaging direction, capacity needs, and a clear list of decisions still open.'],
      ['Careful communication builds trust','A startup should not present directional nutrition targets as final facts or imply confirmed retail placement. NEOICECREAM uses development language until formulation, claims, production, and commercial arrangements are validated.'],
      ['The next practical milestones','Near-term work includes pilot planning, formula and process validation, package development, shelf-life work, regulatory review, and qualified strategic conversations. Each milestone should reduce a specific technical or commercial uncertainty.']
    ], links:[['/','visit NEOICECREAM'],['/contact/','start a strategic conversation'],['/product/','explore the product concept']]
  },
  {
    slug:'pilot-production-frozen-dessert', category:'Manufacturing', title:'Why Pilot Production Matters for a Frozen Dessert Brand',
    description:'Pilot production helps validate formulation, process, packaging, and commercial readiness for frozen dessert brands like NEOICECREAM.',
    keywords:['pilot production frozen dessert','frozen dessert manufacturing','product validation','food startup pilot production'],
    intro:'Pilot production is the controlled step between promising development samples and a repeatable commercial process. It turns assumptions into observations and a concept into a more useful manufacturing brief.',
    sections:[
      ['Bench success is not line success','Equipment introduces different mixing forces, hold times, temperatures, freezing rates, and transfer steps. A formula that works in a small batch can change when made on pilot equipment. The goal is to understand those changes before a full commercial commitment.'],
      ['Validating the process','A pilot run can define ingredient order, hydration, pasteurization or other heat treatment where applicable, cooling, culture addition, freezing, forming, hardening, and packaging. The exact process depends on the final formula and qualified facility.'],
      ['Testing bar execution','For bars, teams can evaluate deposit or fill weight, stick position, release, breakage, surface finish, coatings if used, wrapper seals, and throughput. These details affect quality, cost, and whether the product can be made consistently.'],
      ['Learning about shelf life','Samples from representative runs support sensory, physical, microbiological, packaging, and temperature-abuse evaluation. Shelf-life decisions should rely on an appropriate study plan rather than a guess based on category norms.'],
      ['Improving commercial readiness','Pilot data helps refine yields, labor, losses, ingredient needs, case configuration, storage, and shipping assumptions. It also gives manufacturing partners a clearer basis for discussing capabilities, minimum runs, costs, and open risks.'],
      ['What it means for NEOICECREAM','NEOICECREAM is preparing for a pilot-production pathway; this is not a statement that commercial production or retail launch is confirmed. Strategic manufacturing conversations should focus on fit, validation needs, and the next evidence-producing run.']
    ], links:[['/contact/','start a manufacturing conversation'],['/product/','explore the product concept'],['/faq/','read the FAQ']]
  },
  {
    slug:'frozen-dessert-flavor-development', category:'Flavor', title:'Flavor Development for Better-for-You Frozen Dessert Bars',
    description:'Flavor development helps make better-for-you frozen dessert bars feel familiar, enjoyable, and easy to understand. Learn how NEOICECREAM presents its flavor directions.',
    keywords:['frozen dessert flavor development','frozen dessert flavors','frozen dessert bars','better-for-you frozen dessert'],
    intro:'Flavor is where a technical product direction becomes an experience. A focused line should feel varied enough to invite discovery while remaining simple enough to formulate, produce, and explain.',
    sections:[
      ['Start with recognizable choices','Familiar names reduce the effort required to understand a new brand. Vanilla and chocolate provide classic anchors; strawberry and raspberry offer berry-led directions; mango brings a tropical profile; and pistachio adds a distinctive, premium cue.'],
      ['Flavor and base must be developed together','The same flavor can behave differently as fat, sweetness, acidity, solids, and serving temperature change. Lower-fat development may alter aroma release, richness, and finish. Each flavor therefore needs work in the intended base rather than being treated as a simple add-on.'],
      ['Color and expectation should align','Visual cues shape what consumers expect before the first bite. The product, imagery, name, and package should tell a coherent story without implying ingredients or attributes the final formula does not contain.'],
      ['A six-flavor direction creates useful range','The current NEOICECREAM set—Vanilla, Mango, Pistachio, Raspberry, Chocolate, and Strawberry—covers classic, fruit, and more distinctive profiles. These are development directions, and final commercial flavors may change through testing and production work.'],
      ['Pilot work answers practical questions','Flavor systems can affect viscosity, freezing, color stability, acidity, texture, allergen controls, ingredient sourcing, and line cleaning. Pilot runs help the team evaluate sensory quality and manufacturing needs in the same product.'],
      ['Keep the promise simple','The flavor should be the first reason to pick up the bar. Better-for-you and synbiotic-inspired ideas can support the story, but they should never replace a clear expectation of enjoyable dessert.']
    ], links:[['/flavors/','see the flavor directions'],['/product/','explore the product concept'],['/faq/','read the FAQ']]
  }
];

const header = `<header class="site-header"><div class="container header-inner"><a class="brand" href="/" aria-label="NEOICECREAM home"><img class="brand-wordmark" src="/assets/logo/NEOICECREAM_horizontal_logo_black_transparent.png?v=20260521-7" alt="NEOICECREAM logo"></a><nav class="main-nav" aria-label="Main navigation"><a href="/product/">Product</a><a href="/flavors/">Flavors</a><a href="/insights/">Insights</a><a href="/faq/">FAQ</a><a href="/contact/" class="nav-cta">Strategic Conversations</a></nav></div></header>`;
const footer = `<footer class="site-footer"><div class="container footer-grid"><div><img class="footer-wordmark" src="/assets/logo/NEOICECREAM_horizontal_logo_white_transparent.png?v=20260521-7" alt="NEOICECREAM logo"><p>Better-for-you frozen dessert with a primary bar format.</p></div><div><h3>Navigation</h3><a href="/">Home</a><a href="/product/">Product</a><a href="/flavors/">Flavors</a><a href="/insights/">Insights</a><a href="/faq/">FAQ</a><a href="/contact/">Strategic Conversations</a></div><div><h3>Contact</h3><a href="mailto:vm@neo-icecream.com">vm@neo-icecream.com</a></div></div></footer>`;
const esc = value => value.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');

function schema(article, url, image) {
  return JSON.stringify({'@context':'https://schema.org','@graph':[
    {'@type':'Article','@id':`${url}#article`,headline:article.title,description:article.description,datePublished:published,dateModified:published,mainEntityOfPage:url,image,author:{'@type':'Organization','@id':`${site}/#organization`},publisher:{'@type':'Organization','@id':`${site}/#organization`,name:'NEOICECREAM'}},
    {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:`${site}/`},{'@type':'ListItem',position:2,name:'Insights',item:`${site}/insights/`},{'@type':'ListItem',position:3,name:article.title,item:url}]}
  ]}).replaceAll('<','\\u003c');
}

function page(article, index) {
  const url = `${site}/insights/${article.slug}/`;
  const imageName = imageBySlug[index % imageBySlug.length];
  const image = `${site}/assets/products/${imageName}.png`;
  const related = [articles[(index + 1) % articles.length], articles[(index + 2) % articles.length]];
  const body = article.sections.map(([heading,text]) => `<h2>${heading}</h2>\n<p>${text}</p>`).join('\n');
  const links = article.links.map(([href,label]) => `<a href="${href}">${label}</a>`).join(', ');
  const relatedLinks = related.map(a => `<li><a href="/insights/${a.slug}/">${a.title}</a></li>`).join('');
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${article.title} | NEOICECREAM</title><meta name="description" content="${esc(article.description)}"><meta name="keywords" content="${article.keywords.join(', ')}"><link rel="canonical" href="${url}"><meta name="robots" content="index, follow">
<meta property="og:title" content="${esc(article.title)}"><meta property="og:description" content="${esc(article.description)}"><meta property="og:type" content="article"><meta property="og:url" content="${url}"><meta property="og:image" content="${image}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(article.title)}"><meta name="twitter:description" content="${esc(article.description)}"><meta name="twitter:image" content="${image}">
<link rel="icon" type="image/png" href="/assets/logo/neoicecream-icon.png?v=20260521-8"><link rel="stylesheet" href="/styles.css?v=20260722-1"><script type="application/ld+json">${schema(article,url,image)}</script></head><body>
${header}<main><section class="page-hero"><div class="container page-hero-grid"><div><p class="eyebrow">${article.category.toUpperCase()}</p><h1>${article.title}</h1><p class="page-lead">${article.intro}</p><p class="article-byline"><time datetime="${published}">Published July 22, 2026</time> · NEOICECREAM Insights</p></div><div class="page-hero-card"><img src="/assets/products/${imageName}.png" alt="${imageName[0].toUpperCase()+imageName.slice(1)} NEOICECREAM frozen dessert bar"></div></div></section>
<section class="section"><article class="container article-shell"><p class="article-intro">${article.intro}</p>${body}<h2>Where to go next</h2><p>To understand how this thinking fits the developing brand, ${links}.</p><aside class="article-note" aria-labelledby="responsible-language"><h2 id="responsible-language">A note on product-stage language</h2><p>NEOICECREAM is a frozen dessert concept in development. Final formulation, nutrition values, culture details, claims, availability, and commercial timing depend on validation, production, and regulatory review. No medical or therapeutic claims are made.</p></aside><section class="related-articles" aria-labelledby="related-heading"><h2 id="related-heading">Related Insights</h2><ul>${relatedLinks}</ul></section></article></section></main>${footer}</body></html>`;
}

articles.forEach((article,index) => {
  const dir = path.join(root,'insights',article.slug);
  fs.mkdirSync(dir,{recursive:true});
  fs.writeFileSync(path.join(dir,'index.html'),page(article,index));
});

// Preserve two previously published URLs without maintaining thin, competing articles.
const legacy = [
  ['better-for-you-frozen-dessert','what-is-better-for-you-frozen-dessert','What Is a Better-for-You Frozen Dessert?'],
  ['frozen-dessert-bar-format','frozen-dessert-bars','Why Frozen Dessert Bars Are a Strong First Format']
];
for (const [oldSlug,newSlug,title] of legacy) {
  const dir=path.join(root,'insights',oldSlug);
  fs.mkdirSync(dir,{recursive:true});
  fs.writeFileSync(path.join(dir,'index.html'),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title} | NEOICECREAM</title><meta name="description" content="This NEOICECREAM Insight has moved to its complete, updated article."><meta name="robots" content="noindex, follow"><link rel="canonical" href="${site}/insights/${newSlug}/"><meta http-equiv="refresh" content="0; url=/insights/${newSlug}/"><meta property="og:title" content="${title}"><meta property="og:description" content="Read the complete, updated NEOICECREAM Insight."><meta name="twitter:card" content="summary"><link rel="stylesheet" href="/styles.css?v=20260722-1"></head><body>${header}<main><section class="section"><article class="container article-shell"><h1>${title}</h1><p>This article has moved to a more complete resource.</p><p><a href="/insights/${newSlug}/">Read the updated article</a>.</p></article></section></main>${footer}</body></html>`);
}

const cards = articles.map(a => `<a class="insight-card" href="/insights/${a.slug}/"><span class="insight-meta">${a.category}</span><h2>${a.title}</h2><p>${a.description}</p></a>`).join('\n');
const indexHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Insights | NEOICECREAM</title><meta name="description" content="Insights from NEOICECREAM on better-for-you frozen desserts, frozen dessert bars, live cultures, lighter indulgence, and synbiotic-inspired food science."><link rel="canonical" href="${site}/insights/"><meta name="robots" content="index, follow"><meta property="og:title" content="Insights | NEOICECREAM"><meta property="og:description" content="Insights on better-for-you frozen dessert bars, lighter indulgence, and food science."><meta property="og:type" content="website"><meta property="og:url" content="${site}/insights/"><meta property="og:image" content="${site}/assets/products/pistachio.png"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Insights | NEOICECREAM"><meta name="twitter:description" content="Insights on better-for-you frozen dessert bars, lighter indulgence, and food science."><meta name="twitter:image" content="${site}/assets/products/pistachio.png"><link rel="icon" type="image/png" href="/assets/logo/neoicecream-icon.png?v=20260521-8"><link rel="stylesheet" href="/styles.css?v=20260722-1"></head><body>${header}<main><section class="page-hero"><div class="container page-hero-grid"><div><p class="eyebrow">INSIGHTS</p><h1>NEOICECREAM Insights</h1><p class="page-lead">NEOICECREAM Insights explores the future of better-for-you frozen dessert bars, low-fat frozen dessert formulation, live cultures, lighter indulgence, and synbiotic-inspired food science. These articles explain the category, product direction, and thinking behind NEOICECREAM without medical or therapeutic claims.</p></div><div class="page-hero-card"><img src="/assets/products/pistachio.png" alt="Pistachio NEOICECREAM frozen dessert bar"></div></div></section><section class="section"><div class="container insights-grid">${cards}</div></section></main>${footer}</body></html>`;
fs.writeFileSync(path.join(root,'insights','index.html'),indexHtml);

const core = [
  ['/', '1.0'], ['/product/','0.9'], ['/flavors/','0.9'], ['/faq/','0.7'], ['/contact/','0.8'], ['/insights/','0.8']
];
const urls = [...core.map(([url,priority]) => `  <url><loc>${site}${url}</loc><lastmod>${published}</lastmod><changefreq>${url === '/' ? 'weekly' : 'monthly'}</changefreq><priority>${priority}</priority></url>`), ...articles.map(a => `  <url><loc>${site}/insights/${a.slug}/</loc><lastmod>${published}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`)].join('\n');
fs.writeFileSync(path.join(root,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
fs.writeFileSync(path.join(root,'insights-sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${site}/insights/</loc><lastmod>${published}</lastmod></url>\n${articles.map(a => `  <url><loc>${site}/insights/${a.slug}/</loc><lastmod>${published}</lastmod></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(root,'content','seo-articles.json'),JSON.stringify({generatedAt:published,articles:articles.map(({sections,links,intro,...meta}) => ({...meta,canonical:`${site}/insights/${meta.slug}/`,date:published}))},null,2)+'\n');
console.log(`Generated ${articles.length} articles, Insights index, metadata manifest, and sitemaps.`);
