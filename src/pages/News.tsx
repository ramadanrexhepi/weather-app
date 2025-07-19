import { useNews } from "../api/useNews";

function News() {
  const { data, isLoading, error } = useNews();

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">🌍 Weather & Climate News</h2>

      {isLoading && <p>Loading news...</p>}
      {error && <p className="text-red-500">Failed to load news.</p>}

      <div className="space-y-6">
        {data?.map((article: any, idx: number) => (
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            className="block bg-white dark:bg-gray-800 rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{article.source.name}</p>
            <p className="text-sm">{article.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default News;
