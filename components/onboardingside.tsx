import React from 'react'
import { Card } from './ui/card'

export default function OnboardingSide() {
  return (
    <Card className="w-full h-full rounded-none border-0 ring-0 bg-linear-to-b from-brand via-[#CCCCF5] to-white">
      <img
        src="/assets/lines.png"
        alt="lines"
        className="w-full h-full object-cover object-center"
      />
    </Card>
  );
}
