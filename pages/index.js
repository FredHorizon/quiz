import styled from 'styled-components'

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

// O Styled component cria essa função com props e children automaticamente
// function Title(props) {
//   return <h1>{props.children}</h1>
// }

export default function Home() {
  return (
    <>
      <Title>My page</Title>
    </>
  )
}
