import { useEffect, useState } from 'react';

const Quotes = () => {
  const [loading, setLoading] = useState('not loading');
  const [error, setError] = useState('error');
  const [quotesReceived, setQuote] = useState([]);

  const fetchData = async () => {
    const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=car', {
      headers: {
        'X-Api-Key': 'ZJ3IFb/9YeppGL24QxYuOg==Ku0AmqYqwpVyG0tY',
      },
    });
    setLoading('Wait Loading');
    const receiveData = await res.json();
    setQuote(receiveData);
    setError('not error');
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading === 'not loading') {
    return (
      <p className="quoteAuthor">
        Loading
      </p>
    );
  }

  if (error === 'error') {
    return (
      <p className="quoteAuthor">
        Error
      </p>
    );
  }

  return (
    <div className="quoteBox">
      {quotesReceived.map((quote) => (
        <div key={quote} className="quotes">
          <p>
            {`"${quote.quote}"`}
          </p>
          <p className="quoteAuthor">
            {quote.author}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Quotes;
