import StyledComponentsRegistry from '../registry';
import { CardContainer, Container } from './styles';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head/>
      <body style={{minHeight: "100vh",display: "flex",margin: "0",width: "100%"}}>
        <Container>
          <CardContainer>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </CardContainer>
        </Container>
      </body>
    </html>
    ) 
}