export interface SignalItem {
  id: string;
  type: 'video' | 'post';
  title: string;
  platform: 'Instagram' | 'X' | 'LinkedIn' | 'YouTube';
  date: string;
  content: string;
  redirectUrl: string; // The link to the respective platform
  thumbnailUrl?: string; // Image link for video/post thumbnails
}

export const SIGNAL_ITEMS: SignalItem[] = [
  {
    id: "1",
    type: "post",
    title: "On Material Intelligence",
    platform: "X",
    date: "2024-10-15",
    content: "The future of circular design isn't just about reuse—it's about material intelligence at the source. We're tracking the life of every fiber.",
    redirectUrl: "https://x.com/paool/status/123456789",
    thumbnailUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "2",
    type: "video",
    title: "Prototype v0.4 Reveal",
    platform: "Instagram",
    date: "2024-10-08",
    content: "A quick look at our latest modular housing component in action. Designed for disassembly.",
    thumbnailUrl: "https://images.unsplash.com/photo-1518005020251-582c7b97465d?q=80&w=2000&auto=format&fit=crop",
    redirectUrl: "https://www.instagram.com/p/C_abc123/",
  },
  {
    id: "5",
    type: "video",
    title: "The TEST",
    platform: "YouTube",
    date: "2024-10-01",
    thumbnailUrl: "https://i9.ytimg.com/vi/hlXdKqDu0iQ/mqdefault.jpg?sqp=CKDT18sG-oaymwEmCMACELQB8quKqQMa8AEB-AH0CYAC0AWKAgwIABABGGUgXyhRMA8=&rs=AOn4CLAC7-numDcty4YzLQ931CBBELBzWA",
    redirectUrl: "https://youtu.be/xHbDA3PUVXs",
    content: "Exploring the global impact of decentralized production and local material sourcing.",
  },
  {
    id: "3",
    type: "post",
    title: "Regenerative Systems",
    platform: "LinkedIn",
    date: "2024-09-25",
    content: "Moving from sustainable to regenerative. Our latest whitepaper is now live for our partners.",
    redirectUrl: "https://www.linkedin.com/posts/paool_regenerative-systems-activity-724123456789/",
    thumbnailUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "4",
    type: "video",
    title: "Field Study: Berlin",
    platform: "Instagram",
    date: "2024-09-18",
    content: "Observing urban moss growth and its application in natural air filtration systems.",
    thumbnailUrl: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2000&auto=format&fit=crop",
    redirectUrl: "https://www.instagram.com/p/C_xyz789/",
  },
];
