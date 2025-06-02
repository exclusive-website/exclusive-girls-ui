"use client";

import { useRouter, usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { mockCards } from "@/app/mockData";
import { CardProps } from "@/app/components/ui/Card";

export default function ModelPreviewPage() {
  const params = useParams();
  const id = params?.id;

  const [model, setModel] = useState<CardProps | null>(null);

  useEffect(() => {
    if (id) {
      const found = mockCards.find((m) => m.id === id);
      setModel(found || null);
    }
  }, [id]);

  if (!model) {
    return <p>Loading or Model not found...</p>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{model.name}</h1>
      <p>Age: {model.age}</p>
      <p>Location: {model.location}</p>
      <div className="my-4">
        <img
          src={model.image[0]}
          alt={model.name}
          className="w-full max-w-md rounded-lg"
        />
      </div>
      <p>Weight: {model.description.weight}kg</p>
      <p>Height: {model.description.height}cm</p>
      <p>Breast: {model.description.breast}</p>
      <p>Hair: {model.description.hair.join(", ")}</p>
    </div>
  );
}
