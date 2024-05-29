import { ProductOption } from "@medusajs/medusa"
import { clx } from "@medusajs/ui"
import React from "react"

import { onlyUnique } from "@lib/util/only-unique"
import { ProductCollectionWithPreviews } from "types/global"

type OptionSelectProps = {
  option: ProductOption
  collections: ProductCollectionWithPreviews[]
  current: string
  updateOption: (option: Record<string, string>) => void
  title: string
  metadata: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  metadata,
  collections,
}) => {
  const filteredOptions = option.values.map((v) => v.value).filter(onlyUnique)
 
  return (
    <div className="flex flex-col gap-y-3">
      {/* <span className="text-sm">Selectionnez {title}</span> */}
      <div className="flex justify-start gap-2">
        {filteredOptions.map((v) => {
          return (
          
            <button
              onClick={() => updateOption({ [option.id]: v })}
              key={v}
              className={clx(
                "border-ui-border-base border-[#BDCF2D] border-2 text-small-regular h-10 rounded-2xl px-4",
                {
                  "border-ui-border-interactive": v === current,
                  "hover:shadow-elevation-card-rest transition-shadow ease-in-out duration-150":
                    v !== current,
                }
              )}
            >
              {v}
            </button>

          )
        })}
      </div>
    </div>
  )
}

export default OptionSelect
