import { useSearchParams } from 'react-router-dom';

export default function SearchPage() {
  const [searchParams] = useSearchParams();

  const searchTerm = searchParams.get('term');
  const pageNumber = searchParams.get('page');

  return (
    <div>
      <h2>Search Results</h2>
      <p>You searched for: <strong>{searchTerm}</strong></p>
      <p>Viewing Page: <strong>{pageNumber}</strong></p>
    </div>
  )
}