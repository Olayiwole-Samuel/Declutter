import React, { useState, useMemo } from 'react';
import '../App.css';

// --- Team Data (Integrated) ---
const TEAM_MEMBERS_DATA = [
    { name: "Usman Ojabanjo", title: "CEO", imageUrl: "src/assets/usman.jpg" },
    { name: "Daniel - Lima Maimurna", title: "External HR Consultant", imageUrl: "src/assets/Maimurna.jpg" },
    { name: "Halimah Ajibola Sogbanmu", title: "Head Customer Service Department", imageUrl: "src/assets/halimat.jpg" },
    { name: "Emmanuel Precious Oluchi", title: "Customer Service Department", imageUrl: "src/assets/oluchi.jpg" },
    { name: "Omotosho Oluwaseun Hadejat", title: "Customer Service Department", imageUrl: "src/assets/seun.jpg" },
    { name: "Peters Inumidun Comfort", title: "Customer Service Department", imageUrl: "src/assets/inumidun.jpg" },
    { name: "Ayanwu Chiamaka Perpetual", title: "Customer Service Department", imageUrl: "src/assets/amaka.jpg" },
    { name: "Oluwadamilola Ajimuda Oluwaremilekun", title: "Head Sales Department", imageUrl: "src/assets/dami.jpg" },
    { name: "Lawal Eniola Oluwatimilehin", title: "Sales Department", imageUrl: "src/assets/remi.jpg" },
    { name: "Aliu Oluwatosin Mary", title: "Sales Department", imageUrl: "src/assets/tosin.jpg" },
    { name: "Ayomide Adejoke Oladele", title: "Sales Department", imageUrl: "src/assets/ayomi.jpg" },
    { name: "Comfort Oyeronke Oyewale", title: "Sales Department", imageUrl: "src/assets/comfort.jpg" },
    { name: "Oluwoyo Tosin Kindness", title: "Sales Department", imageUrl: "src/assets/kind.jpg" },
    { name: "Adebayo Ifeoluwa Olufunke", title: "Sales Department", imageUrl: "src/assets/ife.jpg" },
    { name: "Godswill Okereke Chukwu", title: "Content Team", imageUrl: "src/assets/will.jpg" },
    { name: "Daniel-lima Esther Onaopemipo", title: "Content Team", imageUrl: "src/assets/ope.jpg" },
    { name: "Runsewe OluwaGbenga OluwaDamilare", title: "Content Team", imageUrl: "src/assets/lare.jpg" },
    { name: "Olayinka Abimbola Funmi", title: "Finance Department", imageUrl: "src/assets/funmi.jpg" },
    { name: "Sulyman Hafsat Olajumoke", title: "Finance Team", imageUrl: "src/assets/moke.jpg" },
];

const getDepartment = (title = "") => {
    const lower = title.toLowerCase();

    if (lower.includes("sales")) return "Sales";
    if (lower.includes("hr")) return "HR";
    if (lower.includes("finance")) return "Finance";
    if (lower.includes("content")) return "Content";
    if (lower.includes("customer service")) return "Customer Service";
    if (lower.includes("ceo")) return "Executive";

    return "Other";
};

// --- Team Member Card ---
const TeamMember = ({ name, title, imageUrl }) => (
    <div className="team-card">
        <div className="team-image-wrapper">
            {imageUrl ? (
                <img src={imageUrl} alt={name} className="team-image" />
            ) : (
                <div className="team-image-placeholder">
                    {name?.charAt(0) || "T"}
                </div>
            )}
        </div>

        <div className="team-content">
            <h3 className="team-name">{name}</h3>
            <p className="team-role">{title}</p>
        </div>
    </div>
);

// --- Main Page ---
const TeamPage = () => {
    const [activeDepartment, setActiveDepartment] = useState("All");

    // Get unique departments dynamically (error-proof)
    const departments = useMemo(() => {
        const deptSet = new Set(
            TEAM_MEMBERS_DATA.map(member => getDepartment(member.title))
        );
        return ["All", ...Array.from(deptSet)];
    }, []);

    // Filtered team (safe + optimized)
    const filteredTeam = useMemo(() => {
        if (activeDepartment === "All") return TEAM_MEMBERS_DATA;

        return TEAM_MEMBERS_DATA.filter(
            member => getDepartment(member.title) === activeDepartment
        );
    }, [activeDepartment]);

    return (
        <section className="team-page">
            {/* Header */}
            <div className="team-hero">
                <h1 className="team-title">Meet Our Team</h1>
                <p className="team-subtitle">
                    We are OJB_DECLUTTER — A professional team dedicated to excellence,
                    service, and innovation.
                </p>
            </div>

            {/* Department Filter Buttons */}
            <div className="team-filters">
                {departments.map((dept) => (
                    <button
                        key={dept}
                        className={`filter-btn ${
                            activeDepartment === dept ? "active" : ""
                        }`}
                        onClick={() => setActiveDepartment(dept)}
                    >
                        {dept}
                    </button>
                ))}
            </div>

            {/* Team Grid */}
            <div className="team-grid">
                {filteredTeam.map((member, index) => (
                    <TeamMember
                        key={`${member.name}-${index}`} // safer key
                        name={member.name}
                        title={member.title}
                        imageUrl={member.imageUrl}
                    />
                ))}
            </div>
        </section>
    );
};

export default TeamPage;