import React, { useState } from 'react';
import { Search, Calendar, Clock, ArrowRight, Tag, X, Share2, Check, BookOpen, Sparkles } from 'lucide-react';
import { BLOG_POSTS, type BlogPost } from '../data/blog';

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [copied, setCopied] = useState(false);

  const categories = ['All', 'AI & Automation', 'Engineering', 'Hardware & IoT', 'Case Studies'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-24 pb-20 bg-[#FAFCFF]">
      {/* Header Section */}
      <section className="relative overflow-hidden pt-12 pb-14 border-b border-slate-200/70 bg-gradient-to-b from-white to-slate-50/50">
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineering Insights & Industry Tech</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
              Quantum Mesh <span className="bg-gradient-to-r from-brand-blue to-cyan-500 bg-clip-text text-transparent">Tech Blog</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Deep dives into autonomous agentic AI, biometric IoT hardware, multi-cloud DevOps, and mission-critical enterprise software.
            </p>
          </div>

          {/* Search & Category Filter */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-brand-navy text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles or tags..."
                className="w-full pl-10 pr-4 py-2 text-xs rounded-full border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Featured Post (Only show if on 'All' and no search query) */}
        {selectedCategory === 'All' && !searchQuery && featuredPost && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-brand-blue" />
              <span>Featured Article</span>
            </div>

            <div 
              onClick={() => setActivePost(featuredPost)}
              className="group cursor-pointer bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-brand-blue border border-blue-100">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-brand-blue transition-colors leading-snug">
                  {featuredPost.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                {/* Author & Read More */}
                <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-900">{featuredPost.author.name}</p>
                      <p className="text-[11px] text-slate-500">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Cover Image */}
              <div className="lg:col-span-5 overflow-hidden rounded-2xl border border-slate-200/70 shadow-sm aspect-video lg:aspect-auto h-64 lg:h-80 relative bg-slate-900">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>
        )}

        {/* Article Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-slate-900">
              {searchQuery
                ? `Search Results (${filteredPosts.length})`
                : selectedCategory === 'All'
                ? 'All Articles'
                : `${selectedCategory} (${filteredPosts.length})`}
            </h3>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 p-8">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h4 className="text-base font-bold text-slate-800">No articles found</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                No articles matched "{searchQuery}". Try selecting another category or clear your search.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 rounded-full text-xs font-semibold bg-brand-blue text-white hover:bg-blue-600 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setActivePost(post)}
                  className="group cursor-pointer bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col"
                >
                  {/* Image container */}
                  <div className="aspect-[16/10] overflow-hidden relative bg-slate-900">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-md text-brand-navy shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h4>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Footer / Author */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-7 h-7 rounded-full object-cover border border-slate-200"
                        />
                        <div>
                          <p className="text-xs font-semibold text-slate-900">{post.author.name}</p>
                          <p className="text-[10px] text-slate-400">{post.author.role}</p>
                        </div>
                      </div>

                      <span className="text-xs font-bold text-brand-blue group-hover:translate-x-1 transition-transform">
                        Read →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
            {/* Modal Header Bar */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-brand-blue">
                  {activePost.category}
                </span>
                <span className="text-xs text-slate-400">• {activePost.readTime}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                  title="Share / Copy Link"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setActivePost(null)}
                  className="p-2 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div className="space-y-3">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  {activePost.title}
                </h1>
                
                {/* Author Info */}
                <div className="flex items-center gap-3 pt-2">
                  <img
                    src={activePost.author.avatar}
                    alt={activePost.author.name}
                    className="w-11 h-11 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-900">{activePost.author.name}</p>
                    <p className="text-xs text-slate-500">{activePost.author.role} • {activePost.date}</p>
                  </div>
                </div>
              </div>

              {/* Cover Banner */}
              <div className="rounded-2xl overflow-hidden aspect-[16/9] border border-slate-200">
                <img
                  src={activePost.coverImage}
                  alt={activePost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Body */}
              <div className="space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">
                <p className="text-base sm:text-lg font-medium text-slate-800 border-l-4 border-brand-blue pl-4">
                  {activePost.content.introduction}
                </p>

                {activePost.content.keyPoints.map((kp, idx) => (
                  <div key={idx} className="space-y-1.5 pt-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {idx + 1}. {kp.heading}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base">{kp.body}</p>
                  </div>
                ))}

                {activePost.content.codeSnippet && (
                  <div className="mt-4 rounded-xl overflow-hidden bg-slate-900 text-slate-100 p-4 font-mono text-xs shadow-inner">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2 mb-3">
                      <span>{activePost.content.codeSnippet.language.toUpperCase()}</span>
                      <span>Snippet</span>
                    </div>
                    <pre className="overflow-x-auto whitespace-pre">
                      <code>{activePost.content.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}

                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Takeaway</h4>
                  <p className="text-sm font-medium text-slate-800">{activePost.content.conclusion}</p>
                </div>

                {/* Tags */}
                <div className="pt-4 flex flex-wrap items-center gap-2">
                  <Tag className="w-3.5 h-3.5 text-slate-400" />
                  {activePost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">Quantum Mesh Engineering Publications</span>
              <button
                onClick={() => setActivePost(null)}
                className="px-4 py-2 rounded-full text-xs font-bold bg-brand-navy text-white hover:bg-slate-800 transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
