// Server Component - Problem Statement Detail
import { spaceGrotesk } from "@/app/(dashboard)/dashboard/page";

export default function ProblemStatementDetail({problem}) {
    if (!problem) return null;

    return (
        <div className="bg-gray-100 p-8 border border-gray-200 transition-all duration-300 w-full overflow-hidden mt-10">
            <h2 className={`text-2xl font-bold mb-8 ${spaceGrotesk.className}`}>{problem.title}</h2>

            {/* Description */}
            <div className="mb-8">
                <p className="leading-relaxed text-gray-700">{problem.description}</p>
            </div>

            {/* Objective Section */}
            {problem.sections?.objective && (
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">{problem.sections.objective.title}</h3>
                    <p className="text-gray-700">{problem.sections.objective.content}</p>
                </div>
            )}

            {/* Core Features Section */}
            {problem.sections?.coreFeatures && (
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">{problem.sections.coreFeatures.title}</h3>
                    <div className="grid gap-6">
                        {problem.sections.coreFeatures.features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 border border-gray-200">
                                <h4 className="text-lg font-medium mb-3">{feature.title}</h4>
                                <ul className="space-y-2">
                                    {feature.items.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Bonus Features Section */}
            {problem.sections?.bonusFeatures && (
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">{problem.sections.bonusFeatures.title}</h3>
                    <ul className="bg-white p-6 border border-gray-200 space-y-2">
                        {problem.sections.bonusFeatures.items.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="mr-2">•</span>
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Judging Criteria Section */}
            {problem.sections?.judgingCriteria && (
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">{problem.sections.judgingCriteria.title}</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Checkpoint
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Description
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Points
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {problem.sections.judgingCriteria.criteria.map((criterion, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {criterion.checkpoint}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {criterion.description}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                            {criterion.maxPoints} pts
                                        </td>
                                    </tr>
                                ))}
                                <tr className="bg-gray-50 font-medium">
                                    <td className="px-6 py-4 text-sm text-gray-900">Total</td>
                                    <td></td>
                                    <td className="px-6 py-4 text-sm text-gray-900 text-right">
                                        {problem.sections.judgingCriteria.totalPoints} pts
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
