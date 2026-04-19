"use client";

import { useState } from "react";
import { Hero } from "@/components/landing/hero";
import {
  FAQ,
  FinalCTA,
  Footer,
  HowItWorks,
  LivePreviewSection
} from "@/components/landing/sections";
import { TopBar } from "@/components/landing/top-bar";
import type { StructuralMaterial } from "@/components/landing/isometric-building";

export function LandingPage() {
  const [material, setMaterial] = useState<StructuralMaterial>("Steel");

  return (
    <div data-screen-label="Civil Agent landing">
      <TopBar />
      <main>
        <Hero material={material} setMaterial={setMaterial} />
        <HowItWorks material={material} />
        <LivePreviewSection />
        <FAQ />
        <FinalCTA material={material} />
      </main>
      <Footer />
    </div>
  );
}
