"use client";

import { mockCards } from "../../../mockData"; // Import the data from mockData.ts
import MediaSlider from "../../../components/ui/Slider"; // Import the slider component
import { use } from "react"; // Import the `use` hook from React

type Params = {
  id: string;
};

type Props = {
  params: Promise<Params>;
};

export default function ModelPreviewPage({ params }: Props) {
  // Unwrap params using React.use() with type assertion
  const { id } = use(params);

  // Find the model with the given ID
  const model = mockCards.find((m) => m.id === id);

  if (!model) return <div>Model not found</div>;

  // Correctly format videos into the expected object type
  const formattedVideos = model.videos.map(videoUrl => ({
    type: 'video' as const, // Use 'as const' for literal type inference
    url: videoUrl,
  }));

  // Combine images and the newly formatted video objects
  const media = [...model.images, ...formattedVideos];

  return (
    <div className="w-full p-2 sm:p-4">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="grow">
          <MediaSlider media={media} />
        </div>
        <div className="grow">2</div>
        <div className="grow flex justify-end">3</div>
      </div>
    </div>
  );
}
