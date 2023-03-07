import { Add, Logo } from 'components/Icons';
import { Route } from './Route/route';
import { Style } from './styles';

const routes = [
  {
    href: '/new',
    imagePath: <Add />,
    pathName: 'New',
  },
  {
    href: '/patient',
    imagePath: '/layout/patient.png',
    pathName: 'Patient',
  },
  {
    href: '/folder',
    imagePath: '/layout/folder.png',
    pathName: 'Folder',
  },
  {
    href: '/upload',
    imagePath: '/layout/upload.png',
    pathName: 'Upload',
  },
  {
    href: '/Report',
    imagePath: '/layout/report.png',
    pathName: 'Report',
  },
  {
    href: '/Settings',
    imagePath: '/layout/settings.png',
    pathName: 'Settings',
  },
];

export function Sidebar() {
  return (
    <Style.Container>
      <section className="sidebar-logo">
        <Logo />
      </section>
      <section className="sidebar-routes">
        {routes.map(({ href, imagePath, pathName }) => (
          <Route
            key={href}
            href={href}
            imagePath={imagePath}
            pathName={pathName}
          />
        ))}
      </section>
      <section className="sidebar-actions">
        <img src="layout/logout.png" alt="log out" />
        <p>Logout</p>
      </section>
    </Style.Container>
  );
}
