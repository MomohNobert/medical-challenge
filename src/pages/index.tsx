import { Appointments, Details, FilesAndDocuments, Profile } from 'components';
import { IndexLayout } from 'layouts/IndexLayout/indexlayout';
import { MainLayout } from 'layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <IndexLayout
        profileSection={
          <>
            <Profile />
            <FilesAndDocuments />
          </>
        }
        detailsSection={
          <>
            <Details />
            <Appointments />
          </>
        }
      />
    </MainLayout>
  );
}
