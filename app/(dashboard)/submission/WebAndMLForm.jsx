import GitHubIcon from "./GitHubIcon";
import { GlobeIcon, UploadIcon, Loader2Icon } from "lucide-react";

function WebAndMLForm({ formData, handleSubmit, handleInputChange, loading, track }) {
  return <form onSubmit={handleSubmit}>
    <div className="mb-6">
      <label htmlFor="githubLink" className="block mb-2 text-sm font-medium text-gray-700">
        {track === "WEB" ? "GitHub Link:" : "GitHub Link to ipynb file:"}
      </label>
      <div className="flex items-center border border-gray-300 bg-white">
        <div className="p-2 bg-gray-50 border-r border-gray-300">
          <GitHubIcon />
        </div>
        <input
          type="url"
          id="githubLink"
          name="githubLink"
          placeholder="https://github.com/your-repo"
          className="w-full p-3 focus:outline-none focus:ring-1 focus:ring-black"
          value={formData.githubLink}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>

    <div className="mb-8">
      <label htmlFor="deploymentLink" className="block mb-2 text-sm font-medium text-gray-700">
        Deployment Link for Project
      </label>
      <div className="flex items-center border border-gray-300 bg-white">
        <div className="p-2 bg-gray-50 border-r border-gray-300">
          <GlobeIcon />
        </div>
        <input
          type="url"
          id="deploymentLink"
          name="deploymentLink"
          placeholder="https://your-deploymentLink.com"
          className="w-full p-3 focus:outline-none focus:ring-1 focus:ring-black"
          value={formData.deploymentLink}
          onChange={handleInputChange}
        />
      </div>
    </div>

    {!loading ? (
      <button
        type="submit"
        className="w-full md:w-auto px-8 py-3 text-white bg-black border border-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
      >
        <div className="flex items-center gap-2 justify-center">
          <UploadIcon className="size-4" />
          Submit Project
        </div>
      </button>
    ) : (
      <button
        disabled
        className="w-full md:w-auto px-8 py-3 text-white bg-gray-700 border border-gray-700 focus:outline-none"
      >
        <div className="flex items-center justify-center">
          <Loader2Icon className="size-4 animate-spin mr-2" />
          Submitting
        </div>
      </button>
    )}
  </form>

}

export default WebAndMLForm;
