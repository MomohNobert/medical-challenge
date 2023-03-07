import { Style } from './styles';

const details_data = [
  {
    name: 'Gender',
    content: 'Female',
  },
  {
    name: 'Birthday',
    content: 'Feb 24th, 1997',
  },
  {
    name: 'Phone Number',
    content: '(239) 555 -0108',
  },
  {
    name: 'Registered Date',
    content: 'Feb 24th, 1997',
  },
  {
    name: 'Street Address',
    content: 'JL. Diponegoro No. 21',
  },
  {
    name: 'City',
    content: 'Cilacap',
  },
  {
    name: 'Zip Code',
    content: '655849',
  },
  {
    name: 'Member Status',
    content: 'Active Member',
  },
];

export function Details() {
  return (
    <Style.Container>
      {details_data.map((detail) => (
        <article key={detail.content}>
          <p>{detail.name}</p>
          <span>{detail.content}</span>
        </article>
      ))}
    </Style.Container>
  );
}
