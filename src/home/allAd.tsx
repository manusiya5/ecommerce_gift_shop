
export interface Ad{
    title: string;
    desc: string;
    bgColor: string;
    imgSrc: string,
    imgAlt: string,
    buyButtonColor: string;
    seeButtonColor: string;
}


export const ads: Ad[] = [
  {
    title: "Best savings on new arrival",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat, magnam odit est exercitationem quidem, iusto consequuntur quas sunt et ea fuga! Porro soluta quaerat nam, vel unde doloribus iusto.",
    bgColor: "#7cd3eb",
    imgSrc: "/image/ad/shoppingGirl.png",
    imgAlt: "Shopping Bag",
    buyButtonColor: "#1394c1",
    seeButtonColor: "white",
  },
  {
    title: "Best savings on new arrival",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat, magnam odit est exercitationem quidem, iusto consequuntur quas sunt et ea fuga! Porro soluta quaerat nam, vel unde doloribus iusto.",
    bgColor: "#6c2ca4",
    imgSrc: "/image/ad/balloon.png",
    imgAlt: "Balloon",
    buyButtonColor: "white",
    seeButtonColor: "#9242dd",
  },
];