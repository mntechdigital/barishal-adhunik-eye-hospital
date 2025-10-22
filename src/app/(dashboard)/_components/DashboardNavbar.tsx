import { loggedUser } from "@/services/auth.service";
import Logout from "./Logout";

const DashboardNavbar = async () => {
  const currentAdmin = await loggedUser();
  return (
    <div className="bg-gray-100">
      <div className="container py-4 flex items-center justify-between">
        <div>
          <h3>
            Email:{" "}
            <span className="text-lg font-bold">{currentAdmin?.email}</span>
          </h3>
        </div>
        <div>
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
