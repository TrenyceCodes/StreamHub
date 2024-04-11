import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      <Button asChild>
        <Link href="/auth/login">Login</Link>
      </Button>
    </div>
  );
}
