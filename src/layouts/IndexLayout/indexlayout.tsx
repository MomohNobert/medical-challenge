import { Style } from './styles';

interface Props {
  profileSection: React.ReactNode;
  detailsSection: React.ReactNode;
}

export function IndexLayout({ profileSection, detailsSection }: Props) {
  return (
    <Style.Container>
      <section className="il-profile-section">{profileSection}</section>
      <section className="il-details-section">{detailsSection}</section>
    </Style.Container>
  );
}
