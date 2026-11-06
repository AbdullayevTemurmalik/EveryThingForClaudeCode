import React from "react";
import { SearchX, RotateCcw } from "lucide-react";

interface EmptyStateProps {
  onReset?: () => void;
  message?: string;
}

export function EmptyState({
  onReset,
  message = "Mos keladigan manbalar topilmadi",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center bg-[#14110E] border border-[#302720] rounded-xl my-6">
      <div className="w-14 h-14 rounded-full bg-[#1D1712] border border-[#302720] flex items-center justify-center mb-4">
        <SearchX className="w-7 h-7 text-[#B8ABA0]" />
      </div>
      <h3 className="text-lg font-semibold text-[#F7F4EF] mb-2">{message}</h3>
      <p className="text-sm text-[#B8ABA0] max-w-md mb-6">
        Qidiruv so&apos;zini o&apos;zgartirib ko&apos;ring yoki tanlangan kategoriyani tozalab, barcha
        manbalarni qayta ko&apos;ring.
      </p>
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#A47550] hover:bg-[#BD8A60] rounded-lg transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Filtrlarni tozalash</span>
        </button>
      )}
    </div>
  );
}
