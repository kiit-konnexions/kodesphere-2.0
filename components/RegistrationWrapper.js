"use client";
import { checkReg } from "@/app/actions/checkReg";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import RegisteredCard from "./RegisteredCard";
import RegistrationForm from "./RegistrationForm";
import RegistrationClosedCard from "./RegistrationClosedCard";

function RegistrationWrapper() {
  const { data: session, status } = useSession();
  const [isRegistered, setIsRegistered] = useState(null);
  const [tid, setTid] = useState("");

  useEffect(() => {
    if (status === "authenticated") {
      const cr = async () => {
        const res = await checkReg(session?.user.email);
        if (res.success) {
          setIsRegistered(true);
          setTid(res.tid);
        } else {
          setIsRegistered(false);
        }
      };
      cr();
    }
  }, [status === "authenticated"]);

  return (
    <>
      {isRegistered == null ? (
        "Checking registration status"
      ) : isRegistered == false ? (
        // <RegistrationClosedCard/>
        <RegistrationForm setIsRegistered={setIsRegistered} setTid={setTid} />
      ) : isRegistered == true ? (
        <RegisteredCard tid={tid} />
      ) : null}
    </>
  );
}

export default RegistrationWrapper;
