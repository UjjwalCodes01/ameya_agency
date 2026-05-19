export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Social Media" | "SEO" | "Branding" | "Ads" | "Case Studies";
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  featured: boolean;
  accentColor: string;
  body: Section[];
};

export type Section = {
  type: "h2" | "h3" | "p" | "ul" | "blockquote" | "cta";
  content?: string;
  items?: string[];
};

export const articles: Article[] = [
  {
    slug: "5-instagram-mistakes-businesses-make",
    title: "5 Instagram Mistakes Businesses Make (And How to Fix Them)",
    excerpt:
      "Most businesses on Instagram are unknowingly sabotaging their own growth. These five mistakes are the most common — and the most fixable.",
    category: "Social Media",
    date: "15 May 2025",
    readTime: "6 min read",
    author: "Anaya Team",
    authorRole: "Digital Marketing Strategists",
    featured: true,
    accentColor: "rgba(139,92,246,0.10)",
    body: [
      { type: "p", content: "Instagram has over 500 million daily active users in India alone. Yet most businesses post with no strategy, no consistency, and no clear goal — then wonder why they're not growing. We see the same mistakes repeatedly across every industry. Here are the five biggest ones and exactly how to fix each." },
      { type: "h2", content: "Mistake 1: Posting Without a Content Strategy" },
      { type: "p", content: "The most common mistake we see is reactive posting — sharing whatever feels right that day, with no plan behind it. This creates an inconsistent feed with no clear message. Your audience doesn't know what to expect from you, so they stop caring." },
      { type: "p", content: "The fix is simple: build a monthly content calendar. Decide in advance what you'll post, when, and why. Every post should serve a purpose — education, entertainment, inspiration, or conversion. We recommend a 4-1-1 ratio: 4 value posts, 1 promotional, 1 personal/behind-the-scenes." },
      { type: "h2", content: "Mistake 2: Ignoring Reels" },
      { type: "p", content: "If you're not making Reels, you're invisible. Instagram's algorithm heavily prioritises Reels over static posts — they receive up to 22% more engagement on average. Many businesses avoid Reels because they feel complicated or 'not on brand.' That hesitation is costing you reach." },
      { type: "p", content: "You don't need a production studio. Authentic, short-form Reels filmed on a phone consistently outperform over-produced content. Start with a 'day in the business' format or a quick tip relevant to your industry — 15 to 30 seconds, strong hook in the first 3 seconds." },
      { type: "h2", content: "Mistake 3: Using Irrelevant Hashtags" },
      { type: "p", content: "Copying hashtags from top posts or using mega-tags like #love and #instagood is a waste of your reach. When a hashtag has 500 million posts, your content disappears within seconds." },
      { type: "ul", items: ["Use 5–10 highly targeted hashtags instead of 30 generic ones", "Mix sizes: 1–2 large (1M+), 3–4 medium (100K–1M), 3–4 niche (under 100K)", "Research competitor hashtags and see what's working in your industry", "Create a branded hashtag specific to your business"] },
      { type: "h2", content: "Mistake 4: Treating Captions as an Afterthought" },
      { type: "p", content: "Captions are an opportunity — not a chore. A strong caption can double your engagement, drive profile visits, and push people to take action. Yet most businesses write two words and call it done." },
      { type: "p", content: "Write captions that hook in the first line (it's what shows before 'more'), deliver value, and end with a clear call to action. Ask a question. Start a poll. Tell a micro-story. Captions that spark conversation signal the algorithm to push your post to more people." },
      { type: "h2", content: "Mistake 5: Not Tracking Performance" },
      { type: "p", content: "If you're not looking at your Instagram Insights weekly, you're flying blind. You won't know which content formats work, which posting times get the most reach, or whether you're actually converting followers to customers." },
      { type: "ul", items: ["Check reach, impressions, and engagement rate per post", "Track which content types (Reels vs carousel vs static) perform best", "Monitor profile visits and link clicks — these signal buying intent", "Review follower growth trend weekly, not monthly"] },
      { type: "blockquote", content: "Strategy without measurement is just guessing. Measurement without action is just data collection. The power is in the loop: post, measure, learn, improve." },
      { type: "h2", content: "The Bottom Line" },
      { type: "p", content: "Instagram growth doesn't require a massive budget or a viral moment. It requires consistency, intentionality, and the discipline to track what's working. Fix these five mistakes and you'll see a measurable improvement in reach and engagement within 60 days." },
      { type: "cta" },
    ],
  },
  {
    slug: "why-local-seo-matters-for-indian-businesses",
    title: "Why Local SEO Is the Most Underrated Growth Tool for Indian Businesses",
    excerpt:
      "While businesses chase followers on social media, their potential customers are actively searching Google for exactly what they offer. Local SEO is how you capture them.",
    category: "SEO",
    date: "1 May 2025",
    readTime: "7 min read",
    author: "Anaya Team",
    authorRole: "Digital Marketing Strategists",
    featured: false,
    accentColor: "rgba(34,197,94,0.08)",
    body: [
      { type: "p", content: "Every day, millions of Indians search Google for phrases like 'organic vegetables near me,' 'best café in Dehradun,' or 'digital marketing agency Pune.' These are high-intent searches — people who are ready to buy, visit, or enquire. Local SEO is how your business shows up for these searches. And most Indian businesses have no idea it exists." },
      { type: "h2", content: "What Is Local SEO?" },
      { type: "p", content: "Local SEO is the practice of optimising your online presence so that your business appears in geographically-relevant searches — especially the Google Map Pack (the 3 listings that appear under the map in search results). When someone searches 'flower shop Chandigarh,' the businesses that appear in the Map Pack get the overwhelming majority of clicks and calls." },
      { type: "p", content: "Unlike organic SEO (which can take 6–12 months to see results), Local SEO can show significant improvements in 60–90 days — making it one of the highest-ROI marketing activities for any local or regional business." },
      { type: "h2", content: "The Google Business Profile: Your Most Important Asset" },
      { type: "p", content: "If you haven't claimed and optimised your Google Business Profile (formerly Google My Business), you're leaving customers on the table. This free tool is the single biggest lever for local search visibility." },
      { type: "ul", items: [
        "Claim and verify your business at business.google.com",
        "Fill every section completely — name, address, hours, category, description",
        "Add high-quality photos of your business, products, and team",
        "Post weekly updates (offers, events, news) to signal activity to Google",
        "Respond to every review — positive and negative",
        "Add services, products, and a Q&A section",
      ]},
      { type: "h2", content: "Reviews: The Currency of Local Trust" },
      { type: "p", content: "Google's local algorithm weighs reviews heavily — both the quantity and quality. Businesses with 50+ reviews consistently outrank those with 5, even if the content quality is identical. Yet most businesses never ask their customers for reviews." },
      { type: "p", content: "Build a review generation system: after every successful sale or service, send a WhatsApp message or email with a direct link to your Google review page. A simple 'If you're happy with [X], we'd really appreciate a quick review — it helps us a lot' converts surprisingly well. We helped Ganga Farm go from 6 reviews to 46 reviews in 3 months using exactly this approach." },
      { type: "h2", content: "On-Page SEO: Your Website Must Match Your Location" },
      { type: "p", content: "If your website doesn't mention your city, area, or region, Google doesn't know who to show it to. Every page on your site that targets local customers should include location-specific language naturally." },
      { type: "ul", items: [
        "Include your city/region in the page title and meta description",
        "Write an 'About Us' or 'Contact' page that mentions your location clearly",
        "Create service pages for each area you serve (e.g., 'Catering Services in Dehradun')",
        "Add LocalBusiness schema markup to your homepage",
        "Embed a Google Map on your contact page",
      ]},
      { type: "h2", content: "The Opportunity Most Businesses Are Missing" },
      { type: "p", content: "Here's the reality: in most Indian cities and towns, Local SEO is a wide-open opportunity. The competition is low, the tools are free (Google Business Profile), and the intent of searchers is extremely high. Someone searching 'organic milk delivery Dehradun' is not browsing — they're ready to buy." },
      { type: "blockquote", content: "Social media builds awareness. Local SEO captures demand that already exists. Both matter — but if you're a local business, SEO is where the money is." },
      { type: "h2", content: "Where to Start" },
      { type: "p", content: "If you do nothing else this week, claim and fully complete your Google Business Profile. Add photos, verify your address, and put a link to your review page in your WhatsApp status. These three steps alone will put you ahead of 80% of your local competitors." },
      { type: "p", content: "For a more comprehensive strategy — keyword research, on-page SEO, backlink building, and citation management — that's exactly what we do for businesses at Anaya." },
      { type: "cta" },
    ],
  },
];

export const categories = ["All", "Social Media", "SEO", "Branding", "Ads", "Case Studies"] as const;
