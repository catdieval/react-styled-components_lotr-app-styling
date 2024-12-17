import Image from "next/image";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled from "styled-components";
import ArrowLeft from "../../public/icons/arrow-left.svg";
import ArrowRight from "../../public/icons/arrow-right.svg";
import ChevronLeft from "../../public/icons/chevron-left.svg";
import StyledLink from "@/Components/StyledLink";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  const StyledDiv = styled.div`
    background-color: ${color};
  `;

  return (
    <StyledDiv>
      <StyledLink href="/volumes"><ChevronLeft /> All Volumes</StyledLink>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      {previousVolume ? (
        <div>
          <StyledLink href={`/volumes/${previousVolume.slug}`}>
            <ArrowLeft /> Previous Volume: {previousVolume.title}
          </StyledLink>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <StyledLink href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} <ArrowRight />
          </StyledLink>
        </div>
      ) : null}
    </StyledDiv>
  );
}
