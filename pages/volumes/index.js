import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";

const StyledBookLink = styled(Link)`
  box-shadow: var(--box-shadow-book);

  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;

const StyledLink = styled(Link)`
  font-size: 18px;
`;

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.id}>
            <StyledBookLink href={`/volumes/${volume.slug}`}>{volume.title}</StyledBookLink>
          </li>
        ))}
      </ul>
      <br/>
      <StyledLink href="/">Go back to startpage</StyledLink>
    </>
  );
}
