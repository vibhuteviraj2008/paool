import { useState } from "react";
import { Link, Route, Switch, useRoute } from "wouter";
import { ArrowLeft, Clock } from "lucide-react";
import { Section } from "@/components/Section";
import { BLOG_POSTS, type BlogPost } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function BlogList() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <Section>
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="text-accent text-xs uppercase tracking-widest mb-4 block">Journal</span>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Insights</h1>
          <p className="text-muted-foreground text-lg">
            Thoughts on circularity, regenerative systems, and the future of design.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {[...BLOG_POSTS]
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((post, i) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group border-b border-white/5 pb-12 last:border-0"
            >
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="text-primary font-mono">{post.date}</span>
                <span>•</span>
                <span className="font-medium text-foreground">{post.author}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
              </div>
              
              <Link href={`/blog/${post.id}`}>
                <a className="block">
                  <h2 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                </a>
              </Link>
              
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <Link href={`/blog/${post.id}`}>
                <a className="text-sm font-medium border-b border-primary/50 pb-0.5 hover:border-primary transition-colors">
                  Read full article
                </a>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function BlogPostDetail({ params }: { params: { id: string } }) {
  const post = BLOG_POSTS.find(p => p.id === params.id);
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif mb-4">Post not found</h2>
        <Link href="/blog"><Button>Return to Blog</Button></Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <article className="max-w-3xl mx-auto px-6">
        <Link href="/blog">
          <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </a>
        </Link>
        
        <header className="mb-12">
           <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="text-primary font-mono">{post.date}</span>
            <span>•</span>
            <span className="font-medium text-foreground">{post.author}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-balance">
            {post.title}
          </h1>
        </header>
        
        <div className="prose prose-invert prose-lg max-w-none">
          {post.content.map((paragraph, idx) => (
             <p key={idx} className="text-muted-foreground leading-loose mb-6 font-light">
               {paragraph}
             </p>
          ))}
        </div>
        
        <div className="mt-20 pt-12 border-t border-white/5">
          <h3 className="font-serif text-2xl mb-6">Share this perspective</h3>
          <div className="flex gap-4">
             <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(window.location.href)}>
               Copy Link
             </Button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default function Blog() {
  const [match, params] = useRoute("/blog/:id");
  
  if (match && params) {
    return <BlogPostDetail params={params} />;
  }
  
  return <BlogList />;
}
