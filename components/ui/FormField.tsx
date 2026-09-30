"use client"

import type { ReactElement, ReactNode } from "react"
import {
  Controller,
  type Control,
  type ControllerRenderProps,
  type FieldValues,
  type Path,
} from "react-hook-form"
import { useTranslations } from "next-intl"

import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

type FormFieldRenderProps<TFieldValues extends FieldValues> =
  ControllerRenderProps<TFieldValues>

type FormFieldProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>
  name: Path<TFieldValues>
  label?: ReactNode
  labelTrailing?: ReactNode
  description?: ReactNode
  className?: string
  children: (field: FormFieldRenderProps<TFieldValues>) => ReactNode
}

export function FormField<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  labelTrailing,
  description,
  className,
  children,
}: FormFieldProps<TFieldValues>): ReactElement {
  const t = useTranslations()
  const isTranslationKey = (value: string): boolean =>
    /^[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)+$/.test(value)

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const rawMessage = fieldState.error?.message
        let translatedMessage = rawMessage

        if (rawMessage && isTranslationKey(rawMessage)) {
          try {
            translatedMessage = t(rawMessage)
          } catch {
            translatedMessage = rawMessage
          }
        }

        return (
          <div
            className={cn("flex w-full flex-col gap-1", className)}
            data-rhf-name={String(name)}
          >
            {(label || fieldState.error || labelTrailing) && (
              <div className="flex w-full items-center justify-between gap-2">
                <div className="flex min-w-0 flex-1 items-center gap-2">
                  {label && (
                    <Label className="body-3 font-normal text-form-label gap-0 dark:text-white">
                      {label}
                    </Label>
                  )}
                  {translatedMessage && (
                    <span className="whitespace-nowrap text-xs font-normal text-destructive">
                      ({translatedMessage})
                    </span>
                  )}
                </div>
                {labelTrailing ? (
                  <div className="shrink-0">{labelTrailing}</div>
                ) : null}
              </div>
            )}

            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}

            {children(field)}
          </div>
        )
      }}
    />
  )
}

