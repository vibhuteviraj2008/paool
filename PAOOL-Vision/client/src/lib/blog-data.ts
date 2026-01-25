export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string[]; // Array of paragraphs for simplicity
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "circular-economy-shift",
    title: "The Shift Towards a Truly Circular Economy",
    date: "October 12, 2024",
    author: "Elena Vora",
    excerpt: "Why recycling isn't enough, and how we need to rethink product lifecycles from the ground up.",
    readTime: "4 min read",
    content: [
      "The traditional linear economy model—take, make, dispose—is reaching its physical limits. Resources are becoming scarcer, and waste is accumulating at an unmanageable rate. But the solution isn't just 'recycling more'. It requires a fundamental redesign of how we create and consume value.",
      "At PAOOL, we believe true circularity begins at the design phase. It's about creating products that are destined to be disassembled, not discarded. It's about material intelligence and supply chain transparency.",
      "We are seeing a shift in consumer consciousness. People no longer want to just own things; they want to align with values. This creates a massive opportunity for brands that can prove their commitment to longevity and regeneration."
    ]
  },
  {
    id: "regenerative-design",
    title: "Principles of Regenerative Design",
    date: "September 28, 2024",
    author: "Marcus Chen",
    excerpt: "Moving beyond sustainability: how we can actually improve the systems we interact with.",
    readTime: "6 min read",
    content: [
      "Sustainability implies maintaining the status quo—doing 'less harm'. But what if we could do 'more good'? That is the core promise of regenerative design.",
      "Regenerative systems mimic nature. They don't just consume energy; they produce it. They don't just use water; they clean it. In our latest architectural projects, we've implemented living facades that actively filter urban air pollutants.",
      "The challenge for the next decade is scaling these technologies. It requires patience, capital, and a willingness to fail. But the alternative is stagnation."
    ]
  },
  {
    id: "slow-living-tech",
    title: "Technology for Slow Living",
    date: "August 15, 2024",
    author: "Sarah O'Neil",
    excerpt: "Can high-tech solutions coexist with a grounded, natural lifestyle? We think so.",
    readTime: "3 min read",
    content: [
      "There is a tension between the frantic pace of digital innovation and the human need for calm. We often see technology as the antagonist to nature, but it doesn't have to be.",
      "We are exploring interfaces that are 'calm by design'. Technology that recedes into the background, performing complex tasks without demanding constant attention. Sensors that monitor soil health without screens. Energy systems that self-optimize silently.",
      "The future isn't about rejecting technology, but integrating it so seamlessly that it feels like magic—or nature."
    ]
  }
];
