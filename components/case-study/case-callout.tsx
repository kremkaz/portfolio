"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

import type { CaseCalloutContent } from "@/content/cases/types";
import { cn } from "@/lib/utils";

export function CaseCallout({ title, details }: CaseCalloutContent) {
  const [open, setOpen] = useState(false);
  const detailsId = useId();
  const expandable = Boolean(details?.length);

  return (
    <div className="w-full rounded-2xl bg-primary/[0.06] p-6 text-primary">
      <div className="flex items-start gap-4">
        <p
          className={cn(
            "flex-1 text-base leading-relaxed font-semibold",
            expandable && !open && "line-clamp-2",
          )}
        >
          {title}
        </p>
        {expandable && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={detailsId}
            aria-label={open ? "Свернуть" : "Развернуть"}
            className="-m-1 shrink-0 rounded-full p-1 transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-primary"
          >
            <ChevronDown
              className={cn("size-6 transition-transform duration-300", open && "rotate-180")}
              aria-hidden
            />
          </button>
        )}
      </div>

      {expandable && (
        <div
          id={detailsId}
          className={cn(
            "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
          inert={!open}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-6 pt-6 text-base leading-relaxed">
              {details!.map((group) => (
                <div key={group.intro}>
                  <p>{group.intro}</p>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>— {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
