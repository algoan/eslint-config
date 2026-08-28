/**
 * A point on a two dimensional plane.
 */
export interface Point {
  /**
   * Abscissa of the point.
   */
  x: number;
  /**
   * Ordinate of the point.
   */
  y: number;
}

/**
 * Computes the squared euclidean norm of a point.
 */
export const squaredNorm = (point: Point): number => point.x * point.x + point.y * point.y;

/**
 * Translates a point along the x axis.
 */
export const translateX = (point: Point, offset: number): Point => ({
  x: point.x + offset,
  y: point.y,
});
