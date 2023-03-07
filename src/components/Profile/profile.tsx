import { Style } from './styles';

export function Profile() {
  return (
    <Style.Container>
      <img className="profile-image" src="diane.png" alt="profile" />
      <h1>Diane Cooper</h1>
      <p>diane.cooper@example.com</p>
      <div className="profile-detail">
        <article>
          <p>15</p>
          <span>Past</span>
        </article>
        <article>
          <p>02</p>
          <span>Upcoming</span>
        </article>
      </div>
    </Style.Container>
  );
}
