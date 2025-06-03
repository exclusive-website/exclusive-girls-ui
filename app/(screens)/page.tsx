import Card from "../components/ui/Card";
import { mockCards } from "../mockData";

export default function Home() {
  const modelCards = mockCards;

  return (
    <>
<div className="relative pt-[72px] h-[100vh] flex justify-center items-center flex-col text-center bg-[url(/bg_hero.jpg)] bg-bottom bg-cover bg-no-repeat text-white px-4 sm:px-6 lg:px-8">
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-0"></div>

  {/* Heading */}
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight font-bold font-playfair z-10 max-w-[90%] sm:max-w-[700px] lg:max-w-[1440px] text-center relative">
  Výber exkluzívnych dievčat, <br className="hidden sm:block"/>
  ktoré vám splnia vaše{' '}
  <span className="relative inline-block">
    erotické túžby
    <img
      src="/underline.svg"
      alt=""
      className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[60%] w-full pointer-events-none"
    />
  </span>
</h1>


  {/* Paragraph 1 */}
  <p className="text-sm sm:text-base lg:text-[16px] font-parkinsans z-10 max-w-[90%] sm:max-w-[700px] lg:max-w-[920px] mt-4">
    Ponúkame viac než len sprievod do spoločnosti, je to skutočný zážitok spojený s eleganciou, štýlom a vynikajúcou spoločnosťou. Ponúkame profesionálnu spoločnosť pre rôzne príležitosti, od firemných podujatí až po romantické večere plné erotiky a vášne. Eskort dievčatá, sú pripravené pre vás vytvoriť príjemnú atmosféru, ktorú si zaslúžite. Nie sú to len obyčajné ženy, ale sú to šarmantné dámy, ktoré presne vedia, ako sa majú správať a ako sa majú obliekať. Ich elegancia je príznačná nielen pre ich zovňajšok, ale aj pre ich správanie.
  </p>

  {/* Paragraph 2 */}
  <p className="text-sm sm:text-base lg:text-[16px] font-parkinsans z-10 max-w-[90%] sm:max-w-[700px] lg:max-w-[920px] mt-4">
    Diskrétnosť je ich prioritou, a tak je každý zážitok starostlivo chránený, pričom súkromie klienta je vždy na provom mieste. Neváhajte a vyberte si dievča podľa vašich predstáv. Nechajte sa zlákať svetom, kde elegancia, krása a vášeň sú na dennom poriadku, a kde vaša spoločníka je skutočná dáma, pripravená uspokojiť vaše najtajnejšie túžby a priania.
  </p>
</div>



      <div className="flex  md:p-4 lg:p-8">
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