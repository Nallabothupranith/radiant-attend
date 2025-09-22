import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/clerk-react";

export default function Unauthorized() {
  return (
    <>
      <h1>Unauthorized</h1>

      <SignedIn>
        <SignOutButton>Sign Out</SignOutButton>
      </SignedIn>
      <SignedOut>
        <p>Please sign in to access this page.</p>
        <SignInButton mode="modal">Sign In</SignInButton>
      </SignedOut>
    </>
  );
}
