'use client';
import GlobalState from "@/context/GlobalStates";
import { Button } from "@nextui-org/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";

function KonnexwebSubmission() {
  const { count, setCount } = useContext(GlobalState);
  const session = useSession();
  const [githubLink, setGithubLink] = useState("");
  const [deploymentLink, setDeploymentLink] = useState("");

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleSubmit = async () => {
    if (!githubLink) {
      toast.error("GitHub link is required.");
      return;
    }

    if (!isValidUrl(githubLink)) {
      toast.error("Please enter a valid GitHub URL.");
      return;
    }

    if (deploymentLink && !isValidUrl(deploymentLink)) {
      toast.error("Please enter a valid deployment URL or leave it empty.");
      return;
    }

    toast.loading("Submitting...");
    try {
      let submitRequest = await axios.post("/api/submission", {
        TeamId: session.data.user.id, // Assuming the user ID is the team ID
        leaderEmail: session.data.user.email,
        githubLink: githubLink,
        deploymentLink: deploymentLink || null,
      });

      toast.remove();
      if (submitRequest.data.success) {
        toast.success(submitRequest.data.message);
        setCount(0);
      } else {
        toast.error(submitRequest.data.message);
      }
    } catch (error) {
      toast.remove();
      toast.error("An error occurred while submitting.");
      console.error(error);
    }
  };

  return (
    <div className="mt-12 max-w-3xl pb-20">
      <div>
        <h2 className="font-semibold mb-2">GitHub Link:</h2>
        <input
          type="url"
          placeholder="https://github.com/your-repo"
          className="w-full p-2 border rounded"
          value={githubLink}
          onChange={(e) => setGithubLink(e.target.value)}
          required
        />
      </div>
      <div className="mt-6">
        <h2 className="font-semibold mb-2">Deployment Link (optional):</h2>
        <input
          type="url"
          placeholder="https://your-deployment.com"
          className="w-full p-2 border rounded"
          value={deploymentLink}
          onChange={(e) => setDeploymentLink(e.target.value)}
        />
      </div>
      <div className="flex justify-between mt-16 text-sm">
        <p>
          <span className="font-semibold">Note:</span> You can submit only once.
        </p>
        <Button
          onClick={handleSubmit}
          className="rounded-md h-fit text-white bg-black disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="px-3 py-3 block">Submit</div>
        </Button>
      </div>
    </div>
  );
}

export default KonnexwebSubmission;
