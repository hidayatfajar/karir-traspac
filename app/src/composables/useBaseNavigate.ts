import { useAuthStore } from "~/store";

export const useBaseNavigate = (userGroupId: string) => {
  const router = useRouter();
  const store = useAuthStore();

  const user_group = userGroupId || store?.user?.user_group_id;
  if (import.meta.client && user_group) {
    switch (user_group) {
      case "001.":
        router.push("/");
        break;
      default:
        router.push("/dashboard");
        break;
    }
  } else {
    router.push("auth/login");
  }
};
