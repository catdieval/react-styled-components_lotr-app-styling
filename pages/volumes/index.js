import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";

const StyledLink = styled(Link)`
  box-shadow: var(--box-shadow-book);

  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.id}>
            <StyledLink href={`/volumes/${volume.slug}`}>{volume.title}</StyledLink>
          </li>
        ))}
      </ul>
    </>
  );
}
