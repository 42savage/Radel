import { defineStore } from "pinia";

export const useOfferStore = defineStore({
  id: "offerStore",
  state: () => ({
    currentPage: null,
    offer: [
      {
        id: 0,
        title_match: "ryfle",
        title: "Ryfle",
        subtitle:
          "Ryfle z Verolithu to nowoczesne rozwiązanie w dziedzinie sztukaterii elewacyjnej, które łączy estetykę z trwałością i funkcjonalnością. Wykonane z innowacyjnego materiału Verolith, charakteryzują się wyjątkową lekkością, odpornością na warunki atmosferyczne oraz łatwością montażu. Dzięki swojej strukturze i precyzyjnemu wykonaniu, ryfle doskonale nadają się do dekoracji elewacji budynków, nadając im elegancki i nowoczesny wygląd.",
        imageGallery: [
          "/offer/ryfle/galeria/img001.jpg",
          "/offer/ryfle/galeria/img002.jpg",
        ],
        benefits: [
          {
            id: 0,
            title: "Trwałość i odporność",
            subtitle:
              "Verolith to materiał odporny na wilgoć, promieniowanie UV, mróz oraz uszkodzenia mechaniczne, co sprawia, że ryfle zachowują swój wygląd przez wiele lat.",
            icon: "/offer/benefits/benefit01.svg",
          },
          {
            id: 1,
            title: "Przyjazne środowisku",
            subtitle:
              "Verolith to materiał przyjazny środowisku, co czyni go doskonałym wyborem dla osób dbających o zrównoważony rozwój.",
            icon: "/offer/benefits/benefit02.svg",
          },
          {
            id: 2,
            title: "Estetyka i uniwersalność",
            subtitle:
              "Ryfle z Verolithu dostępne są w różnych wzorach i rozmiarach, co umożliwia dopasowanie ich do każdego stylu architektonicznego – od klasycznego po nowoczesny.",
            icon: "/offer/benefits/benefit03.svg",
          },
          {
            id: 3,
            title: "Lekkość i łatwość montażu",
            subtitle:
              "Dzięki niskiej wadze, ryfle są łatwe w transporcie i instalacji, co pozwala na szybkie i wygodne wykończenie elewacji.",
            icon: "/offer/benefits/benefit04.svg",
          },
        ],
      },
      {
        id: 1,
        title_match: "plaskorzezby",
        title: "Płaskorzeźby",
        subtitle:
          "Płaskorzeźby z verolithu to połączenie tradycyjnej sztuki z nowoczesnymi technologiami. Verolith, jako materiał o wyjątkowych właściwościach, pozwala na tworzenie precyzyjnych, trwałych i estetycznych form, które doskonale sprawdzają się zarówno w przestrzeniach prywatnych, jak i komercyjnych. Dzięki zastosowaniu zaawansowanego oprogramowania 3D, takiego jak SolidWorks, każda płaskorzeźba jest projektowana z najwyższą dokładnością, co gwarantuje perfekcyjne odwzorowanie detali.",
        imageGallery: [
          "/offer/plaskorzezby/galeria/img001.jpg",
          "/offer/plaskorzezby/galeria/img002.jpg",
        ],
        benefits: [
          {
            id: 0,
            title: "Trwałość i odporność",
            subtitle:
              "Verolith to materiał odporny na wilgoć, promieniowanie UV, mróz oraz uszkodzenia mechaniczne, co sprawia, że ryfle zachowują swój wygląd przez wiele lat.",
            icon: "/offer/benefits/benefit01.svg",
          },
          {
            id: 1,
            title: "Przyjazne środowisku",
            subtitle:
              "Verolith to materiał przyjazny środowisku, co czyni go doskonałym wyborem dla osób dbających o zrównoważony rozwój.",
            icon: "/offer/benefits/benefit02.svg",
          },
          {
            id: 2,
            title: "Estetyka i uniwersalność",
            subtitle:
              "Ryfle z Verolithu dostępne są w różnych wzorach i rozmiarach, co umożliwia dopasowanie ich do każdego stylu architektonicznego – od klasycznego po nowoczesny.",
            icon: "/offer/benefits/benefit03.svg",
          },
          {
            id: 3,
            title: "Lekkość i łatwość montażu",
            subtitle:
              "Dzięki niskiej wadze, ryfle są łatwe w transporcie i instalacji, co pozwala na szybkie i wygodne wykończenie elewacji.",
            icon: "/offer/benefits/benefit04.svg",
          },
        ],
      },
      {
        id: 2,
        title_match: "pilastry",
        title: "Pilastry",
        subtitle:
          "Pilastry to płaskie, pionowe elementy architektoniczne, które przypominają kolumny, ale są zintegrowane ze ścianą. Pełnią zarówno funkcję dekoracyjną, jak i konstrukcyjną, nadając budynkom elegancji i klasycznego stylu. Wykorzystuje się je w aranżacjach wnętrz, elewacjach budynków oraz w projektach inspirowanych architekturą antyczną.",
        imageGallery: [
          "/offer/pilastry/galeria/img001.jpg",
          "/offer/pilastry/galeria/img002.jpg",
        ],
        benefits: [
          {
            id: 0,
            title: "Trwałość i odporność",
            subtitle:
              "Verolith to materiał odporny na wilgoć, promieniowanie UV, mróz oraz uszkodzenia mechaniczne, co sprawia, że ryfle zachowują swój wygląd przez wiele lat.",
            icon: "/offer/benefits/benefit01.svg",
          },
          {
            id: 1,
            title: "Przyjazne środowisku",
            subtitle:
              "Verolith to materiał przyjazny środowisku, co czyni go doskonałym wyborem dla osób dbających o zrównoważony rozwój.",
            icon: "/offer/benefits/benefit02.svg",
          },
          {
            id: 2,
            title: "Estetyka i uniwersalność",
            subtitle:
              "Ryfle z Verolithu dostępne są w różnych wzorach i rozmiarach, co umożliwia dopasowanie ich do każdego stylu architektonicznego – od klasycznego po nowoczesny.",
            icon: "/offer/benefits/benefit03.svg",
          },
          {
            id: 3,
            title: "Lekkość i łatwość montażu",
            subtitle:
              "Dzięki niskiej wadze, ryfle są łatwe w transporcie i instalacji, co pozwala na szybkie i wygodne wykończenie elewacji.",
            icon: "/offer/benefits/benefit04.svg",
          },
        ],
      },
      {
        id: 3,
        title_match: "profile_elewacyjne",
        title: "Profile elewacyjne",
        subtitle:
          "Profile elewacyjne to ozdobne listwy i elementy montowane na fasadach budynków. Mogą pełnić funkcję dekoracyjną, podkreślając linie okien, drzwi, gzymsów czy narożników, a także funkcję ochronną, zabezpieczając elewację przed uszkodzeniami mechanicznymi i wpływem warunków atmosferycznych.",
        imageGallery: [
          "/offer/profile_elewacyjne/galeria/img001.jpg",
          "/offer/profile_elewacyjne/galeria/img002.jpg",
        ],
        benefits: [
          {
            id: 0,
            title: "Trwałość i odporność",
            subtitle:
              "Verolith to materiał odporny na wilgoć, promieniowanie UV, mróz oraz uszkodzenia mechaniczne, co sprawia, że ryfle zachowują swój wygląd przez wiele lat.",
            icon: "/offer/benefits/benefit01.svg",
          },
          {
            id: 1,
            title: "Przyjazne środowisku",
            subtitle:
              "Verolith to materiał przyjazny środowisku, co czyni go doskonałym wyborem dla osób dbających o zrównoważony rozwój.",
            icon: "/offer/benefits/benefit02.svg",
          },
          {
            id: 2,
            title: "Estetyka i uniwersalność",
            subtitle:
              "Ryfle z Verolithu dostępne są w różnych wzorach i rozmiarach, co umożliwia dopasowanie ich do każdego stylu architektonicznego – od klasycznego po nowoczesny.",
            icon: "/offer/benefits/benefit03.svg",
          },
          {
            id: 3,
            title: "Lekkość i łatwość montażu",
            subtitle:
              "Dzięki niskiej wadze, ryfle są łatwe w transporcie i instalacji, co pozwala na szybkie i wygodne wykończenie elewacji.",
            icon: "/offer/benefits/benefit04.svg",
          },
        ],
      },
      {
        id: 4,
        title_match: "kroksztyny",
        title: "Kroksztyny",
        subtitle:
          "Kroksztyny to elementy konstrukcyjne, które mogą mieć różnorodne formy – od prostych belek po bogato zdobione kształty, takie jak esownice czy woluty. Występują w parach lub większej liczbie, a ich zadaniem jest podtrzymywanie wystających części budynku, takich jak balkony czy gzymsy. Pojedynczy element tego typu nazywany jest wspornikiem, jednak to właśnie kroksztyny – w swojej liczbie i różnorodności – nadają budynkom wyjątkowego charakteru.",
        imageGallery: [
          "/offer/kroksztyny/galeria/img001.jpg",
          "/offer/kroksztyny/galeria/img002.jpg",
        ],
        benefits: [
          {
            id: 0,
            title: "Trwałość i odporność",
            subtitle:
              "Verolith to materiał odporny na wilgoć, promieniowanie UV, mróz oraz uszkodzenia mechaniczne, co sprawia, że ryfle zachowują swój wygląd przez wiele lat.",
            icon: "/offer/benefits/benefit01.svg",
          },
          {
            id: 1,
            title: "Przyjazne środowisku",
            subtitle:
              "Verolith to materiał przyjazny środowisku, co czyni go doskonałym wyborem dla osób dbających o zrównoważony rozwój.",
            icon: "/offer/benefits/benefit02.svg",
          },
          {
            id: 2,
            title: "Estetyka i uniwersalność",
            subtitle:
              "Ryfle z Verolithu dostępne są w różnych wzorach i rozmiarach, co umożliwia dopasowanie ich do każdego stylu architektonicznego – od klasycznego po nowoczesny.",
            icon: "/offer/benefits/benefit03.svg",
          },
          {
            id: 3,
            title: "Lekkość i łatwość montażu",
            subtitle:
              "Dzięki niskiej wadze, ryfle są łatwe w transporcie i instalacji, co pozwala na szybkie i wygodne wykończenie elewacji.",
            icon: "/offer/benefits/benefit04.svg",
          },
        ],
      },
      {
        id: 5,
        title_match: "zdobienia_okien",
        title: "Zdobienia okien",
        subtitle:
          "Zdobienia okien to wyjątkowy sposób na podkreślenie stylu architektonicznego budynku i nadanie mu indywidualnego charakteru. Ozdobne elementy wokół okien, takie jak listwy, gzymsy, opaski czy zworniki, nie tylko wzbogacają estetykę elewacji, ale również pełnią funkcję ochronną, zabezpieczając okna przed wpływem czynników atmosferycznych. Dzięki nowoczesnym materiałom, takim jak verolith, zdobienia okien łączą trwałość z precyzją wykonania.",
        imageGallery: [
          "/offer/zdobienia_okien/galeria/img001.jpg",
          "/offer/zdobienia_okien/galeria/img002.jpg",
        ],
        benefits: [
          {
            id: 0,
            title: "Trwałość i odporność",
            subtitle:
              "Verolith to materiał odporny na wilgoć, promieniowanie UV, mróz oraz uszkodzenia mechaniczne, co sprawia, że ryfle zachowują swój wygląd przez wiele lat.",
            icon: "/offer/benefits/benefit01.svg",
          },
          {
            id: 1,
            title: "Przyjazne środowisku",
            subtitle:
              "Verolith to materiał przyjazny środowisku, co czyni go doskonałym wyborem dla osób dbających o zrównoważony rozwój.",
            icon: "/offer/benefits/benefit02.svg",
          },
          {
            id: 2,
            title: "Estetyka i uniwersalność",
            subtitle:
              "Ryfle z Verolithu dostępne są w różnych wzorach i rozmiarach, co umożliwia dopasowanie ich do każdego stylu architektonicznego – od klasycznego po nowoczesny.",
            icon: "/offer/benefits/benefit03.svg",
          },
          {
            id: 3,
            title: "Lekkość i łatwość montażu",
            subtitle:
              "Dzięki niskiej wadze, ryfle są łatwe w transporcie i instalacji, co pozwala na szybkie i wygodne wykończenie elewacji.",
            icon: "/offer/benefits/benefit04.svg",
          },
        ],
      },
    ],
  }),
  getters: {
    offerByTitle: (state) => {
      return (title) =>
        state.offer.find((offer) => offer.title_match === title);
    },
  },
});
