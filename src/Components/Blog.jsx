import React from "react";
import '../App.css'
const posts = [
    {
        id: 1,
        title: "ORIKI Global and Synergy Limited",
        excerpt: "The first and only all-natural farm to skin brand in Nigeria ",
        author: "OJBDeclutter",
        date: "March 1, 2026",
        image: "src/assets/Oriki.jpg",
        link: "https://vc4a.com/ventures/oriki-global-and-synergy-limited/team/",
    },
    {
        id: 2,
        title: "Tribune News Headline",
        excerpt:
            "Declutter has created job opportunities for unemployed graduates — Ojb_declutter boss",
        author: "Tribune Online",
        date: "February 20, 2026",
        image: "src/assets/Tribune.jpg",
        link:"https://tribuneonlineng.com/declutter-has-created-job-opportunities-for-unemployed-graduates-ojb_declutter-boss/"
    },
    {
        id: 3,
        title: "Guardian NEWS Headline",
        excerpt:
            "Relocation impacts declutter business, boosts economy, says Ojb_declutter boss, Ojabanjo.",
        author: "Guardian Nigeria",
        date: "February 12, 2026",
        image: "src/assets/Guard.jpg",
        link:"https://guardian.ng/news/relocation-impacts-declutter-business-boosts-economy-says-ojb_declutter-boss-ojabanjo/"
    },
    {
        id: 4,
        title: "Vanguard NEWS Headline",
        excerpt:
            "Flexible refund policy builds trust in declutter business — Entrepreneur, Ojabanjo",
        author: "By Dickson Omobola",
        date: "February 12, 2026",
        image: "src/assets/refund.jpg",
        link: "https://www.vanguardngr.com/2023/04/flexible-refund-policy-builds-trust-in-declutter-business-entrepreneur-ojabanjo/"
    },
];

export default function BlogPage() {
    return (
        <main className="blog">
            <section className="blog-container">
                <header className="blog-header">
                    <h1>Our Blog</h1>
                    <p>
                        Deep insights, events, news and articles about us.
                    </p>
                </header>

                <div className="blog-grid">
                    {posts.map((post) => (
                        <article key={post.id} className="blog-card">
                            <div className="blog-image-wrapper">
                                <img src={post.image} alt={post.title} />
                                <span className="blog-tag">{post.tag}</span>
                            </div>

                            <div className="blog-content">
                                <h2>{post.title}</h2>
                                <p className="blog-excerpt">{post.excerpt}</p>

                                <div className="blog-footer">
                                    <div>
                                        <strong>{post.author}</strong>
                                        <span>{post.date}</span>
                                    </div>
                                    <a
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="blog-link"
                                    >
                                        Read More →
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}