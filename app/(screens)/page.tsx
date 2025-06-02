import Card from "../components/ui/Card";
import { mockCards } from "../mockData";

export default function Home() {
  const modelCards = mockCards;

  return (
    <>
      <div className="flex justify-center items-center text-center bg-brand h-[100vh] text-white">
        <h1 className="text-8xl font-bold font-playfair">Exclusive girls</h1>
      </div>
      <div className="flex p-2 md:p-4 lg:p-8">
        {modelCards.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 max-w-[1440px] mx-auto justify-center">
            {modelCards.map((card) => {
              return <Card key={card.id} {...card} />;
            })}
          </div>
        ) : (
          <div className="flex justify-center items-center text-center bg-brand h-[100vh] text-white">
            <h1 className="text-4xl font-bold font-playfair">
              No models found
            </h1>
          </div>
        )}
      </div>
    </>
  );
}
