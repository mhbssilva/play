import IContentDataList from "../shared/interfaces/content-list-data";
import bbbLogo from "../assets/images/bbb-logo.png";
import bbbFeaturedContentBg from "../assets/images/bbb-featured-content-bg.jpg";
import bbbThumb1 from "../assets/images/bbb-image-1.jpg";
import bbbThumb2 from "../assets/images/bbb-image-2.jpg";
import bbbThumb3 from "../assets/images/bbb-image-3.jpg";
import bbbThumb4 from "../assets/images/bbb-image-4.jpg";
import bbbThumb5 from "../assets/images/bbb-image-5.jpg";
import bbbThumb6 from "../assets/images/bbb-image-6.jpg";

const sampleContentData: IContentDataList = {
  contents: [
    {
      type: "feature",
      programLogoImage: bbbLogo,
      data: [
        {
          title: "Acompanhe 24h ao vivo a casa mais vigiada do Brasil",
          backgroundImage: bbbFeaturedContentBg,
          actions: {
            play: true,
            more: true,
          },
        },
      ],
    },
    {
      type: "trail",
      trailName: "Agora no BBB",
      programName: "Big Brother Brasil",
      data: [
        {
          categoryName: "Realities",
          title: "Thelma é a campeã do BBB20, com 44,1% dos votos",
          backgroundImage: bbbThumb5,
          thumbImage: bbbThumb5,
        },
        {
          categoryName: "Realities",
          title: "Tiago se emociona na Final do BBB20",
          backgroundImage: bbbThumb1,
          thumbImage: bbbThumb1,
        },
        {
          categoryName: "Realities",
          title: "Programa de 27/04/2020",
          backgroundImage: bbbThumb2,
          thumbImage: bbbThumb2,
        },
        {
          categoryName: "Realities",
          title: "Bate-Papo BBB com Babu, último eliminado",
          backgroundImage: bbbThumb3,
          thumbImage: bbbThumb3,
        },
        {
          categoryName: "Realities",
          title: "Prêmio Rede BBB homenageia brothers",
          backgroundImage: bbbThumb4,
          thumbImage: bbbThumb4,
        },
        {
          categoryName: "Realities",
          title: "Tiago Leifert pergunta para sisters o que é o BBB",
          backgroundImage: bbbThumb6,
          thumbImage: bbbThumb6,
        },
      ],
    },
  ],
};

export default sampleContentData;
