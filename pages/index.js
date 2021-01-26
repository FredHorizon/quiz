import styled from 'styled-components'

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const TitleTwo = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <>
      <Title>My Title</Title>
      <TitleTwo>My subtitle</TitleTwo>
    </>
  )
}
