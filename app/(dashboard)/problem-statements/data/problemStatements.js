// Data source for problem statements - could be replaced with API call

export function getProblemStatements() {
    // Fetch from an API or database
    return [
        {
            id: "problem1",
            title: "Post-Quantum Cryptography Algorithms",
            domain: "Cybersecurity",
            description: "Research and design cryptographic algorithms that are resistant to attacks from quantum computers. This project involves evaluating existing post-quantum cryptography schemes and proposing improvements or new algorithms. .Your task is to develop a secure system that can intercept and analyze network traffic without being detected. The solution should be able to identify potential threats and vulnerabilities in real-time while maintaining complete stealth...",
            imageSrc: "cybersecurity.jpg",
        },
        // More problems can be added here
    ];
}
