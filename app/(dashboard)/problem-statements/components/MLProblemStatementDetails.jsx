import { spaceGrotesk } from "@/app/(dashboard)/dashboard/page";

export default function MLProblemDetail({ problem }) {
    if (!problem) return null;

    return (
        <div className="bg-gray-100 p-8 border border-gray-200 transition-all duration-300 w-full overflow-hidden mt-10">
            <h2 className={`text-2xl font-bold mb-8 ${spaceGrotesk.className}`}>{problem.title}</h2>
            <p className="text-gray-700 mb-8">{problem.description}</p>

            {/* Available Problem Statements */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-6">{problem.sections.problems.title}</h3>
                <div className="grid gap-8 md:grid-cols-1">
                    {problem.sections.problems.items.map((item, index) => (
                        <div key={index} className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                            <div className="mb-4">
                                <h4 className="text-lg font-bold">{item.title}</h4>
                                <p className="text-gray-600 font-medium">{item.subtitle}</p>
                            </div>
                            <p className="text-gray-700 mb-4">{item.description}</p>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center">
                                    <span className="font-semibold w-24">Objective:</span>
                                    <span className="text-gray-700">{item.objective}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="font-semibold w-24">Metrics:</span>
                                    <span className="text-gray-700">{item.metrics.join(', ')}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="font-semibold w-24">Dataset:</span>
                                    {item.datasetUrl === 'N/A' ? (
                                        <span className="text-gray-700">Not Required</span>
                                    ) : (
                                        <a href={item.datasetUrl} className="text-blue-600 hover:underline">
                                            Download Dataset
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Judging Criteria */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">{problem.sections.judgingCriteria.title}</h3>
                {problem.sections.judgingCriteria.note && (
                    <p className="text-gray-700 italic mb-4">{problem.sections.judgingCriteria.note}</p>
                )}
                <div className="space-y-4">
                    {problem.sections.judgingCriteria.criteria.map((criterion, index) => (
                        <div key={index} className="bg-white p-4 border border-gray-200 rounded-lg">
                            <h4 className="font-medium mb-2">{criterion.title}</h4>
                            <p className="text-gray-700">{criterion.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Submission Guidelines */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">{problem.sections.submissionGuidelines.title}</h3>
                <ul className="bg-white p-6 border border-gray-200 rounded-lg space-y-2">
                    {problem.sections.submissionGuidelines.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span className="text-gray-700">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}