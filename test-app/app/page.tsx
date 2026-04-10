"use client";
import { Button } from "@genius-sports/gs-brand-kit";

export default function Home() {
  return (
    <main className="min-h-screen p-12 bg-navy">
      <h1 className="text-4xl font-heading text-brightGreen mb-8">
        Brand Kit Test
      </h1>
      <p className="text-white font-body mb-8">
        This paragraph should be in RedHatText body font.
      </p>
      <p className="text-white font-heading mb-8">
        This paragraph should be in ESKlarheit heading font.
      </p>
      <Button>Hello from the brand kit</Button>
    </main>
  );
}
