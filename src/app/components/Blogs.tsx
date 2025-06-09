'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const blogPosts = [
  // Column 1 (4 posts)
  { 
    id: 1, 
    title: 'Future of Web Development',
    excerpt: 'Exploring next-gen web technologies and frameworks that are shaping tomorrow.',
    category: 'Tech', 
    gradient: 'from-[#0EA5E9] via-[#22D3EE] to-[#67E8F9]',
    date: 'Oct 2023'
  },
  { 
    id: 2, 
    title: 'AI Innovations',
    excerpt: 'The impact of AI on various industries and its future potential.',
    category: 'AI', 
    gradient: 'from-[#A855F7] via-[#D946EF] to-[#F472B6]',
    date: 'Sep 2023'
  },
  { 
    id: 3, 
    title: 'Cloud Solutions',
    excerpt: 'How cloud computing is revolutionizing business operations.',
    category: 'Cloud', 
    gradient: 'from-[#34D399] via-[#2DD4BF] to-[#22C55E]',
    date: 'Aug 2023'
  },
  { 
    id: 4, 
    title: 'DevOps Practices',
    excerpt: 'Best practices for implementing DevOps in your organization.',
    category: 'DevOps', 
    gradient: 'from-[#FB923C] via-[#FBBF24] to-[#FDE047]',
    date: 'Jul 2023'
  },
  
  // Column 2 (4 posts)
  { 
    id: 5, 
    title: 'Mobile Development',
    excerpt: 'Trends and tools for building mobile applications in 2023.',
    category: 'Mobile', 
    gradient: 'from-[#F87171] via-[#FBBF24] to-[#FBBF24]',
    date: 'Jun 2023'
  },
  { 
    id: 6, 
    title: 'Cybersecurity',
    excerpt: 'Protecting your digital assets: Cybersecurity essentials.',
    category: 'Security', 
    gradient: 'from-[#6366F1] via-[#8B5CF6] to-[#A855F7]',
    date: 'May 2023'
  },
  { 
    id: 7, 
    title: 'UI/UX Design',
    excerpt: 'Creating user-friendly interfaces and experiences.',
    category: 'Design', 
    gradient: 'from-[#4ADE80] via-[#34D399] to-[#22C55E]',
    date: 'Apr 2023'
  },
  { 
    id: 8, 
    title: 'Blockchain',
    excerpt: 'Understanding blockchain technology and its applications.',
    category: 'Tech', 
    gradient: 'from-[#3B82F6] via-[#9333EA] to-[#F472B6]',
    date: 'Mar 2023'
  },
  
  // Column 3 (4 posts)
  { 
    id: 9, 
    title: 'API Design',
    excerpt: 'Principles and best practices for designing robust APIs.',
    category: 'Backend', 
    gradient: 'from-[#8B5CF6] via-[#A855F7] to-[#D946EF]',
    date: 'Feb 2023'
  },
  { 
    id: 10, 
    title: 'Machine Learning',
    excerpt: 'An introduction to machine learning concepts and techniques.',
    category: 'AI', 
    gradient: 'from-[#FBBF24] via-[#FDE047] to-[#A3E635]',
    date: 'Jan 2023'
  },
  { 
    id: 11, 
    title: 'Data Analytics',
    excerpt: 'Leveraging data analytics for business intelligence.',
    category: 'Data', 
    gradient: 'from-[#06B6D4] via-[#0EA5E9] to-[#3B82F6]',
    date: 'Dec 2022'
  },
  { 
    id: 12, 
    title: 'Web Security',
    excerpt: 'Ensuring security in web development: A comprehensive guide.',
    category: 'Security', 
    gradient: 'from-[#F97316] via-[#FB923C] to-[#FBBF24]',
    date: 'Nov 2022'
  },
  
  // Column 4 (4 posts)
  { 
    id: 13, 
    title: 'Frontend Trends',
    excerpt: 'The latest trends in frontend development you should know.',
    category: 'Web', 
    gradient: 'from-[#84CC16] via-[#A3E635] to-[#D9F99D]',
    date: 'Oct 2022'
  },
  { 
    id: 14, 
    title: 'Backend Systems',
    excerpt: 'Exploring modern backend systems and architectures.',
    category: 'Backend', 
    gradient: 'from-[#3B82F6] via-[#9333EA] to-[#F472B6]',
    date: 'Sep 2022'
  },
  { 
    id: 15, 
    title: 'Cloud Native',
    excerpt: 'Building applications for the cloud: Best practices and tools.',
    category: 'Cloud', 
    gradient: 'from-[#8B5CF6] via-[#A855F7] to-[#D946EF]',
    date: 'Aug 2022'
  },
  { 
    id: 16, 
    title: 'Docker & K8s',
    excerpt: 'Containerization and orchestration for modern DevOps.',
    category: 'DevOps', 
    gradient: 'from-[#EC4899] via-[#F472B6] to-[#FBBF24]',
    date: 'Jul 2022'
  },
  
  // Column 5 (4 posts)
  { 
    id: 17, 
    title: 'Web3 Development',
    excerpt: 'The rise of Web3 and its impact on the internet.',
    category: 'Blockchain', 
    gradient: 'from-[#34D399] via-[#2DD4BF] to-[#22C55E]',
    date: 'Jun 2022'
  },
  { 
    id: 18, 
    title: 'System Design',
    excerpt: 'Fundamentals of designing scalable systems.',
    category: 'Architecture', 
    gradient: 'from-[#3B82F6] via-[#9333EA] to-[#F472B6]',
    date: 'May 2022'
  },
  { 
    id: 19, 
    title: 'Software Testing',
    excerpt: 'Modern approaches to testing and quality assurance.',
    category: 'QA', 
    gradient: 'from-[#4ADE80] via-[#34D399] to-[#22C55E]',
    date: 'Apr 2022'
  },
  { 
    id: 20, 
    title: 'Tech Leadership',
    excerpt: 'Leading technical teams in the modern era.',
    category: 'Management', 
    gradient: 'from-[#FB923C] via-[#F97316] to-[#EA580C]',
    date: 'Mar 2022'
  }
];

