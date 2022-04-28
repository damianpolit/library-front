import styled from "styled-components";

const Wrapper = styled.div`
    // styles
`

const Header = styled.div`
    // styles
`
const Footer = styled.div`
    // styles
`

const AuthenticationTemplate = ({header, footer, children}) => {
    return (
        <Wrapper>
            <Header>{header}</Header>
            <div>{children}</div>
            <Footer>{footer}</Footer>
        </Wrapper>
    )
}

export default AuthenticationTemplate;