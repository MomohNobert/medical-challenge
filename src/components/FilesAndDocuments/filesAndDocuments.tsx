import { Note } from 'components/Icons';
import { Style } from './styles';

const documents_details = [
  'Check Up Results.pdf',
  'MRI Results.pdf',
  'Medical Prescription.pdf',
  'Dental X-Ray Results.pdf',
];

export function FilesAndDocuments() {
  return (
    <Style.Container>
      <button>Send Message</button>
      <article className="fd-section">
        <h2>Files / Documents</h2>
        {documents_details.map((detail) => (
          <article key={detail}>
            <Note />
            <p>{detail}</p>
          </article>
        ))}
      </article>
    </Style.Container>
  );
}
