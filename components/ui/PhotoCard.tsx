import Image from "next/image";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

type PhotoCardProps = {
  imageUrl: string;
  imageAlt?: string;
  badge?: string;
  title: string;
  photographer: string;
  liked?: boolean;
  onLikeToggle?: () => void;
};

export default function PhotoCard({
  imageUrl,
  imageAlt = "",
  badge,
  title,
  photographer,
  liked = false,
  onLikeToggle,
}: PhotoCardProps) {
  return (
    <div className="bg-[#fff8f3] rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] overflow-hidden w-full">
      {/* 写真エリア */}
      <div className="relative h-64 bg-[#faecdb]">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 384px"
        />

        {/* カテゴリバッジ */}
        {badge && (
          <div className="absolute bottom-4 left-4">
            <span className="backdrop-blur-[2px] bg-[rgba(255,248,243,0.9)] px-2 py-1 rounded text-xs font-medium text-lp-ink">
              {badge}
            </span>
          </div>
        )}
      </div>

      {/* カード下部 */}
      <div className="flex items-center justify-between p-4">
        <div className="flex flex-col min-w-0">
          <span className="text-base font-medium text-lp-ink truncate leading-[1.6]">
            {title}
          </span>
          <span className="text-sm text-lp-ink-soft leading-[1.6]">
            {photographer}
          </span>
        </div>

        <button
          type="button"
          onClick={onLikeToggle}
          aria-label={liked ? "いいねを取り消す" : "いいねする"}
          className="shrink-0 ml-3 p-1 text-lp-ink-soft hover:text-lp-accent transition-colors duration-200"
        >
          {liked ? (
            <FaHeart className="text-lp-accent text-xl" />
          ) : (
            <FiHeart className="text-xl" />
          )}
        </button>
      </div>
    </div>
  );
}
