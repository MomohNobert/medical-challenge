import { useState } from 'react';
import { Style } from './styles';
import { TreatmentInfo } from 'molecules';

const treatment_info = [
  {
    date: '26 Nov ‘19',
    time: '09.00 - 10.00',
    treatment: 'Open Access',
    dentist: 'Drg. Adam H.',
    nurse: 'Jessicamila',
    note: 'x',
  },
  {
    date: '12 Nov ‘19',
    time: '09.00 - 10.00',
    treatment: 'Root Canal',
    dentist: 'Drg. Adam H.',
    nurse: 'Jessicamila',
    note: 'x',
  },
];

export function Appointments() {
  const [appointmentRoute, setAppointmentRoute] = useState<string>('upcoming');

  function changeAppointmentRoute(route: string) {
    appointmentRoute === 'route' ? '' : setAppointmentRoute(route);
  }

  function checkActive(route: string) {
    return appointmentRoute === route;
  }

  return (
    <Style.Container>
      <Style.Routes option={appointmentRoute} className={`appointments-routes`}>
        <Style.P
          className={`ar-${appointmentRoute}`}
          onClick={() => changeAppointmentRoute('upcoming')}
          active={checkActive('upcoming')}
        >
          Upcoming Appointments
        </Style.P>
        <Style.P
          className={`ar-${appointmentRoute}`}
          onClick={() => changeAppointmentRoute('past')}
          active={checkActive('past')}
        >
          Past Appointments
        </Style.P>
        <Style.P
          className={`ar-${appointmentRoute}`}
          onClick={() => changeAppointmentRoute('medical')}
          active={checkActive('medical')}
        >
          Medical Records
        </Style.P>
      </Style.Routes>
      <section className="treatment-info">
        <article className="ti-header">
          <h2>Root Canal Treatment</h2>
          <button>Show Previous Treatments</button>
        </article>
        <article className="ti-content">
          {treatment_info.map((info) => (
            <TreatmentInfo info={info} />
          ))}
        </article>
      </section>
    </Style.Container>
  );
}
