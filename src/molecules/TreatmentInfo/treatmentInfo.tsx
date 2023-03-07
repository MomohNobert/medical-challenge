import { Note } from 'components/Icons';
import { Style } from './styles';

interface Info {
  date: string;
  time: string;
  treatment: string;
  dentist: string;
  nurse: string;
  note: string;
}

interface Props {
  info: Info;
}

export function TreatmentInfo(props: Props) {
  const { date, time, treatment, dentist, nurse, note } = props.info;
  return (
    <Style.Container>
      <div>
        <h3>{date}</h3>
        <span>{time}</span>
      </div>
      <div>
        <span>Treatment</span>
        <p>{treatment}</p>
      </div>
      <div>
        <span>Dentist</span>
        <p>{dentist}</p>
      </div>
      <div>
        <span>Nurse</span>
        <p>{nurse}</p>
      </div>
      <div>
        <Note />
        <span>Note</span>
      </div>
    </Style.Container>
  );
}
