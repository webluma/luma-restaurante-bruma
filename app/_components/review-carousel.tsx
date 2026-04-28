import Image from "next/image";

type Review = {
  name: string;
  role: string;
  text: string;
  image: string;
};

export function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const carouselReviews = [...reviews, ...reviews];

  return (
    <div className="review-carousel">
      <div className="review-carousel__track">
        {carouselReviews.map((review, index) => (
          <article
            key={`${review.name}-${index}`}
            className="review-card"
            aria-hidden={index >= reviews.length}
          >
            <div className="review-card__head">
              <div className="review-card__avatar">
                <Image
                  src={review.image}
                  alt={`Retrato de ${review.name}`}
                  fill
                  sizes="88px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-display text-2xl text-[var(--color-ink)]">
                  {review.name}
                </p>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  {review.role}
                </p>
              </div>
            </div>
            <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
              “{review.text}”
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
