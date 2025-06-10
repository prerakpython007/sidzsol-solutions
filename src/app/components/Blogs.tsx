'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const blogPosts = [
	{
		id: 1,
		title: 'Future of Web Development',
		excerpt: 'Exploring next-gen web technologies and frameworks that are shaping tomorrow.',
		category: 'Tech',
		color: 'bg-blue-500',
		date: 'Oct 2023',
	},
	{
		id: 2,
		title: 'AI Innovations',
		excerpt: 'The impact of AI on various industries and its future potential.',
		category: 'AI',
		color: 'bg-purple-500',
		date: 'Sep 2023',
	},
	{
		id: 3,
		title: 'Cloud Solutions',
		excerpt: 'How cloud computing is revolutionizing business operations.',
		category: 'Cloud',
		color: 'bg-green-500',
		date: 'Aug 2023',
	},
	{
		id: 4,
		title: 'DevOps Practices',
		excerpt: 'Best practices for implementing DevOps in your organization.',
		category: 'DevOps',
		color: 'bg-orange-500',
		date: 'Jul 2023',
	},
	{
		id: 5,
		title: 'Mobile Development',
		excerpt: 'Trends and tools for building mobile applications in 2023.',
		category: 'Mobile',
		color: 'bg-red-500',
		date: 'Jun 2023',
	},
];

export default function Blogs() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToNext = () => {
		setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
	};

	const goToPrev = () => {
		setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
	};

	return (
		<section className="relative w-full min-h-screen bg-black py-20 overflow-hidden">
			<div className="absolute inset-0">
				{/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(45,45,45,0.3),transparent)]" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_50%)]" /> */}
			</div>

			<div className="relative max-w-[2000px] mx-auto">
				<motion.h2
					className="text-2xl md:text-8xl font-bold text-center mb-10"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					<span className=" font-thin text-white">
						Our Latest Posts
					</span>
				</motion.h2>
				<motion.p
					className="text-white/60 text-center mb-52 max-w-2xl mx-auto text-lg"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					Discover our insights on technology, innovation, and digital transformation
				</motion.p>

				{/* Updated Cards Container */}
				<div className="relative h-[500px] w-full max-w-3xl mx-auto mt-20">
					<AnimatePresence mode="popLayout">
						{[-1, 0, 1].map((offset) => {
							const index = (currentIndex + offset + blogPosts.length) % blogPosts.length;
							const post = blogPosts[index];

							return (
								<motion.article
									key={post.id}
									className="absolute top-0 w-[400px] h-[300px] rounded-2xl transform-gpu"
									initial={{
										scale: 0.8,
										x: offset * 300,
										opacity: 0,
									}}
									animate={{
										scale: offset === 0 ? 1 : 0.85,
										x: offset * 150,
										y: offset === 0 ? 0 : Math.abs(offset) * 5,
										opacity: 1,
										zIndex: 10 - Math.abs(offset),
									}}
									exit={{
										scale: 0.8,
										x: offset * -300,
										opacity: 0,
									}}
									transition={{
										duration: 0.6,
										ease: [0.32, 0.72, 0, 1], // Custom easing for smoother motion
									}}
									style={{
										pointerEvents: offset === 0 ? 'auto' : 'none',
										left: '50%',
										marginLeft: '-200px', // Half the card width
									}}
								>
									<div
										className={`w-full h-full rounded-2xl overflow-hidden ${post.color} 
                    shadow-[0_0_30px_rgba(0,0,0,0.3)] border-2 border-white/20
                    ${offset === 0 ? 'cursor-pointer transform-gpu hover:scale-[1.02] transition-transform duration-300 origin-center' : ''}`}
									>
										<div className="absolute inset-0 p-8 flex flex-col transform-gpu">
											<div className="flex justify-between items-start">
												<span className="px-4 py-1.5 text-xs font-medium rounded-full 
                          bg-white/20 text-white backdrop-blur-sm">
													{post.category}
												</span>
												<span className="text-white font-medium">{post.date}</span>
											</div>
											<div className="mt-auto">
												<h3 className="text-2xl font-bold text-white mb-3">{post.title}</h3>
												<p className="text-white/90 mb-4 line-clamp-2">{post.excerpt}</p>
												<button className="flex items-center gap-2 text-white font-medium
                          bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
													Read Article
													<ArrowUpRight className="w-4 h-4" />
												</button>
											</div>
										</div>
									</div>
								</motion.article>
							);
						})}
					</AnimatePresence>

					{/* Updated Navigation Arrows */}
					<div className="absolute inset-x-0 top-[150px] flex justify-between items-center z-20">
						<button
							onClick={goToPrev}
							className="w-14 h-14 -ml-7 rounded-full bg-black/50 border border-white/10 
              flex items-center justify-center backdrop-blur-sm
              hover:bg-white/10 transition-all duration-300 pointer-events-auto
              hover:scale-110 hover:border-white/30"
						>
							<ChevronLeft className="w-8 h-8 text-white" />
						</button>
						<button
							onClick={goToNext}
							className="w-14 h-14 -mr-7 rounded-full bg-black/50 border border-white/10 
              flex items-center justify-center backdrop-blur-sm
              hover:bg-white/10 transition-all duration-300 pointer-events-auto
              hover:scale-110 hover:border-white/30"
						>
							<ChevronRight className="w-8 h-8 text-white" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
