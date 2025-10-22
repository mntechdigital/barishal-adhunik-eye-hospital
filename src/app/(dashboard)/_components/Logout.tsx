"use client";

import { Button } from "@/components/ui/button";
import { logoutUser } from "@/services/auth.service";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await logoutUser();
    router.push("/admin");
  };
  return (
    <div>
      <Button
        onClick={handleLogout}
        className="bg-red-500 flex items-center gap-1"
      >
        <LogOut />
        Logout
      </Button>
    </div>
  );
};

export default Logout;
