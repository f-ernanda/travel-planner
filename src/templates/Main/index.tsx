import * as Styled from './styles'

import Menu from '@/components/Menu'
import Heading from '@/components/Heading'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import TravelCard from '@/components/TravelCard'
import Footer from '@/components/Footer'
import { Container } from '@/utils/container-utils'

const Main = () => (
  <Styled.Wrapper>
    <Container>
      <Styled.MenuContainer>
        <Menu />
      </Styled.MenuContainer>

      <Styled.SearchContainer>
        <Heading $withVerticalLine>Describe your next trip</Heading>
        <TextField></TextField>
        <Button>Search</Button>
      </Styled.SearchContainer>

      <Styled.TravelList>
        <Heading $withVerticalLine>Your results</Heading>
        <TravelCard
          $img="/img/mariaberget.jpg"
          $title="Mariaberget"
          $flight="1+ stops"
          $flightPrice="$350"
          $hotel="4 stars"
          $hotelPrice="$89"
        ></TravelCard>

        <TravelCard
          $img="/img/mariaberget.jpg"
          $title="Mariaberget"
          $flight="1+ stops"
          $flightPrice="$350"
          $hotel="4 stars"
          $hotelPrice="$89"
        ></TravelCard>

        <TravelCard
          $img="/img/mariaberget.jpg"
          $title="Mariaberget"
          $flight="1+ stops"
          $flightPrice="$350"
          $hotel="4 stars"
          $hotelPrice="$89"
        ></TravelCard>

        <TravelCard
          $img="/img/mariaberget.jpg"
          $title="Mariaberget"
          $flight="1+ stops"
          $flightPrice="$350"
          $hotel="4 stars"
          $hotelPrice="$89"
        ></TravelCard>

        <TravelCard
          $img="/img/mariaberget.jpg"
          $title="Mariaberget"
          $flight="1+ stops"
          $flightPrice="$350"
          $hotel="4 stars"
          $hotelPrice="$89"
        ></TravelCard>
      </Styled.TravelList>

      <Styled.FooterContainer>
        <Footer />
      </Styled.FooterContainer>
    </Container>
  </Styled.Wrapper>
)

export default Main
