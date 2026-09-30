"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { PAGE_ROUTES } from "@/constant/page-routes";

interface NetworkErrorProps {
  message?: string;
  onRetry?: () => void;
  showBackButton?: boolean;
}

const NetworkError = ({
  message = "Unable to connect to the server. Please check your internet connection and try again.",
  onRetry,
  showBackButton = true,
}: NetworkErrorProps) => {
  const router = useRouter();

  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      router.refresh();
    }
  };

  return (
    <div className="h-svh">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] font-bold leading-tight">Network</h1>
        <span className="font-medium">Connection Error!</span>
        <p className="text-center text-muted-foreground max-w-md">{message}</p>
        <div className="mt-6 flex gap-4">
          {showBackButton && (
            <Button variant="outline" onClick={() => router.back()}>
              Go Back
            </Button>
          )}
          <Button onClick={handleRetry}>Try Again</Button>
          <Button variant="outline" onClick={() => router.push(PAGE_ROUTES.HOME)}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NetworkError;
