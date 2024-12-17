import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-size: 18px;
`;

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <br/>
      <StyledLink href="/volumes">Go to all volumes</StyledLink>
    </div>
  );
}
