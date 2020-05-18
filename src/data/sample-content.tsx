import IContentDataList from "../shared/interfaces/content-list-data";
import bbbLogo from "../assets/images/bbb-logo.png";
import bbbFeaturedContentBg from "../assets/images/bbb-featured-content-bg.jpg";
import bbbTrailBg from "../assets/images/bbb-trail-bg.jpg";
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
      categoryName: "Realities",
      programName: "Big Brother Brasil",
      data: [
        {
          title: "Thelma é a campeã do BBB20, com 44,1% dos votos",
          backgroundImage: bbbTrailBg,
          thumbImage: bbbThumb5,
        },
        {
          title: "Tiago se emociona na Final do BBB20",
          backgroundImage: bbbTrailBg,
          thumbImage: bbbThumb1,
        },
        {
          title: "Programa de 27/04/2020",
          backgroundImage: bbbTrailBg,
          thumbImage: bbbThumb2,
        },
        {
          title: "Bate-Papo BBB com Babu, último eliminado",
          backgroundImage: bbbTrailBg,
          thumbImage: bbbThumb3,
        },
        {
          title: "Prêmio Rede BBB homenageia brothers",
          backgroundImage: bbbTrailBg,
          thumbImage: bbbThumb4,
        },
        {
          title: "Tiago Leifert pergunta para sisters o que é o BBB",
          backgroundImage: bbbTrailBg,
          thumbImage: bbbThumb6,
        },
      ],
    },
  ],
};

export default sampleContentData;
