import Banner from '../../components/Banners/Banner'
import Image1 from '../../components/Images/heroBanner1.png'
import Image2 from '../../components/Images/heroBanner2.png'
const LandingPage = () => {
  return (
    <div>
      <div>
        LandingPage1
        <Banner
          url={Image1}
          title="KONFERENCJA"
          main="UWAGA! SMARTFON"
          addL1="4 kwietnia 2024"
          addL2="ICE Kraków"
        ></Banner>
      </div>
      {/* <div>
        LandingPage2
        <Banner
          url={Image2}
          title="ZOSTAŃ WOLONTARIUSZEM WYDARZENIA"
          main="UWAGA! SMARTFON"
        ></Banner>
      </div> */}
    </div>
  )
}

export default LandingPage
