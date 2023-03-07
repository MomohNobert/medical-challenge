import { Sidebar } from './Sidebar/sidebar';
import { Style } from './styles';

interface Props {
  children: React.ReactNode;
}

export function MainLayout({ children }: Props) {
  return (
    <Style.Container>
      <Sidebar />
      <section className="main-layout-content">{children}</section>
    </Style.Container>
  );
}
