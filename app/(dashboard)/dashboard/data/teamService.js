/**
 * Fetch team data from API
 * This implementation uses mock data, but can be replaced with actual API calls
 */
export async function getTeamData() {
    // Mock data - replace with actual API call in production
    const teamData = {
        teamName: "Dumbledore's Army",
        teamMembers: [
            {id: "2205007", name: "Harry Potter", isLeader: true},
            {id: "2205009", name: "Ron Weasley", isLeader: false},
            {id: "2205010", name: "Hermione Granger", isLeader: false},
        ]
    };
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return teamData;
}
