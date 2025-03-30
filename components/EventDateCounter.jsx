export default function EventDateCounter() {
  // Calculate time remaining on server side
  const eventDate = new Date("2025-04-06T00:00:00");
  const now = new Date();
  const diffTime = eventDate - now;

  let timeRemainingText = "";

  if (diffTime < 0) {
    timeRemainingText = "Event has already happened";
  } else {
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      timeRemainingText = "Event is today!";
    } else if (diffDays === 1) {
      timeRemainingText = "Event starts tomorrow";
    } else {
      timeRemainingText = `Event starts in ${diffDays} days`;
    }
  }

  return (
    <div className="w-full max-w-xs px-4 py-2 bg-neutral-50 rounded-full border border-neutral-100 mb-6">
      <div className="flex items-center justify-center gap-2 text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
          <path
            fillRule="evenodd"
            d="M10 4a1 1 0 011 1v4.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3a1 1 0 01-.293-.707V5a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-sm font-medium">{timeRemainingText}</span>
      </div>
    </div>
  );
}
