import { signIn, useSession } from "next-auth/react";

interface AuthProps  { 
  children?: React.ReactNode 
}

export function Auth({ children }: AuthProps) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({
    required: true,
    async onUnauthenticated() {
      await signIn("azure-ad");
    },
  });
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
