import { Style } from './styles';

interface Props {
  href: string;
  imagePath: string | React.ReactElement;
  pathName: string;
}

export function Route({ href, imagePath, pathName }: Props) {
  return (
    <Style.Container href={href}>
      {typeof imagePath === 'string' ? (
        <img src={imagePath} alt={pathName || ''} />
      ) : (
        imagePath
      )}
      <p>{pathName}</p>
    </Style.Container>
  );
}
