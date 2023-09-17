import { useRouter } from 'next/router';

function TVDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Fetch movie details using the ID
  // Render the movie details

  return (
    <div>
      {/* Render movie details here */}
    </div>
  );
}

export default TVDetail;