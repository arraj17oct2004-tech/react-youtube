import Cards from "./Cards"

const cardArr = [
  {
    imageUrl: "https://comicvine.gamespot.com/a/uploads/scale_small/12/124259/8126579-amazing_spider-man_vol_5_54_stormbreakers_variant_textless.jpg",
    para: "A dynamic superhero swings into action, showcasing courage, agility, and the responsibility that comes with great power."
  },
  {
    imageUrl: "https://comicvine.gamespot.com/a/uploads/scale_small/5/57023/9905332-1000001866.jpg",
    para: "An intense comic cover featuring a powerful hero standing against overwhelming odds in a world full of challenges."
  },
  {
    imageUrl: "https://comicvine.gamespot.com/a/uploads/scale_small/12/124259/8251800-black_panther_vol_8_1_devil_dog_comics_and_jolzar_collectibles_exclusive_virgin_variant.jpg",
    para: "A legendary warrior king commands attention with strength, wisdom, and an unwavering commitment to protecting his people."
  },
  {
    imageUrl: "https://comicvine.gamespot.com/a/uploads/scale_small/12/124259/8926324-large-2680196.jpg",
    para: "A striking cover that captures the energy of a hero facing a pivotal moment in an epic adventure."
  },
  {
    imageUrl: "https://comicvine.gamespot.com/a/uploads/scale_small/12/124259/8753901-ezgif-3-69b95d2d1b.jpg",
    para: "An eye-catching illustration blending action and emotion, highlighting the hero's journey through conflict and triumph."
  }
];


const Right = () => {
  return (
   <div className='w-2/3 flex overflow-x-auto gap-4 p-4"'  id = "right">
      
     {
      cardArr.map(
         (Element,idx) => <Cards  imageUrl = {Element.imageUrl}  number = {idx+1}  para = {Element.para}  />

         )
     }
      
      
    </div>
  )
}

export default Right
