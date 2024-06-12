import { cn } from "@/utils";
import { useOptimistic, useState, useTransition } from "react";

type FakeApiData = {
  isLiked: boolean;
};

type ResultVariant = "failure" | "success";

const fakeAPI = (payload: FakeApiData, successOrFailure: ResultVariant) => {
  return new Promise((resolve, reject) => {
    if (successOrFailure === "success") {
      setTimeout(() => resolve(payload), 1000);
    } else {
      setTimeout(() => reject("something went wrong"), 1000);
    }
  });
};

type LikeButtonProps = {
  isLiked: boolean;
  onLike: (isLiked: boolean) => void;
};

const LikeButton = ({ isLiked, onLike }: LikeButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const [optimisticLiked, updateLike] = useOptimistic({ isLiked }, (currentStatus, { isLiked }) => {
    return { ...currentStatus, isLiked: !isLiked };
  });

  const handleLikeClick = (isLiked: boolean) => {
    updateLike({ isLiked });
    return onLike(isLiked);
  };

  const handleLike = (isLiked: boolean) => {
    startTransition(() => handleLikeClick(isLiked));
  };

  return (
    <button
      className={cn({
        "text-gray-500": isPending,
      })}
      onClick={() => handleLike(!optimisticLiked.isLiked)}
    >
      {optimisticLiked.isLiked ? "Unlike" : "Like"}
    </button>
  );
};

const UseOptimisticPage = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async (isLiked: boolean) => {
    setIsLiked(isLiked);
    await fakeAPI({ isLiked }, "success");
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="font-bold">Success</h3>
        <LikeButton isLiked={isLiked} onLike={handleLike} />
      </div>
    </div>
  );
};

export { UseOptimisticPage as UseOptimisticExample02 };
