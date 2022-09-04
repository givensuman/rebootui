import React from 'react';
import cn from 'classnames';
import { nanoid } from 'nanoid';

export type CarouselProps = {
  withControls?: boolean;
  withIndicators?: boolean;
  enableTouch?: boolean;
  autoplay?: boolean;
  fade?: boolean;
  dark?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Carousel = ({
  withControls,
  withIndicators,
  enableTouch = true,
  autoplay = true,
  fade,
  dark,
  ...props
}: CarouselProps) => {
  const id = nanoid();

  return (
    <div
      className={cn('carousel slide', {
        'carousel-fade': fade,
        'carousel-dark': dark
      })}
      data-bs-ride={autoplay ? 'carousel' : undefined}
      data-bs-touch={enableTouch}
      id={id}
      {...props}
    >
      <div className="carousel-inner">
        {React.Children.map(props.children, (child, index) => {
          if (index === 0 && React.isValidElement(child)) {
            return React.cloneElement(child, {
              className: `${child.props.className} active`,
              ...child.props
            });
          }
          return React.isValidElement(child) && React.cloneElement(child);
        })}
      </div>
      {withControls && (
        <>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
      {withIndicators && (
        <>
          <div className="carousel-indicators">
            {React.Children.map(props.children, (_, index) => {
              return (
                <button
                  type="button"
                  data-bs-target={`#${id}`}
                  data-bs-slide-to={index.toString()}
                  className={index === 0 ? 'active' : undefined}
                  aria-current={index === 0 ? 'true' : undefined}
                  aria-label={`Slide ${index + 1}`}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export type CarouselItemProps = {
  interval?: number;
} & React.HTMLAttributes<HTMLElement>;

export const CarouselItem = ({
  interval = 2000,
  ...props
}: CarouselItemProps) => {
  return (
    <div
      className="carousel-item"
      data-bs-interval={interval.toString()}
      {...props}
    >
      {props.children}
    </div>
  );
};

export const CarouselCaption = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="carousel-caption" {...props}>
      {props.children}
    </div>
  );
};
