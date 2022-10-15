import { A, H1, H2 } from '../../components/typography'
import FlexSection from '../../components/flex-section'
import { useThemeContext } from '../../layout/theme'
import Banner from '../../layout/banner'
import Wrapper from '../../layout/wrapper'
import { blockAccommodation, blockArea, blockTransport } from '../../data/location'

const Location = () => {
  const { theme, language } = useThemeContext()

  return (
    <>
      <Banner src={`/${theme}/banners/location.jpg`} />
      <Wrapper>
        <FlexSection>
          <A href='https://goo.gl/maps/bgfUDzJJTDaNyDn47'>
            <H1 className='location__title'>Le Rideau Rouge</H1>
            <H2>Rte de Renipont 70</H2>
            <H2>1380 Lasne</H2>
            <H2>Belgique</H2>
          </A>
        </FlexSection>
        <FlexSection image={`/${theme}/icons/location_1.svg`} belgiumColor='yellow' isReverse>
          <A href='https://goo.gl/maps/z4e9XKg8wi2TTY186'>
            <H2>{blockTransport[language].parking}</H2>
          </A>
          <br />
          <H2>{blockTransport[language].transport}</H2>
        </FlexSection>
        <FlexSection image={`/${theme}/icons/location_2.svg`} belgiumColor='red'>
          <H2>{blockAccommodation[language].text}</H2>
          <br />
          <A className='location__listItem' href='https://www.martinshotels.com/en/page/martins-louvain-la-neuve/martins-louvain-la-neuve-innovation-lifestyle-hotel.11057.html'>
            <H2>Martin's Louvain-La-Neuve</H2>
          </A>
          <br />
          <A
            className='location__listItem'
            href='https://www.booking.com/hotel/be/mercurelouvainlaneuve.en-gb.html?label=gen173nr-1DCAsoFUIVbWVyY3VyZWxvdXZhaW5sYW5ldXZlSAlYBGgViAEBmAEJuAEHyAEM2AED6AEBiAIBqAIDuAKspKqaBsACAdICJGM4ZTEyYjhmLTM3ODItNDFhZi04ZGVlLTc4MWM2ZjYwMzRmMdgCBOACAQ&sid=548996301c4fbc9c97fa9ab0a6a0c8c8&dist=0&keep_landing=1&sb_price_type=total&type=total&'>
            <H2>Ibis Louvain-La-Neuve</H2>
          </A>
          <br />
          <A className='location__listItem' href='https://www.dolcelahulpe.com/'>
            <H2>Dolce La Hulpe</H2>
          </A>
        </FlexSection>
        <FlexSection image={`/${theme}/icons/location_3.svg`} isReverse>
          <H2>{blockArea[language].text}</H2>
          <br />
          <a className='location__listItem' href='https://www.museeherge.com/en' target='_blank' rel='noreferrer'>
            <H2>Muséé Hergé</H2>
          </a>
          <br />
          <A className='location__listItem' href='https://villers.be/en'>
            <H2>Abbaye de Villers-La-Ville</H2>
          </A>
          <br />
          <A className='location__listItem' href='https://www.waterloo1815.be/en/'>
            <H2>Waterloo 1815 Memorial</H2>
          </A>
          <A className='location__listItem' href='https://www.walibi.be/en'>
            <H2>Walibi & Aqualibi Belgium</H2>
          </A>
        </FlexSection>
      </Wrapper>
    </>
  )
}

export default Location