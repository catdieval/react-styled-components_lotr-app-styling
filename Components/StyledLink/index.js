import styled from "styled-components";
import Link from "next/link";

const StyledLinkTemp = styled(Link)`
  font-size: 18px;
`;

export default function StyledLink({ children, href }) {
    return (
      <StyledLinkTemp href={href}>{children}</StyledLinkTemp>
    );
} 

