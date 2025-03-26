// Server Component - Problem Statement Detail
import ImageWithFallback from "@/app/(dashboard)/problem-statements/components/ImageWithFallback";
import {spaceGrotesk} from "@/app/(dashboard)/dashboard/page";

export default function ProblemStatementDetail({problem}) {
    if (!problem) return null;

    const isImageUrl = problem.imageSrc?.startsWith('http');
    const imageSource = isImageUrl ? problem.imageSrc : problem.imageSrc;

    return (
        <div className={`
          bg-gray-100 
          p-8 
          rounded-none 
          border border-gray-200
          transition-all 
          duration-300
          w-full
          overflow-hidden
          mt-10
        `}>
            <h2 className={`text-2xl font-bold mb-8 ${spaceGrotesk.className}`}>{problem.title}</h2>

            <div className="flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-2/3">
                    <p className="mb-4 leading-relaxed">{problem.description}</p>
                </div>

                {imageSource ? (
                    <div className="w-full md:w-1/3 flex justify-center items-start">
                        <div className="border border-gray-300 rounded-none overflow-hidden">
                            {/* Using Next.js Image for optimization */}
                            <ImageWithFallback
                                src={imageSource}
                                alt={`Illustration for ${problem.title}`}
                                width={400}
                                height={300}
                            />
                        </div>
                    </div>
                ) : (
                    <PlaceholderImage/>
                )}
            </div>
        </div>
    );
}

// Extracted components for better readability
function PlaceholderImage() {
    return (
        <div className="w-full md:w-1/3 flex justify-center items-start">
            <div className="border border-gray-300 aspect-square w-full max-w-xs">
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-0.5 bg-gray-400 transform rotate-45"></div>
                        <div className="w-full h-0.5 bg-gray-400 transform -rotate-45"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
