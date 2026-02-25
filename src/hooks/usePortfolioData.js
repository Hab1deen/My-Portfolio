import { fallbackProjects, fallbackSkills } from '../data/portfolioData';

export default function usePortfolioData() {
    return {
        projects: fallbackProjects,
        skills: fallbackSkills,
    };
}
