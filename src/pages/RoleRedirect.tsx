import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

export default function RoleRedirect() {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoaded || !user) return;

    async function checkRole() {
      const email = user.primaryEmailAddress?.emailAddress;

      const { data, error } = await supabase
        .from("user_role")
        .select("role")
        .eq("email", email)
        .maybeSingle();

      if (error || !data) {
        console.error("Role not found", error);
        navigate("/unauthorized");
        return;
      }

      switch (data.role) {
        case "admin":
          navigate("/admin");
          break;
        case "counsellor":
          navigate("/counsellor");
          break;
        case "student":
          navigate("/student");
          break;
        default:
          navigate("/unauthorized");
      }
    }

    checkRole();
  }, [isLoaded, user, navigate]);

  return null;
}
