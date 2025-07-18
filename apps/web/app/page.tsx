import { Button } from "@workspace/ui/components/button"
import Link from "next/link"
import UserProfile from "@/components/UserProfile"
import DatabaseView from "@/components/DatabaseView"

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Link href="/login">
          <Button variant="outline" size="sm">Go to Login</Button>
        </Link>
        <UserProfile />
        <DatabaseView />
      </div>
    </div>
  )
}