// Assign random heights to each column's cards
const columns = [
  blogPosts.slice(0, 4).map(post => ({ ...post, height: ['h-[280px]', 'h-[320px]', 'h-[300px]'][Math.floor(Math.random() * 3)] })),
  blogPosts.slice(4, 8).map(post => ({ ...post, height: ['h-[280px]', 'h-[320px]', 'h-[300px]'][Math.floor(Math.random() * 3)] })),
  blogPosts.slice(8, 12).map(post => ({ ...post, height: ['h-[280px]', 'h-[320px]', 'h-[300px]'][Math.floor(Math.random() * 3)] })),
  blogPosts.slice(12, 16).map(post => ({ ...post, height: ['h-[280px]', 'h-[320px]', 'h-[300px]'][Math.floor(Math.random() * 3)] })),
  blogPosts.slice(16, 20).map(post => ({ ...post, height: ['h-[280px]', 'h-[320px]', 'h-[300px]'][Math.floor(Math.random() * 3)] })),
];

export default function Blogs() {
  return (
    <section className="relative w-full min-h-screen bg-black py-20 px-4 overflow-hidden">
      {/* Enhanced background with subtle animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(45,45,45,0.3),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_50%)]" />
      </div>
      
      <div className="relative max-w-[2000px] mx-auto">
        <motion.h2 
          className="text-7xl md:text-8xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
            Our Latest Posts
          </span>
        </motion.h2>
        <motion.p
          className="text-white/60 text-center mb-20 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Discover our insights on technology, innovation, and digital transformation
        </motion.p>

        <div className="grid grid-cols-5 gap-6">
          {columns.map((column, colIndex) => (
            <div 
              key={colIndex} 
              className={`space-y-6 ${colIndex % 2 === 0 ? 'mt-0' : 'mt-12'}`}
            >
              {column.map((post, index) => (
                <motion.article
                  key={post.id}
                  className={`group relative ${post.height} rounded-xl overflow-hidden backdrop-blur-sm
                    shadow-[0_0_25px_-5px_rgba(0,0,0,0.2)] border border-white/5`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Enhanced base gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-30 
                    mix-blend-soft-light group-hover:opacity-50 transition-all duration-500`} />
                  
                  {/* Ambient light effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Glass overlay */}
                  <div className="absolute inset-0 backdrop-blur-[2px] bg-black/20" />

                  {/* Content with improved contrast */}
                  <div className="absolute inset-0 p-6 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <motion.span 
                        className={`px-3 py-1 text-xs font-medium rounded-full 
                          bg-gradient-to-r ${post.gradient} text-white shadow-lg`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {post.category}
                      </motion.span>
                      <span className="text-white/60 text-sm font-medium">{post.date}</span>
                    </div>
                    
                    <div className="mt-auto">
                      <h3 className="text-xl font-medium text-white mb-2 drop-shadow-md">
                        {post.title}
                      </h3>
                      <p className="text-sm text-white/80 mb-4 line-clamp-2 drop-shadow">
                        {post.excerpt}
                      </p>
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-white font-medium"
                      >
                        Read Article
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0" />
                </motion.article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
